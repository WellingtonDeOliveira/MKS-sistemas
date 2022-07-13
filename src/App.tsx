import { Nav } from "./components/Nav/Nav"

import './App.css'
import { Products } from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";

// https://mks-frontend-challenge-api.herokuapp.com/api/v1

// yarn
// yarn dev


function App() {
  
  return (
    <div>
      <Nav/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
