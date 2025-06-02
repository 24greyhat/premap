import * as React from 'react';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { MoonIcon, SunIcon } from 'lucide-react';



export function ToggleTheme() {

  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }


  return (
    <IconButton
    id="basic-button"
    onClick={()=>setMode(mode==="dark" ? "light" : "dark")}
    variant='text'
  >
    { 
      mode==="light"
        ?

      <MoonIcon />

      :

      <SunIcon />

    }
  </IconButton>
  );
}


const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});


export default function AppThemeProvider({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

