import { scanContentFolder } from "../filesystem/scan.js";
import { parseMarkdown } from "../parser/parse.js";

export async function buildSite(): Promise<void> {
    console.log("==================================");
    console.log("🚀 Forge Static Site Generator");
    console.log("==================================\n");

    console.log("📂 Scanning content folder...\n");

    const files = scanContentFolder();

    if (files.length === 0) {
        console.log("⚠️  No markdown files found.");
        return;
    }

    console.log(`✅ Found ${files.length} markdown file(s):\n`);

    files.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
    });

    console.log("\n🎉 Build pipeline initialized.");

    const pages = files.map(parseMarkdown);
    
    console.log(JSON.stringify(pages, null, 2));
}