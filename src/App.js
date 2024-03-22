import Navbar from "./component/Navbar"
import Search from "./component/Search"
import Products from "./component/Products"
import Footer from "./component/Footer"
import About from "./component/About"




function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App