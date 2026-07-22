import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { Page } from "./types.js";
// import { compileMarkdown } from "../compiler/markdown.js";

export function parseMarkdown(filePath: string): Page {
    const raw = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(raw);
    // const html = compileMarkdown(content);

    const slug = path.basename(filePath, ".md");

    return {
        title: (data.title as string) ?? "",
        layout: (data.layout as string) ?? "default",
        date: (data.date as string) ?? "",
        tags: (data.tags as string[]) ?? [],

        metadata: data,

        content,

        filePath,
        slug,
    };
}