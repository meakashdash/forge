import path from "node:path";

import type { CompiledPage } from "../compiler/types.js";
import type { RoutedPage } from "./types.js";

export function routePage(
    page: CompiledPage,
    html: string
): RoutedPage {

    const relativePath = path.relative(
        "content",
        page.filePath
    );

    const withoutExtension = relativePath.replace(/\.md$/, "");

    return {
        html,

        outputPath: path.join(
            withoutExtension,
            "index.html"
        )
    };
}