
/**
 * Creates a small card of a technical skill.
 * 
 * @param {Object} props
 * @param {Skill} props.skill the technical skill. 
 * @returns a skill's icon and name.
 */
export default function TechSkillCard({ skill }) {
    return (
        <div className="skill-card inner-frame">
            <img
                src={`${import.meta.env.VITE_API_BASE_URL}/image/${skill.icon_filepath}`}
                alt={`Adnan is good with ${skill.name}.`}
            />
            <h3>{skill.name}</h3>
        </div>
    )
}