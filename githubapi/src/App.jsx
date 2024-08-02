import "./App.css";
import Filters from "./components/Filters/Filters";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Search />
        <Filters />
      </div>
    </div>
  );
}

export default App;
