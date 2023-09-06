
import './App.css'
import Header from './components/Header'
import { items, itemImages } from './items';
import Home from './components/Home';

function App() {

  return (
    <div className='app'>
      <Header />
      <Home items={items} />
    </div>
  )
}

export default App
