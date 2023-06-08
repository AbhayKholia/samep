import './App.scss';
import {BrowserRouter , Routes , Route} from "react-router-dom"
// pages
import {Home ,Cart, Category } from "./pages/indax"
// component
import Navbar  from './components/Navbar/Navbar';
// footer
import Footer from "./components/Footer/Footer"
import store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/category/:id' element = {<Category/>}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
