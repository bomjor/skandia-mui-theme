# Skandia MUI Theme

Skandia MUI Theme is a custom Material-UI theme for internal applications.

## Installation

To install the theme, run:

```bash
npm install @mui/material
```

# Usage

To use the theme in your project, import it and wrap your application with the ThemeProvider:

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
// Define your custom theme here
});

ReactDOM.render(
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>,
document.getElementById('root')
);

# Author

Rådger More

# License

This project is licensed under the ISC License.
