import fs from "node:fs";

import type { Page } from "../parser/types.js";

export function renderPage(page: Page): string {

    const layout = fs.readFileSync("layouts/base.html", "utf8");

    return layout
        .replace("{{title}}", page.title)
        .replace("{{content}}", page.html);
}