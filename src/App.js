import './App.css';
import Test from './Test';
import Circular from './Circular';
import Popupbar from './Popup';
import Tablepagination from './Tablepagination';
import Datanames from './Datanames';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div><h1>hello welocom to Go policy</h1></div>
        <div><svg style={{width:"50px",height:"50px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
      </header>

      <div>
      {/* <Test/> */}
      {/* <Circular/> */}
      {/* <Popupbar/> */}
      {/* <Tablepagination/> */}
      <Datanames/>

      </div>
      


    </div>
  );
}

export default App;
