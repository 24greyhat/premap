import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createRoot} from 'react-dom/client'
import './style.css'
import {
  RouterProvider,
} from "react-router";
import router from './Router';
import AppThemeProvider from './components/ThemeProvider';
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';



const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <React.StrictMode>

     <StyledEngineProvider enableCssLayer>

      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />

        <AppThemeProvider>

          <RouterProvider router={router} />

        </AppThemeProvider>

    </StyledEngineProvider>

    </React.StrictMode>
)
