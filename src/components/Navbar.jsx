import { useNavigate } from "react-router-dom";
import MyLogo from "../images/logo.png";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar flex justify-between px-7 py-4 border border-b border-third">
      <a onClick={() => navigate("/")} href="#" className="">
        <img className="md:w-11 md:h-11"src={MyLogo} alt="Logo of website" />
      </a>
      <div className="card-button gap-[8px] h-[48px] w-[276px] flex justify-between">
        <button className="bg-white hidden md:block rounded-[999px] border-[1px] border-black p-2 text-center w-[127px]">
          Log in
        </button>
        <button className="bg-black hidden md:block text-white rounded-[999px] border-[1px] p-2 text-center w-[141px]">
          Sign up
        </button>
      </div>
    </nav>
  );
}
