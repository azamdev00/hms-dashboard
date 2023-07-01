import { useState } from "react";

function useCookie(key: string, initialValue: string) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
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
      return null;
    } catch (err) {
      // If error also return initialValue
      console.log("Error in Cookies : ", err);

      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to cookie.

  const setValue = (value: Function) => {
    try {
      const valueToStore =
        typeof value === "function" ? value(storedValue) : value;

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
