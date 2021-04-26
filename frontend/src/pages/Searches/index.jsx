import Filter from "./components/Filter";
import SearchCard from "./components/SearchCard/SearchCard";
import "./style.css";

function Searches() {
  return (
    <div className="search-container">
        <div className="search-content-above">
        <Filter/>
        </div>
        <div className="search-content-bellow">
      <SearchCard />
        </div>
    </div>
  );
}
export default Searches;
