import "../styles/ContactForm.css";
import { useForm } from "@formspree/react";

/**
 * Creates a Netlify compatible form to contact Adnan for any inquires.
 * All submissions will be sent to Adnan's email.
 * 
 * References:
 * https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library
 * https://help.formspree.io/hc/en-us/articles/360053819114-The-Formspree-CLI
 * 
 * @returns a contact form.
 */
export default function ContactForm() {
    const [state, handleSubmit, reset] = useForm('contactForm');

    if (state.submitting) {
        return (
            <h1 className="form-submitting inner-frame">Submitting...</h1>
        );
    }

    if (state.succeeded) {
        return (
            <section id='contact'>
                <div className="form-submitting inner-frame">
                    {/* <p>Thanks!</p>;<button onClick={reset}>Reset</button> */}
                    <h2>Thank you for your submission!</h2>
                    <p> Thank you for contacting me. I will be in touch with you
                        very soon.
                    </p>
                    <button className="outer-frame" onClick={reset}>
                        Reset Form
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact">
            <h1>Get in Touch with Me</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name..."
                    autoComplete="off"
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    autoComplete="off"
                />
                <br />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                    rows="10"
                ></textarea>
                <input type="submit" disabled={state.submitting} />
            </form>
        </section>
    );
}