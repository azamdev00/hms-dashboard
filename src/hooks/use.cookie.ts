import { Dispatch, SetStateAction, useState } from "react";

type objectOrString = object | string;
function useCookie<T extends objectOrString>(
  key: string,
  initialValue?: T
): [T, Dispatch<SetStateAction<T>>] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>((): any => {
    try {
      // Get from local storage by key
      const cookieString = document.cookie;
      const cookies = cookieString.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(key + "=")) {
          return cookie.substring(key.length + 1);
        }
      }
      return initialValue;
    } catch (err) {
      // If error also return initialValue
      console.log("Error in Cookies : ", err);

      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.

  const setValue = (value: Function | T) => {
    try {
      const valueToStore: T =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      const expires = new Date();
      expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
      document.cookie = `${key}=${valueToStore};expires=${expires.toUTCString()};path=/`;
    } catch (err) {
      console.log("Error in set function : ", err);
    }
  };

  return [storedValue, setValue];
}

export default useCookie;
