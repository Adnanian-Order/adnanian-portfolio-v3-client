import { useEffect, useState } from "react";
import TechSkillCard from "../components/TechSkillCard";
import "../styles/SkillsSection.css";

/**
 * Creates a section of the page showing all of Adnan's skills.
 * 
 * @returns the skills section.
 */
export default function SkillsSection() {
    const [skillTypes, setSkillTypes] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/skill_types`)
            .then((response) => response.json())
            .then((data) => {
                setSkillTypes(data);
            });
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/skills`)
            .then((response) => response.json())
            .then((data) => {
                setSkills(data);
            });
    }, []);

    // const skillCards = skillSet.map((skill) => {
    //     return (
    //         <TechSkillCard key={`t-${skill.name}`} skill={skill} />
    //     )
    // });

    // const skillCards = skills.map((skill) => {
    //     return (
    //         <TechSkillCard key={skill.id} skill={skill}/>
    //     );
    // });

    function orderSkillTypesById(a, b) {
        if (a.id < b.id) return -1;
        else if (a.id > b.id) return 1;
        else return 0;
    }

    const skillCardGroupings = skillTypes.sort(orderSkillTypesById).map((skillType) => {
        // return skills.filter((skill) => skillType.id === skill.skill_type_id);
        const category = <h2>{skillType.name}</h2>;
        const skillGroup = skills.filter((skill) => skillType.id === skill.skill_type_id);
        const skillCards = skillGroup.map((skill) => {
            return (
                <TechSkillCard key={skill.id} skill={skill} />
            );
        });
        return (
            <>
                {category}
                <div className="skill-grid">

                    {skillType.name === "Fields" ? "To Be Added..." : skillCards}
                </div>
            </>
        );
    })

    return (
        <section id="skills">
            <h1>What am I Good At?</h1>
            <p className="inner-frame">
                Icons taken from&nbsp;
                <a
                    href="https://techicons.dev/?search=j"
                    className="external"
                    target="_blank"
                    rel="noreferrer"
                >
                    TechIcons
                </a>
                , which in turn have been sourced from&nbsp;
                <a
                    href="https://github.com/devicons/devicon"
                    className="external"
                    target="_blank"
                    rel="noreferrer"
                >
                    DevIcons
                </a>.
            </p>
            {skillCardGroupings}
        </section>
    );
}