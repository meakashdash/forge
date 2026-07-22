import MarkdownIt from "markdown-it";

import type { Page } from "../parser/types.js";
import type { CompiledPage } from "./types.js";

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

export function compilePage(page: Page): CompiledPage {

    return {
        ...page,

        html: md.render(page.content)
    };
}