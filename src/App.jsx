import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Landing from './components/Landing'


function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
<Landing />
      <h1>Angel Eduardo Salva</h1>
      <div className="card">
        <h2>
          I am a Full Stack developer
        </h2>
      </div>
      <p className="read-the-docs">
        Ready to start!
      </p>
<Footer />
    </div>
  )
}

export default App
