# Демо расширения по скачиванию видеор

Бойлерплейт: https://github.com/RoshanPShetty/ChromeTS-Launchpad
Функция скачивания m3u видео: https://github.com/SuperZombi/m3u8-downloader-js

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iaverin/wb-video-downloader.git
   ```

2. Navigate to the project directory:
   ```bash
   cd wb-video-downloader
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development build with hot reloading:
```bash
npm run watch
```

### Production Build

To create a production build:
```bash
npm run build
```

This will generate optimized files in the `dist` folder.

### Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `dist` folder in your project directory


### ESLint Configuration

The project is configured with ESLint to enforce consistent code quality and catch potential errors early. The following key linting rules are in place:

- **Enforce strict equality** (`eqeqeq`): Requires the use of `===` and `!==` instead of `==` and `!=` to avoid type coercion issues.
- **Use semicolons** (`semi`): Enforces the use of semicolons at the end of statements.
- **Warn on unused variables** (`@typescript-eslint/no-unused-vars`): Flags variables that are declared but not used anywhere in the code.
- **Prefer `const`** (`prefer-const`): Suggests using `const` for variables that are never reassigned after being initialized.

To lint your code, run:

```bash
npm run lint
```

To automatically fix certain linting issues, run:

```bash
npm run lint:fix
```

Ensure that your code passes the linting checks before committing to maintain code consistency and quality across the project.



## Customization

- Modify the TypeScript files in the `src` folder to add your extension's functionality
- Update the HTML files in the `popup` and `options` folders
- Utilize Tailwind CSS classes to style your HTML elements
- Adjust the `tailwind.config.js` file to customize your Tailwind setup
- Modify the `manifest.json` file to change extension metadata, permissions, and other settings

## Future Implementations

- MV3 Boilerplate w/ React/Vue/Solid/Svelte/Preact Templates

## Contributing

Contributions are welcome and greatly appreciated! If you're looking to contribute, here are some good first issues to get you started:

### Good First Issues

1. **Add Jest for unit testing TypeScript code**
   - Set up Jest testing framework to enable unit testing for TypeScript code in the project.
   - [View Issue](https://github.com/RoshanPShetty/ChromeTS-Launchpad/issues/[ISSUE_NUMBER])

To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For more detailed information on contributing, please see our [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
