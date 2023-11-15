import fs from "fs";
import path from "path";
import { format } from "prettier";
import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);

const themeStr = JSON.stringify(theme);
const js = `
const theme  = ${themeStr}

export default theme
`;

async function generate() {
  try {
    // write the file to src/theme.js after
    // having prettier format the string for us
    fs.writeFileSync(
      path.resolve(process.cwd(), "./src/theme.ts"),
      await format(js, { parser: "babel" }),
      "utf-8"
    );
  } catch (err) {
    // uh-oh, something happened here!
    console.error(err);
  }
}

generate();
