import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import fs from 'fs';
import path from 'path';

/**
 * Custom plugin to copy theme CSS files from node_modules to the static directory.
 * This replaces the functionality in scripts/copy-theme-files.js
 */
function copyThemeFiles() {
  return {
    name: 'copy-theme-files',
    buildStart() {
      // Define the source and destination paths
      const sourceDir = path.resolve('./node_modules/@aurodesignsystem/webcorestylesheets/dist/bundled/themes');
      const destDir = path.resolve('./static');
      
      // Define the files to copy
      const themesToCopy = [
        { source: 'alaska.global.min.css', dest: 'alaska.global.min.css' },
        { source: 'alaska-classic.global.min.css', dest: 'alaska-classic.global.min.css' },
        { source: 'auro-1.global.min.css', dest: 'auro-1.global.min.css' },
        { source: 'auro-2.global.min.css', dest: 'auro-2.global.min.css' },
        { source: 'hawaiian.global.min.css', dest: 'hawaiian.global.min.css' }
      ];
      
      // Make sure the destination directory exists
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Copy each theme file
      themesToCopy.forEach(theme => {
        const sourcePath = path.join(sourceDir, theme.source);
        const destPath = path.join(destDir, theme.dest);
        
        try {
          // Check if source file exists
          if (fs.existsSync(sourcePath)) {
            // Read the source file
            const fileContent = fs.readFileSync(sourcePath);
            
            // Write the file to the destination
            fs.writeFileSync(destPath, fileContent);
            
            console.log(`Successfully copied: ${theme.source} -> ${theme.dest}`);
          } else {
            console.error(`Source file not found: ${sourcePath}`);
          }
        } catch (error) {
          console.error(`Error copying ${theme.source}:`, error);
        }
      });
      
      console.log('Theme files copy completed.');
    }
  };
}

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devtoolsJson(), copyThemeFiles()],
});
