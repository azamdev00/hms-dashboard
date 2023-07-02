import { Doctor } from "@/interfaces/doctor";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserPersist {
  setUser: (user: Doctor) => void;
  clearUser: () => void;
  user: Doctor | null;
}

const useUserStore = create<UserPersist>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set(() => ({ user: user })),
      clearUser: () => set(() => ({ user: null })),
    }),
    {
      name: "poylicnic",
    }
  )
);

export default useUserStore;
