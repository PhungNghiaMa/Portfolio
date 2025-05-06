import Link from "next/link"
import Introduction from "./Introduction/page"
import Projects from "./Projects/page"
import Contacts from "./Contacts/page";
import "./globals.css";
export default function Portfolio(){
  return (
    <div className="PortfolioContainer w-full h-full overflow-hidden flex-col">
      <div className="NavContainer w-full max-h-1/12 fixed top-0 pb-18 pt-5">
          <nav className="NavBarContainer w-full max-h-fit flex-row items-center justify-between">
            <div className="NavBar flex flex-row items-center justify-between w-full h-full">
              <div className="NameContainer w-2/12 flex items-center justify-center ">
                <h1 className="text-xl font-bold Name">Mã Phùng Nghĩa</h1>
              </div>
              <div className="Navigation w-4/12 flex flex-row items-center justify-around bg-transparent py-3 border border-white rounded-md">
                <Link href ="#introduction" className="Projects text">Introduction</Link>
                <Link href ="#projects" className="Projects text">Projects</Link>
                <Link href ="#contacts" className="Contacts text">Contacts</Link>
              </div>
              <div className="RoleContainer w-2/12 flex items-center justify-center">
                <h1 className="Role text text-lg font-semibold">Intern fullstack</h1>
              </div>
              <div className="SmallNavigationContainer w-full border-t-2 border-b-2 border-amber-500 my-2">
                <div className="SmallNavigation w-full flex flex-row items-center justify-around bg-transparent py-3 border border-white rounded-md">
                  <Link href ="#introduction" className="Introduction text">Introduction</Link>
                  <Link href ="#projects" className="Projects text">Projects</Link>
                  <Link href ="#contacts" className="Contacts text">Contacts</Link>
                </div>
              </div>
            </div>
          </nav>
      </div>

      <div className="ContentContainer w-full max-h-fit overflow-hidden  py-24 ">
        <div className="SubContentContainer w-full overflow-auto ">
          <div className="w-auto h-auto" id="introduction">
            <Introduction></Introduction>
          </div>
          <div className="TransitionPage w-full h-1/2"></div>
            <div className="w-auto h-auto" id="projects">
              <Projects></Projects>
            </div>
            <div className="SecondTransitionPage w-full h-1/2"></div>
            <div className="w-auto h-auto" id="contacts">
              <Contacts></Contacts>
            </div>
        </div>
      </div>
      <div className="w-full h-auto border border-amber-500 "></div>

    </div>
  )
}