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

/**
 * Checks if a given character is an English letter.
 * 
 * @param {String} char the character to evaluate.
 * @returns true if the character is an English letter, false otherwise.
 */
export function isEnglishLetter(char) {
    if (char.length !== 1) {
        throw new Error("Char argument must be a single character.");
    }
    const code = char.charCodeAt(0);
    return (code >= UPPERCASE_MIN && code <= UPPERCASE_MAX) || (code >= LOWERCASE_MIN && code <= LOWERCASE_MAX);
}

/**
 * Formats a date string so that it displays the name of the month,
 * followed by the day and year.
 * 
 * FROM CHATGPT XD
 * 
 * @param {*} dateString 
 * @returns MONTH_NAME DAY, YEAR
 */
export function formatDate(dateString) {
    const dateArgs = dateString.split("-");
    const monthArg = months[dateArgs[1] - 1];
    const dayArg = Number.parseInt(dateArgs[2]);
    const yearArg = dateArgs[0];
    return `${monthArg} ${dayArg}, ${yearArg}`;
}