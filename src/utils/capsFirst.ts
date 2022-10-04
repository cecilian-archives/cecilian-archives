export const capsFirst = (str: string) => {
  if (typeof str !== "string") return "";
  return str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
};
