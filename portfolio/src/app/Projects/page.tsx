import "./projects.css";
import Link from "next/link";
export default function Projects(){
    return (
        <div className="ProjectContainer w-full h-max px-22">
            <div className="Title w-fit h-auto flex items-center ">
                <h1 className="projects title text-5xl italic font-bold py-20 ">projects</h1>
            </div>
            <div className="ProjectTableContainer w-full h-1/2 overflow-hidden relative">
                <div className="TableContainer overflow-auto h-full relative">
                    <table className="ProjectTable w-full border-collapse border border-gray-800 relative">
                        <thead className="ProjectTableHead bg-gray-100 sticky top-0 z-30">
                            <tr>
                                <th className="NameCol border border-gray-800 p-2 w-1/7">Name</th>
                                <th className="DescriptionCol border border-gray-800 p-2 w-2/7">Description</th>
                                <th className="ProjectCol border border-gray-800 p-2 w-1/7">Project scope</th>
                                <th className="RoleCol border border-gray-800 p-2 w-1/7">Role</th>
                                <th className="TechCol border border-gray-800 p-2 w-2/7">Techniques</th>
                                <th className="StatusCol border border-gray-800 p-2 w-1/7">Status</th>
                                <th className="LinkCol border border-gray-800 p-2 w-1/7">Link</th>
                            </tr>
                        </thead>
                        <tbody className="w-full h-max">
                            <tr className="BodyRow italic font-semibold text-center">
                                <td data-label="Name :" className=" border border-gray-800 p-2">Predictive education advisory system</td>
                                <td data-label="Description :" className="border border-gray-800 p-2">
                                    Develop an application using Python Flask to train AI system to help the student to choose the right major in the university.
                                </td>
                                <td data-label="Project scope :" className="border border-gray-800 p-2">School project</td>
                                <td data-label="Role :" className="border border-gray-800 p-2">Frontend developer</td>
                                <td data-label="Techniques :" className="border border-gray-800 p-2">Python, Flask, React.js, Foundation Sites</td>
                                <td data-label="Status :" className="border border-gray-800 p-2 Finished">Finished</td>
                                <td data-label="Link :" className="border border-gray-800 p-2">
                                    <Link href="https://github.com/Schrrodinger/PEAS-Predictive-Educational-Advisory-System" className="text-blue-500 underline">GitHub</Link>
                                </td>
                            </tr>

                            <tr className=" BodyRow text-center italic font-semibold ">
                                <td data-label="Name :" className="border border-gray-800 p-2">Simple Pokémon game</td>
                                <td data-label="Description :" className="border border-gray-800 p-2">
                                    Develope Pokémon database using crawling techniques and PokeCat game using Golang
                                </td>
                                <td data-label="Project scope :" className="border border-gray-800 p-2">School project</td>
                                <td data-label="Role :" className="border border-gray-800 p-2">Backend developer</td>
                                <td data-label="Techniques :" className="border border-gray-800 p-2">Golang ( mutex , channel , go routine ) , Playwright , Termbox</td>
                                <td data-label="Status :" className="border border-gray-800 p-2 Finished">Finished</td>
                                <td data-label="Link :" className="border border-gray-800 p-2">
                                    <Link href="https://github.com/PhungNghiaMa/NetCentric-Project" className="text-blue-500 underline">GitHub</Link>
                                </td>
                            </tr>

                            <tr className="BodyRow text-center italic font-semibold ">
                                <td data-label="Name :" className="border border-gray-800 p-2">Content Management System</td>
                                <td data-label="Description :" className="border border-gray-800 p-2">
                                    Develop an web application to write content as form of Markdown
                                </td>
                                <td data-label="Project scope :" className="border border-gray-800 p-2">School project</td>
                                <td data-label="Role :" className="border border-gray-800 p-2">Backend developer</td>
                                <td data-label="Techniques :" className="border border-gray-800 p-2">Golang , Gin , GORM</td>
                                <td data-label="Status :" className="border border-gray-800 p-2 Finished">Finished</td>
                                <td data-label="Link :" className="border border-gray-800 p-2">
                                    <Link href="https://github.com/quang-pham-1109/content-management-system" className="text-blue-500 underline">GitHub</Link>
                                </td>
                            </tr>

                            <tr className="BodyRow text-center italic font-semibold ">
                                <td data-label="Name :" className="border border-gray-800 p-2">Java Chess Game</td>
                                <td data-label="Description :" className="border border-gray-800 p-2">
                                    Develop a simple chess by applying design pattern and OOP principles using Java
                                </td>
                                <td data-label="Project scope :" className="border border-gray-800 p-2">School project</td>
                                <td data-label="Role :" className="border border-gray-800 p-2">Backend developer</td>
                                <td data-label="Techniques :" className="border border-gray-800 p-2">Java , Design pattern ( Decorator ) , Java Swing</td>
                                <td data-label="Status :" className="border border-gray-800 p-2 Finished">Finished</td>
                                <td data-label="Link :" className="border border-gray-800 p-2">
                                    <Link href="https://github.com/nguyenhuybao1108/dsaProject2023" className="text-blue-500 underline">GitHub</Link>
                                </td>
                            </tr>

                            <tr className="BodyRow text-center italic font-semibold ">
                                <td data-label="Name :" className="border border-gray-800 p-2">Password Manager</td>
                                <td data-label="Description :" className="border border-gray-800 p-2">
                                    Develop a web application to manage and check password using Golang and Next.js
                                </td>
                                <td data-label="Project scope :" className="border border-gray-800 p-2">Personal project</td>
                                <td data-label="Role :" className="border border-gray-800 p-2">Fullstack developer</td>
                                <td data-label="Techniques :" className="border border-gray-800 p-2">Golang , Next.js , PostgreSQL , Tailwind CSS</td>
                                <td data-label="Status :" className="border border-gray-800 p-2 InProgress">In progress</td>
                                <td data-label="Link :" className="border border-gray-800 p-2"></td>
                            </tr>

                            <tr className="BodyRow text-center italic font-semibold ">
                                <td data-label="Name :" className="border border-gray-800 p-2">Hat Boi 3D Virtual Museum</td>
                                <td data-label="Description :" className="border border-gray-800 p-2">
                                    Develop a virtual museum on web platform that users can visit and explore the museum using 3D model
                                </td>
                                <td data-label="Project scope :" className="border border-gray-800 p-2">Thesis</td>
                                <td data-label="Role :" className="border border-gray-800 p-2">Fullstack developer</td>
                                <td data-label="Techniques :"className="border border-gray-800 p-2">Golang ( intend ) , Next.js ( intend ) , Three.js , Blender , PostgreSQL ( intend )</td>
                                <td data-label="Status :" className="border border-gray-800 p-2 InProgress">In progress</td>
                                <td data-label="Link :" className="border border-gray-800 p-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}