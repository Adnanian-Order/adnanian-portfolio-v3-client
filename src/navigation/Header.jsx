import { useState, useEffect } from "react";
import NavLink from "../components/NavLink";
import '../styles/Header.css';

/**
 * Creates a header. The header consists of Adnan's personal logo and a set of
 * navigational links to each section of the page.
 * 
 * On smaller screens, a hamburger button will hide the links and will be shown
 * by clicking on the hamburger button.
 * 
 * Building a Hamburger menu: https://www.youtube.com/watch?v=aNDqzlAKmZc
 */
export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    /**
    * Scrolls the window to the top of the page. Then, sets the current
    * URL to # so that it shows that this is the top of the page.
    */
    const scrollToTop = () => {
        window.scrollTo(0, 0);
        document.location.href = "#";
    };

    /**
     * Displays/hide the hamburger menu.
     */
    const toggle = () => {
        setShowMobileMenu((isOpen) => !isOpen);
    }

    /**
     * Forcibly hides the hamburger menu.
     */
    const smartToggleOff = () => {
        if (showMobileMenu) {
            setShowMobileMenu(() => false);
        }
    }

    useEffect(() => {

        /**
         * Sets a new top margin value for the main content, based on the height of the header.
         */
        const handleResize = () => {
            smartToggleOff();
        }


        window.addEventListener('resize', handleResize);
    });

    const navigationalLinks = ['about', 'skills', 'projects', 'contact'].map((linkName) => {
        const titleCaseText = linkName.replace(linkName.charAt(0), linkName.charAt(0).toUpperCase());

        return (
            <NavLink
                key={linkName}
                url={`#${linkName}`}
                displayText={titleCaseText}
                onSmartToggle={smartToggleOff}
            />
        );
    });

    return (
        <header>
            <button
                id="site-logo"
                className={!showMobileMenu ? "heading-font" : "no-show"}
                // href="#home"
                title="Click here to navigate back to the top."
                onClick={scrollToTop}
            >
                <img
                    src='./adnanian-flag.png'
                    alt="The flag of Adnan - Consists of a black square with four rings, each in red, black, white, and green."
                />
                <span className={!showMobileMenu ? "heading-font" : "no-show"}>Adnan Wazwaz</span>
            </button>
            <nav className="inline-menu">
                {navigationalLinks}
            </nav>
            <nav className={`hamburger-menu-${showMobileMenu}`}>
                {navigationalLinks}
            </nav>
            <button className="hamburger-button" onClick={toggle}>
                &equiv;
            </button>
        </header>
    )
}