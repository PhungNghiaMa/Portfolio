"use client"
import "./introduction.css";
import {useState , useEffect} from 'react';
const sections = ['about' , 'education' , 'experience' , 'skills']


export default function Introduction() {
    const [activeSection , setActiveSection] = useState('about');
    const _activeSection = activeSection;
    useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.8,
        };
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const sectionId = entry.target.id;
      
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
      
              // Reset all circles first
              sections.forEach(id => {
                const circle = document.querySelector(`.Circle[data-section="${id}"]`);
                if (circle) {
                  (circle as HTMLElement).style.backgroundColor = 'black'; // bg-green-300
                  (circle as HTMLElement).style.transform = 'scale(1)';
                  (circle as HTMLElement).style.borderColor = '#000000'; // border-gray-400
                }
              });
      
              // Highlight active circle
              const activeCircle = document.querySelector(`.Circle[data-section="${sectionId}"]`);
              if (activeCircle) {
                (activeCircle as HTMLElement).style.backgroundColor = 'orange'; // bg-green-500 or 600
                (activeCircle as HTMLElement).style.transform = 'scale(1.2)';
                (activeCircle as HTMLElement).style.borderColor = 'gray'; // dark green
              }
            }
          });
        }, observerOptions);
      
        sections.forEach(id => {
          const section = document.getElementById(id);
          if (section) {
            observer.observe(section);
          }
        });
    });
    return (
        <div className="GeneralIntroContainer w-full h-fit">
                <div className="IntroContainer w-full flex flex-row row-span-2 items-start justify-around overflow-hidden py-10 ">
                    <div className="FirstCol w-1/2 h-auto flex flex-col items-center justify-center overflow-auto flex-wrap px-22  py-20 ">
                        <div id="about" className="AboutMeContainer flex w-full h-1/2 overflow-auto flex-col ">
                        <div className="text w-full flex items-center justify-start">
                            <h1 className="ABOUT text-4xl title font-bold italic">about me</h1>
                        </div>
                        <div className="text items-center flex justify-start GREETING">
                            <h1 className="GREETING text-lg">hello, there</h1>
                        </div>
                        <div className="FirstIntro w-full flex items-center justify-start py-2">
                            <p className="text-md CONTENT">
                                as a passionate Computer Science student and fullstack development intern with 
                                a strong foundation in backend engineering. I’ve worked extensively with languages like Go, Java, 
                                Node.js, and Python to build APIs, implement backend logic, and design robust databases using PostgreSQL, 
                                MySQL, and Microsoft SQL Server. On the frontend, I’m comfortable crafting clean interfaces with React.js, Next.js, and Tailwind CSS.
                            </p>
                        </div>
                        <div className="SecondIntro flex items-center justify-start py-2">
                            <p className="text-md CONTENT">
                                while I specialize in backend development, I enjoy touching every layer of the stack and constantly seek to expand my skill set. What sets me 
                                apart is my unshakable determination—when I hit a roadblock, I don’t walk away; I dig deeper until I find a solution. I thrive in team environments 
                                thanks to my enthusiasm for collaboration, and I’m always eager to learn something new, no matter how challenging it may be.
                            </p>
                        </div>
                        </div>
                        <div id="education" className="EducationContainer flex flex-col col-span-2 w-full h-1/2 overflow-auto py-20">
                            <div className="text educationtitle w-full flex items-center justify-start">
                                <h1 className="text-3xl title  font-bold italic">education</h1>
                            </div>
                            <div className="education">
                                <div className="FirstEducation">
                                    <span className="text-sm italic status">
                                        [ Undergraduate ]
                                    </span>
                                    <br/>
                                    <span className="text-lg font-semibold major  ">
                                        Bachelor of Computer Science
                                    </span>
                                    <br/>
                                    <span className="text-md italic school">
                                        Internaitional University - Ho Chi Minh National University ( HCMIU )
                                    </span>
                                    <br/>
                                    <span className="text-md duration">
                                        sep.2021 - present
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="SecondCol w-1/2 h-auto flex flex-col overflow-auto px-20 py-18">
                    <div id="experience" className="ExperienceContainer w-full h-auto overflow-auto flex flex-col">
                        <div className="text-4xl experience title font-bold italic w-full h-auto">
                            <h1>experience</h1>
                        </div>  
                        <div className="FirstExp firstEXP">
                            <span className="text-md italic status">
                                [ frontend developer ]
                            </span>
                            <br/>
                            <span className="text-lg font-semibold italic competition">
                                UIT Data Challenge
                            </span>
                            <br/>
                            <span className="text-md duration">
                                2024
                            </span>
                        </div>
                    </div>
                    <div id="skills" className="SkillContainer w-full max-h-1/2 flex flex-col overflow-hidden py-20">
                        <div className="skills w-full h-auto flex items-center justify-start">
                            <h1 className="text-5xl skilltitle title font-bold italic">skills</h1>
                        </div>
                        <div className="SkillTableContainer w-full h-1/2 overflow-auto flex items-start justity-start py-4">
                            <table className="TableContainer min-w-full max-h-fit overflow-hidden">
                                <thead className="SkillTableHead text-left text-xl font-semibold italic">
                                    <tr>
                                        <th>Language</th>
                                        <th>Framweorks // Tools // Library </th>
                                    </tr>
                                </thead>
                                <tbody className="SkillTableBody w-full text-left text-lg font-thin">
                                    <tr className="py-2">
                                        <td>Golang</td>
                                        <td className="framework">Gin , Playwright </td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>Java</td>
                                        <td className="framework">Srpingboot</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>Node.js</td>
                                        <td className="framework">Express.js , Nest.js</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td >React.js</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>Next.js</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>PostgreSQL</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>MSSQL</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>MySQL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>         
            </div>
            <div className="PaginationCircles">
                        {sections.map((sectionId) => (
                            <a key={sectionId} href={`#${sectionId}`}>
                            <div
                                data-section = {sectionId}
                                className={`Circle w-4 h-4 rounded-full border border-gray-400 transition-all duration-300`}
                            ></div>
                            </a>
                        ))}
            </div>
        </div>
    )
}