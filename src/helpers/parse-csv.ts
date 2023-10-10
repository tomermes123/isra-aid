export function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell: string = "";
  let insideQuotes: boolean = false;

  for (let i = 0; i < text.length; i++) {
    const char: string = text[i];
    const nextChar: string = text[i + 1];

    // Toggle insideQuotes flag if the current character is a double quote
    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    // Check for cells enclosed in double quotes
    if (insideQuotes) {
      cell += char;
    } else {
      switch (char) {
        case ",":
          row.push(cell.trim());
          cell = "";
          break;
        case "\n":
          if (nextChar === "\r") {
            i++; // Handle CRLF newlines
          }
          row.push(cell.trim());
          rows.push(row);
          cell = "";
          row = [];
          break;
        default:
          cell += char;
      }
    }
  }

  // Add any remaining data
  if (cell.trim()) row.push(cell.trim());
  if (row.length) rows.push(row);

  return rows;
}
