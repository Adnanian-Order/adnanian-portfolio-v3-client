import "../styles/AboutSection.css";

/**
 * Creates an About section. It consists of a picture of Adnan and a brief
 * biography of him.
 * 
 * @returns the About section.
 */
export default function AboutSection() {

    return (
        <section id="about">
            <h1>Who am I?</h1>
            <h2>Watch the 2-Minute Video Here:</h2>
            <span className="down-arrow">&#8681;</span>
            <div>
                <iframe
                    width="50%"
                    height="315"
                    src="https://www.youtube.com/embed/dt7ONbekERM?si=cMfYh7rp9-DqtPF2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <h2>Or You Can Read Below Instead:</h2>
            <span className="down-arrow">&#8681;</span>
            <div id="main-about-contents">
                <figure className="inner-frame">
                    <img
                        src="./images/adnan_profile_pic.jpg"
                        alt="A short-haired black-bearded man with blue glasses, sitting in front of a table and smiling."
                    />
                    <figcaption>
                        That's a picture of me just in case you haven't figured that out yet. XD
                    </figcaption>
                </figure>
                <article>
                    <p>I'm just a simple guy who is aspiring to achieve great things
                        in life. Born and raised in the Greater Twin Cities of Minnesota,
                        I always wondered the above question myself. Eventually, I found
                        my way in the world of programming.
                    </p>
                    <p>I graduated from Metropolitan State University with a Bachelor's
                        degree in computer science, as well as a software engineering
                        certificate from the coding bootcamp, Flatiron School. I have
                        an intrinsic love for coding for two reasons:<br />
                    </p>
                    <ol>
                        <li>It allows me to express my creativity, innovation,&nbsp;
                            and ability to solve logical problems.</li>
                        <li>In a world where we experience many things that we
                            cannot control, coding gives me a sense of autonomy,
                            and allows me to decide what a product can look like
                            and what it does.
                        </li>
                    </ol>
                    <p>
                        I mainly build full stack websites and mobile applications using
                        JavaScript, React, Python, Flask, and SQL, with strong foundations
                        in programming fundamentals, such as object oriented programming,
                        MVC, and REST. I'm known for emphasizing three things:
                    </p>
                    <dl>
                        <dt>1. Efficiency</dt>
                        <dd>I write my code so that each component is as reusable
                            as possible for not only within the scope of the project
                            at hand, but also other future projects.
                        </dd>
                        <dt>2. Detail</dt>
                        <dd>As someone who has experience with writing technical
                            documents and comments for my code, I go out of my way
                            to document all needed information so that I can be
                            understood by others.
                        </dd>
                        <dt>3. Quality Assurance</dt>
                        <dd>While I may not always be the fastest person to complete
                            a given task, I am known for completing it <strong>RIGHT</strong>.
                            I understand the importance of review and evaluation, so
                            I am never reluctant to double check work to ensure
                            that every thing is in order.
                        </dd>
                    </dl>
                    <p>
                        I also enjoy helping people whenever they're in need. So
                        you can count on me to be the best team player I can be
                        when working with others. We're all imperfect. We're all
                        human. Otherwise, nobody would need each other.
                    </p>
                    <p>When I'm not programming, you can find me working on a side
                        project such as my card game, Mada. &#40;See the side
                        projects section for more information.&#41; Currently
                        perfecting my Arabic and Russian. Plans to study Spanish
                        in the future.
                    </p>
                </article>
            </div>
        </section>
    );
}