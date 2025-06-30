import { formatDate, getImage } from "../helpers";

/**
 * Creates a slide for the slideshow based on the information
 * of a given TechProject.
 * 
 * @param {Object} props
 * @param {techProject} props.techProject the TechProject instance. 
 * @returns the technical project's information rendered as a slide (or a card if on small devices).
 */
export default function TechProjectSlide({ techProject }) {

    const details = techProject.key_points.map((detail, index) => {
        return <li key={index}><p>{detail}</p></li>
    });

    const descriptionParagraphs = techProject.description.split("\n").map((p, index) => {
        return <p key={index} className="text-box">{p}</p>
    });

    console.log("Demo Link", !techProject.demo_link);
    console.log("Type of DEMO Link!", typeof techProject.demo_link);

    return (
        <div className="project-slide">
            <div className="slide-core">
                <img
                    src={getImage(techProject.screenshot_url, "project")}
                    alt="The technical project on the computer."
                    className="inner-frame"
                />
                <div className="project-info inner-frame">
                    <h3>{techProject.title}</h3>
                    <span><strong>{techProject.headline}</strong></span>
                    <table className="pinfo-table">
                        <tbody>
                            <tr>
                                <td>Original Date</td>
                                <td>{formatDate(techProject.first_version_date)}</td>
                            </tr>
                            <tr>
                                <td>Last Updated</td>
                                <td>{formatDate(techProject.current_version_date)}</td>
                            </tr>
                            <tr>
                                <td>Adnanian App No.</td>
                                <td>{techProject.work_no}</td>
                            </tr>
                        </tbody>
                    </table>
                    {descriptionParagraphs}
                    <ul>
                        {details}
                    </ul>
                </div>
            </div>
            <nav className="slide-nav inner-frame">
                {
                    !techProject.github_link ? null : (
                        <a
                            className="external"
                            href={techProject.github_link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )
                }
                {
                    !techProject.demo_link ? null : (
                        <a
                            className="external"
                            href={techProject.demo_link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    )
                }
                {
                    !techProject.live_link ? null : (
                        <a
                            className="external"
                            href={techProject.live_link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live App
                        </a>
                    )
                }
            </nav>
        </div>
    )
}