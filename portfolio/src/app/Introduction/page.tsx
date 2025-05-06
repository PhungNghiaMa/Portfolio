'use client'
import "./introduction.css";
import {useState , useEffect} from 'react';
const sections = ['about' , 'education' , 'experience' , 'skills']


export default function Introduction() {
    const [activeSection , setActiveSection] = useState('about');
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
                  (circle as HTMLElement).style.backgroundColor = '#86efac'; // bg-green-300
                  (circle as HTMLElement).style.transform = 'scale(1)';
                  (circle as HTMLElement).style.borderColor = '#9ca3af'; // border-gray-400
                }
              });
      
              // Highlight active circle
              const activeCircle = document.querySelector(`.Circle[data-section="${sectionId}"]`);
              if (activeCircle) {
                (activeCircle as HTMLElement).style.backgroundColor = '#22c55e'; // bg-green-500 or 600
                (activeCircle as HTMLElement).style.transform = 'scale(1.25)';
                (activeCircle as HTMLElement).style.borderColor = '#166534'; // dark green
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
                            <h1 className="text-4xl font-bold italic">about me</h1>
                        </div>
                        <div className="text items-center flex justify-start">
                            <h1 className="text-lg">hello, there</h1>
                        </div>
                        <div className="FirstIntro w-full flex items-center justify-start py-2">
                            <p className="text-md">
                                as a passionate Computer Science student and fullstack development intern with 
                                a strong foundation in backend engineering. I’ve worked extensively with languages like Go, Java, 
                                Node.js, and Python to build APIs, implement backend logic, and design robust databases using PostgreSQL, 
                                MySQL, and Microsoft SQL Server. On the frontend, I’m comfortable crafting clean interfaces with React.js, Next.js, and Tailwind CSS.
                            </p>
                        </div>
                        <div className="SecondIntro flex items-center justify-start py-2">
                            <p className="text-md">
                                while I specialize in backend development, I enjoy touching every layer of the stack and constantly seek to expand my skill set. What sets me 
                                apart is my unshakable determination—when I hit a roadblock, I don’t walk away; I dig deeper until I find a solution. I thrive in team environments 
                                thanks to my enthusiasm for collaboration, and I’m always eager to learn something new, no matter how challenging it may be.
                            </p>
                        </div>
                        </div>
                        <div id="education" className="EducationContainer flex flex-col col-span-2 w-full h-1/2 overflow-auto py-20">
                            <div className="text w-full flex items-center justify-start">
                                <h1 className="text-3xl font-bold italic">education</h1>
                            </div>
                            <div className="education">
                                <div className="FirstEducation">
                                    <span className="text-sm italic">
                                        [ Undergraduate ]
                                    </span>
                                    <br/>
                                    <span className="text-lg font-semibold  ">
                                        Bachelor of Computer Science
                                    </span>
                                    <br/>
                                    <span className="text-md italic">
                                        Internaitional University - Ho Chi Minh National University ( HCMIU )
                                    </span>
                                    <br/>
                                    <span className="text-md">
                                        sep.2021 - present
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="SecondCol w-1/2 h-auto flex flex-col overflow-auto px-20 py-18">
                    <div id="experience" className="ExperienceContainer w-full h-auto overflow-auto flex flex-col">
                        <div className="text-4xl font-bold italic w-full h-auto">
                            <h1>experience</h1>
                        </div>  
                        <div className="FirstExp">
                            <span className="text-md italic">
                                [ frontend developer ]
                            </span>
                            <br/>
                            <span className="text-lg font-semibold italic">
                                UIT Data Challenge
                            </span>
                            <br/>
                            <span className="text-md">
                                2024
                            </span>
                        </div>
                    </div>
                    <div id="skills" className="SkillContainer w-full max-h-1/2 flex flex-col items-start overflow-hidden py-20">
                        <div className="w-full h-auto flex items-center justify-start">
                            <h1 className="text-5xl font-bold italic">skills</h1>
                        </div>
                        <div className="SkillTableContainer w-full h-1/2 overflow-auto flex items-start justity-start py-4">
                            <table className="TableContainer w-full max-h-fit overflow-hidden">
                                <thead className="SkillTableHead text-left text-xl font-semibold italic">
                                    <tr>
                                        <th>Language</th>
                                        <th>Framweorks // Tools // Library </th>
                                    </tr>
                                </thead>
                                <tbody className="SkillTableBody text-left text-lg font-thin">
                                    <tr className="py-2">
                                        <td>Golang</td>
                                        <td>Gin , Playwright </td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>Java</td>
                                        <td>Srpingboot</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>Node.js</td>
                                        <td>Express.js , Nest.js</td>
                                    </tr>
                                    <tr className="py-2">
                                        <td>React.js</td>
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
                        {sections.map((sectionId, index) => (
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