import fs from 'fs';
import path from 'path';

/**
 * Recursively scans a directory and returns all .md file paths
 * @param dirPath - The directory path to scan
 * @returns Array of absolute file paths to all .md files found
 */
export function scanMdFiles(dirPath: string): string[] {
  const mdFiles: string[] = [];

  function traverseDirectory(currentPath: string): void {
    try {
      const files = fs.readdirSync(currentPath);

      for (const file of files) {
        const fullPath = path.join(currentPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          // Recursively scan subdirectories
          traverseDirectory(fullPath);
        } else if (stat.isFile() && path.extname(file) === '.md') {
          // Add markdown files to the array
          mdFiles.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${currentPath}:`, error);
    }
  }

  traverseDirectory(dirPath);
  return mdFiles;
}

/**
 * Scans the content folder for all markdown files
 * @returns Array of absolute file paths to all .md files in content folder
 */
export function scanContentFolder(): string[] {
  const contentPath = path.join(process.cwd(), 'content');
  return scanMdFiles(contentPath);
}
