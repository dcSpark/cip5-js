import Cip5 from "./cip5.json";
import fs from "fs";

/// note: this function can't be inverted due to the hash

type JsonEntry = {
  prefix: string;
  meaning: string;
  content: string;
};
type JsonType = Record<string, JsonEntry[]>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const json: JsonType = Cip5;

function generateEntries(entries: JsonEntry[]): string {
  return entries
    .map(
      (entry) => `
      /**
       * @meaning ${entry.meaning}
       * @content ${entry.content}
       */
      ${entry.prefix}: '${entry.prefix}'`
    )
    .join(",");
}
function generateContent(): string {
  return Object.keys(json)
    .map(
      (key) => `\t${key}: {
    ${generateEntries(json[key])}
  } as const`
    )
    .join("\n,");
}

const result = `export default {
${generateContent()}
};`;

fs.writeFileSync("./index.ts", result);
