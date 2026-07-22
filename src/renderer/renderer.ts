import fs from "node:fs";
import path from "node:path";

import type { CompiledPage } from "../compiler/types.js";
import type { RenderedPage } from "./types.js";

export function renderPage(page: CompiledPage): string  {

    const layout = fs.readFileSync("layouts/base.html", "utf8");

    return layout
        .replace("{{title}}", page.title)
        .replace("{{content}}", page.html);
}