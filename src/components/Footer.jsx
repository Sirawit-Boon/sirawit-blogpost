import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#EFEEEB] flex justify-between items-center w-full h-[144px] px-28 ">
      <div className="footer-left flex justify-center items-center gap-8">
        <p className="footer-text">Get In Touch</p>
        <ul className="logo flex gap-4 p-0 justify-center items-center">
          <li className="linkedIn bg-[#43403B] rounded-2xl w-6 h-6">
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              className="linkedIn-logo"
            >
              <Linkedin className="text-white w-2/3 place-self-center"/>
            </a>
          </li>
          <li className="github bg-[#43403B] rounded-2xl w-6 h-6 relative">
            <a href="https://github.com/Sirawit-Boon" className="github-logo">
              <Github className="text-white w-4/5 place-self-center absolute left-[2.5px] top-[3px]"/>
            </a>
          </li>
          <li className="google bg-[#43403B] rounded-2xl w-6 h-6">
            <a href="https://www.google.co.th/" className="google-logo">
              <Mail className="text-white w-2/3 place-self-center"/>
            </a>
          </li>
        </ul>
      </div>

      <a className="text-lg font-medium text-gray-700 hover:underline" href="#">
        Home page
      </a>
    </footer>
  );
}
