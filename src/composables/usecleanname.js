/** @param {String} name */
export const useCleanName = (name) => {
    const capitalized = name.split("-").map((s) => {
        if (s) return `${s[0].toLocaleUpperCase()}${s.slice(1)}`
        else return ''});
    return capitalized.join(" ");
}