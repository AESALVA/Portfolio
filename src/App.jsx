import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";




function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
<Landing />
<Footer />
    </div>
  )
}

export default App
