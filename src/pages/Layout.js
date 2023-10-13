import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme-mui';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header/>
        <Outlet />
    </ThemeProvider>
  )
};

export default Layout;