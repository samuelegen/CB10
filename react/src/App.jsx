import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="container">
          <h1></h1>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App
