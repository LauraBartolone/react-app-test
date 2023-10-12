import logo from './logo.svg';
import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme-mui';
import './custom-bs-bundle/bootstrap';
import Header from './components/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      
    </div>
</ThemeProvider>
  );
}

export default App;
