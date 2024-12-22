import { atom } from "recoil";

type userAtomType = {
  isLoggedIn: boolean;
  user?: {
    email: string;
  };
};

export const userAtom = atom<userAtomType>({
  key: "userAtom",
  default: {
    isLoggedIn: false,
    user: undefined,
  },
});
