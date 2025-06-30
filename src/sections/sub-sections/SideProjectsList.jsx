import Slideshow from "../../components/Slideshow";

/**
 * This sub-section is where all the side projects go.
 * At this time, 07/31/2024, there is only one publicly active side project: Mada.
 * 
 * @returns the side projects sub-section.
 */
export default function SideProjectsList() {
    const images = [
        'draft-2-card-list.png',
        'draft-2-layout.jpg',
        'draft-3-card-backs.png',
        'draft-3-layout.jpg',
        'draft-3-number-cards.jpg',
        'draft-3-operand-cards.jpg'
    ];

    const imageSlides = images.map((image) => {
        return (
            <img
                key={image.substring(0, image.indexOf('.'))}
                src={`./images/mada/${image}`}
                alt="Mada card design."
                className="inner-frame"
            />
        );
    });

    return (
        <div id="side-projects" className="sub-section">
            <h2 className="fancy-font">My Side Projects</h2>
            <article>
                <p>At this time, the only public active side-project is Mada, so for
                    now, I will dedicate this entire section to Mada.</p>
                <p>Mada is a Halal, math-based strategy card game for 2-8 players.
                    The premise of the game is that each player has a personal
                    number, called a position, which must stay within a universal
                    range. You win by eliminating other players' positions from the
                    range, until you're the last active player. If you would like to
                    learn how to play, you can contact me using the form in the next
                    section for an inquiry.
                </p>
            </article>
            <Slideshow id="mada-slides" title="Mada Gallery">
                {imageSlides}
            </Slideshow>
        </div>
    )
}