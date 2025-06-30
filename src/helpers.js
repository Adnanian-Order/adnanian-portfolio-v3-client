export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const UPPERCASE_MIN = 65;
export const UPPERCASE_MAX = 90;
export const LOWERCASE_MIN = 97;
export const LOWERCASE_MAX = 122;

/**
 * Converts the date in the form of Month DD, YYYY.
 * 
 * @param {Date} date the date 
 * @returns the date in the format of Month DD, YYYY.
 */
export const getDateOnly = (date) => {
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

/**
 * There are two types of projects that I work on, technical projects (applications),
 * and side projects (other interesting stuff).
 */
export const ProjectType = Object.freeze({
    TECHNICAL: "technical",
    SIDE: "side"
});

// const API_URL = process.env.NODE_ENV === "development" ? "http://127.0.0.1:5000" : process.env.REACT_APP_DEPLOYED_SERVER_URL;

/**
 * TODO
 * 
 * @param {*} route 
 * @returns 
 */
export function correctRoute(route) {
    return null;
}

export function getImage(imageURL, category) {
    return correctRoute(`get-image/${imageURL}/${category}`);
}

export function isEnglishLetter(char) {
    if (char.length !== 1) {
        throw new Error("Char argument must be a single character.");
    }
    const code = char.charCodeAt(0);
    return (code >= UPPERCASE_MIN && code <= UPPERCASE_MAX) || (code >= LOWERCASE_MIN && code <= LOWERCASE_MAX);
}

/**
 * TODO
 * 
 * FROM CHATGPT XD
 * 
 * @param {*} dateString 
 * @returns 
 */
export function formatDate(dateString) {
    const dateArgs = dateString.split("-");
    const monthArg = months[dateArgs[1] - 1];
    const dayArg = Number.parseInt(dateArgs[2]);
    const yearArg = dateArgs[0];
    return `${monthArg} ${dayArg}, ${yearArg}`;
}