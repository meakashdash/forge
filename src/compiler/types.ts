import type { Page } from "../parser/types.js";

export interface CompiledPage extends Page {
    html: string;
}