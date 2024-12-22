import { useRecoilState } from "recoil";
import { userAtom } from "../store/atoms/user";

const Landing = () => {
  const [user] = useRecoilState(userAtom);

  return (
    <div className="text-3xl">You are logged in as {user.user?.email}</div>
  );
};

export default Landing;
