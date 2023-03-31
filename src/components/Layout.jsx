import React from 'react'
import Header from './Header';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import {Outlet} from "react-router-dom"
const theme = createTheme({
    palette:{
        mode:"dark",
    }
});
function Layout() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <main>
           <Outlet/>
        </main>
        <footer></footer>
    </ThemeProvider>
  )
}

export default Layout