// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter } from 'react-router';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { AppRouter } from "./routes/approuter";

function App() {
  return (
    <>
      <BrowserRouter >
      <Header />

      <AppRouter />

      <Footer />
      </BrowserRouter >
    </>
  );
}

export default App;
