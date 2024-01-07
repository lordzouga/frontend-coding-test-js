/** @param {String} name */
export const useCleanName = (name) => {
    const capitalized = name.split("-").map((s) => `${s[0].toLocaleUpperCase()}${s.slice(1)}`);
    return capitalized.join(" ");
}