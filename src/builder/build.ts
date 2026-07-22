import { compilePage } from "../compiler/compiler.js";
import { scanContentFolder } from "../filesystem/scan.js";
import { parseMarkdown } from "../parser/parse.js";
import { renderPage } from "../renderer/renderer.js";
import { routePage } from "../router/router.js";
import { writePage } from "../writer/writer.js";

export async function buildSite(): Promise<void> {
    console.log("🚀 Starting Forge...\n");

    // 1. Discover files
    const files = scanContentFolder();

    if (files.length === 0) {
        console.log("⚠️ No markdown files found.");
        return;
    }

    console.log(`📄 Found ${files.length} markdown file(s).\n`);

    const pages = files.map(parseMarkdown);

    const compiled = pages.map(compilePage);

    const rendered = compiled.map(renderPage);

    const routed = compiled.map((page, index) =>
        routePage(page, rendered[index]!)
    );

    routed.forEach(writePage);

    console.log("\n✅ Build Complete.");
}