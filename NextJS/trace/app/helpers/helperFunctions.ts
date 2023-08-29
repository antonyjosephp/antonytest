export const removeWhiteSpaces = (str: string): string => {
    return str.replace(/\s/g, '').toLocaleLowerCase();
};
