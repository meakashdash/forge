import fs from "node:fs";
import path from "node:path";

import type { CompiledPage } from "../compiler/types.js";

import { renderTemplate } from "./template.js";

export function renderPage(
    page: CompiledPage
): string {

    //------------------------------------------------
    // Load page layout
    //------------------------------------------------

    const pageLayout = page.layout || "page";

    const pageLayoutPath = path.join(
        "layouts",
        `${pageLayout}.html`
    );

    if (!fs.existsSync(pageLayoutPath)) {

        throw new Error(
            `Layout "${pageLayout}" not found.`
        );

    }

    const pageTemplate =
        fs.readFileSync(pageLayoutPath, "utf8");

    //------------------------------------------------
    // Render page layout
    //------------------------------------------------

    const body = renderTemplate(
        pageTemplate,
        {
            ...page,
            content: page.html
        }
    );
    console.log(body)
    //------------------------------------------------
    // Load base layout
    //------------------------------------------------

    const baseTemplate =
        fs.readFileSync(
            path.join("layouts", "base.html"),
            "utf8"
        );
    console.log(baseTemplate)
    //------------------------------------------------
    // Render base layout
    //------------------------------------------------

    return renderTemplate(
        baseTemplate,
        {
            ...page,
            body
        }
    );

}