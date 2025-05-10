/**
 * Creates a navigational link for the header.
 * 
 * @param {Object} props
 * @param {String} props.url the value for the href attribute.
 * @param {String} props.displayText the displayText.
 * @param {Function} props.onSmartToggle the callback function to execute to automatically hide the hamburger menu.
 * @returns a link will pre-filled attributes.
 */
export default function NavLink({ url, displayText, onSmartToggle }) {
    return (
        <a
            className="nav-link"
            href={url}
            onClick={onSmartToggle}
        >
            {displayText}
        </a>
    );
}