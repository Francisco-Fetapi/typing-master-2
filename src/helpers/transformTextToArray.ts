const delimiters = /[\s\.,?!:;]/gi;

export const transformTextToArray = (text: string) => {
  let textArray = text.split(delimiters);
  textArray = textArray.filter((word) => word !== "");
  return textArray;
};
