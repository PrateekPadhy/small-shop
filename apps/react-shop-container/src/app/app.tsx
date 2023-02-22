import { ThemeProvider } from '@emotion/react';
import { appTheme } from '@palaks-shop/react-shop-common';

import Landing from './pages/landing/landing';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <Landing></Landing>
  </ThemeProvider>
);

export default App;
