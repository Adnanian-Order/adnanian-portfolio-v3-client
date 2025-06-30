import { useState } from "react";
import "../styles/Projects.css";
import { ProjectType } from "../helpers";
import TechnicalProjectsList from "./sub-sections/TechnicalProjectsList";
import SideProjectsList from "./sub-sections/SideProjectsList";

export default function ProjectsSection() {
    const [projectType, setProjectType] = useState(ProjectType.TECHNICAL);

    /**
     * Sets a new value for the project type state based on the radio button clicked.
     * 
     * @param {Event} e the event
     */
    function handleChange(e) {
        setProjectType(e.target.value);
    }

    return (
        <section id="projects">
            <h1>My Projects</h1>
            <p className="inner-frame">
                I have organized all my projects into two categories. One category
                is reserved for all the applications that I made using the skills
                mentioned above. The other category is for side projects that I work
                on whenever I have free time.
            </p>
            <h2>Select the project type below: </h2>
            <div className="radio-group">
                <div className="radio">
                    <input
                        name="tech-radio"
                        type="radio"
                        value={ProjectType.TECHNICAL}
                        onChange={handleChange}
                        checked={projectType === ProjectType.TECHNICAL}
                    />
                    <span>Technical Projects</span>
                </div>
                <div className="radio">
                    <input
                        name="side-radio"
                        type="radio"
                        value={ProjectType.SIDE}
                        onChange={handleChange}
                        checked={projectType === ProjectType.SIDE}
                    />
                    <span>Side Projects</span>
                </div>
            </div>
            {
                projectType === ProjectType.TECHNICAL ? (
                    <TechnicalProjectsList />
                ) : (
                    <SideProjectsList />
                )
            }
        </section>
    )
}