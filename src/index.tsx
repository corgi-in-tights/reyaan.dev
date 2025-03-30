import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import ThemeProvider from '@/components/ThemeProvider';

let container = document.getElementById("app")!;
let root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);