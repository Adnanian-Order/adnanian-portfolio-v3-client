import "../styles/TopSection.css";

/**
 * Renders the top level content of the page (after the header).
 * Note: The name "Home" is a misnomer, as this application is one
 * page instead of multiple.
 * 
 * @returns the top section.
 */
export default function TopSection() {
    return (
        <section id="home">
            <h1>Hi, I'm Adnan Wazwaz</h1>
            <h3>I'm a Full Stack Software Engineer, Card Game Creator, and Fuṣḥā Arabic Enthusiast</h3>
            <br />
            <p>Welcome to the Adnanian Order. Here, you will find all my greatest ideas.
                Scroll down or click on the navigational links above to learn more.
            </p>
            <span className="down-arrow">&#8681;</span>
        </section>
    );
}