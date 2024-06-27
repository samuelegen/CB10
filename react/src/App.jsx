import './App.css'
import { Header } from './components/header'
import { Footer } from "./components/footer";
import { Main } from './components/main';
import {Counter} from './components/counter';
function App() {
  return (
    <>
      <Header/>
      <Main/>
      <div className='content'>
        <Counter/>
      </div>
      <Footer/>
    </>
  );
}

export default App
