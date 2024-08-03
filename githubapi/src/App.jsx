import "./App.css";
import Filters from "./components/Filters/Filters";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Search />
        <Filters />
        <Main />
      </div>
    </div>
  );
}

export default App;
