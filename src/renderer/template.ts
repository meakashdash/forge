export function renderTemplate(
    template: string,
    variables: Record<string, unknown>
): string {

    return template.replace(
        /{{\s*(.*?)\s*}}/g,
        (_, key) => {

            const value = variables[key];

            return value == null
                ? ""
                : String(value);

        }
    );

}