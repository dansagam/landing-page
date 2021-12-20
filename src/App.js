import logo from './logo.svg'
import './App.css'
import CustomInput from './components/CustomInputs/Input'
import RegularButton from './components/CustomButtons/Button'

const App = function () {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learning
            </a>
            <CustomInput
               inputProps={{ disabled: true }}
               labelText="testing"
               formControlProps={{ fullWidth: false }}
            />
            <RegularButton round color="rose">
               submit
            </RegularButton>
         </header>
      </div>
   )
}

export default App
