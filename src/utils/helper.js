export const limitWords = (text, wordLimit) => {
    if (!text) return ""; // Handle empty or undefined text
    const words = text.split(" ");
    return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
};