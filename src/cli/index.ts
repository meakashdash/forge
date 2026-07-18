import { buildSite } from "../builder/build.js";

async function main() {
    try {
        await buildSite();
    } catch (error) {
        console.error("❌ Build failed.");

        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }

        process.exit(1);
    }
}

main();