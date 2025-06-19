# Auro Demo

A simple demo application showcasing the Auro Design System themes and components.

## Features

- **Theme Switcher**: Easily switch between different Auro Design System themes
- **Theme Documentation**: Learn how to use the theming system in your own projects
- **Visual Theme Demo**: See how different UI elements look with each theme

## Available Themes

The application supports the following themes:

- **Alaska** (`aag-theme-as`)
- **Alaska Classic** (`aag-theme-asc`)
- **Auro 1** (`aag-theme-a1`) 
- **Auro 2** (`aag-theme-a2`)
- **Hawaiian** (`aag-theme-ha`)

## How to Use

### Running the App

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Implementing Themes in Your Project

To use the Auro Design System themes in your own project:

1. Install the required package:
   ```bash
   npm install @aurodesignsystem/design-tokens
   ```

2. Import the CSS file:
   ```css
   @import '@aurodesignsystem/design-tokens/dist/themes/CSSCustomProperties--bundled.css';
   ```

3. Apply a theme attribute to your HTML:
   ```html
   <body data-aag-theme="aag-theme-as">
     <!-- your content -->
   </body>
   ```

4. Use the CSS variables in your styles:
   ```css
   .my-element {
     background-color: var(--ds-basic-color-brand-primary);
     color: var(--ds-basic-color-texticon-inverse);
   }
   ```

## Building for Production

```bash
npm run build
```

## Resources

- [Auro Design System](https://auro.alaskaair.com/)
- [Auro Design Tokens](https://www.npmjs.com/package/@aurodesignsystem/design-tokens)
