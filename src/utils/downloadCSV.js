import { unparse } from "papaparse";

export const downloadCSV = (data, filename) => {
  const csvStr = unparse(data);
  const csvBlob = new Blob([csvStr], { type: "text/csv;charset=utf-8;" });
  const csvURL = window.URL.createObjectURL(csvBlob);
  const tempLink = document.createElement("a");
  tempLink.href = csvURL;
  tempLink.setAttribute("download", filename);
  tempLink.click();
};
