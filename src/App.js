import './App.scss';
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <span className={"header-item"}>😈</span>
          <span className={"header-item"}>hello world</span>
      </header>
        <div className={'App-body'}>
            <Homepage />
        </div>
    </div>
  );
}

export default App;
