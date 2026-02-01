# Ahmed Sayed - Bilingual Portfolio

A professional, high-performance portfolio website built with HTML, CSS, and Vanilla JavaScript.

## Features
- **Bilingual**: Full support for English (LTR) and Arabic (RTL).
- **Client-Side Admin Panel**: Update your portfolio images directly in the browser (saved to your local device).
- **Responsive**: Mobile-first design.
- **Fast**: Static site with no backend dependencies.

## Setup Instructions

### 1. Run Locally
Simply open the `index.html` file in your web browser.
- No server required.
- **Tip**: For the best experience (and to avoid local CORS issues with some browsers), you can use a simple local server extension (like "Live Server" in VS Code) or run:
  ```bash
  npx serve .
  ```

### 2. Admin Panel (Image Management)
1. Scroll to the footer and click the small "Admin" link, or visit `index.html#admin`.
2. Ensure you are allowing "LocalStorage" in your browser settings (default is yes).
3. Upload images for the Hero, About, and Projects sections.
4. **Note**: These images are saved in your **browser's cache**. If you clear your cache or visit from a different device, you will see the default images. For a permanent update, replace the files in the `assets/` folder.

### 3. Deploy to Vercel
1. Upload this folder to a GitHub repository.
2. Log in to Vercel and "Add New Project".
3. Select the repository.
4. Vercel will automatically detect it as a static site.
5. Click **Deploy**.

## Customization
- **Text**: Edit `index.html` for default English text, and `js/main.js` (inside `const translations`) for Arabic text.
- **Colors**: Change CSS variables in `css/styles.css` (`--primary`, `--accent`).

## Files
- `index.html`: Main structure.
- `css/styles.css`: Styling and RTL logic.
- `js/main.js`: Language toggle and image logic.
- `assets/`: Image resources.
