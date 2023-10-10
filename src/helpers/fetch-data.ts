import { PUBLIC_SHEET_URL } from "./constants";
import { parseCSV } from "./parse-csv";

export async function fetchDataFromPublicSheet(): Promise<
  { [key: string]: string }[] | undefined
> {
  try {
    const response: Response = await fetch(PUBLIC_SHEET_URL);
    const csvText: string = await response.text();
    console.log(csvText);
    const rows: string[][] = parseCSV(csvText);

    // Extract headers
    const headers: string[] = rows[0];

    // Convert rows to objects
    const objects: { [key: string]: string }[] = rows.slice(1).map((row) => {
      const obj: { [key: string]: string } = {};
      row.forEach((cell, index) => {
        obj[headers[index]] = cell;
      });
      return obj;
    });

    return objects;
  } catch (error) {
    console.error("Error fetching and parsing data:", error);
  }
}
