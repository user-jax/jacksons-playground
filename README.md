# React TypeScript App with Material Tailwind

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the TypeScript template and enhanced with Material Tailwind for beautiful, modern UI components.

## Features

- ⚛️ **React 19** with TypeScript
- 🎨 **Material Tailwind** for beautiful UI components
- 📱 **Responsive Design** that works on all devices
- 🚀 **Modern Development** with hot reloading
- 🎯 **Type Safety** with TypeScript

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

```
src/
├── App.tsx          # Main application component
├── index.tsx        # Application entry point
├── index.css        # Global styles with Tailwind directives
└── ...
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Adds static typing to JavaScript
- **Material Tailwind**: Beautiful UI components built on top of Tailwind CSS
- **Tailwind CSS**: A utility-first CSS framework

## Customization

### Adding New Components

You can create new components in the `src/components/` directory and import them into your App.tsx file.

### Styling

The app uses Tailwind CSS for styling. You can:
- Modify the `tailwind.config.js` file to customize the design system
- Add custom CSS in `src/index.css`
- Use Material Tailwind components for consistent design

### Material Tailwind Components

The app is set up to use Material Tailwind components. You can import and use them like this:

```tsx
import { Button, Card, Typography } from "@material-tailwind/react";

function MyComponent() {
  return (
    <Card>
      <Typography variant="h5">Hello World</Typography>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Learn More

To learn more about the technologies used in this project:

- [React documentation](https://reactjs.org/)
- [TypeScript documentation](https://www.typescriptlang.org/)
- [Material Tailwind documentation](https://material-tailwind.com/)
- [Tailwind CSS documentation](https://tailwindcss.com/)

## Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
