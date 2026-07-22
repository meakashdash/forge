import fs from "node:fs";
import path from "node:path";

import type { RenderedPage } from "../renderer/types.js";

export function writePage(page: RenderedPage): void {

    const output = path.join("dist", page.outputPath);

    fs.mkdirSync(path.dirname(output), { recursive: true });

    fs.writeFileSync(output, page.html);

    console.log(`✔ ${output}`);
}