import React, {useState} from "react";
import Nav from "./Nav";
import HogFilter from "./HogFilter";
import HogForm from "./HogForm";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	const [hogsData, setHogs] = useState(hogs);
	const [hidden, setHidden] = useState([]);
	const [filter, setFilter] = useState(false);
	const [sort, setSort] = useState("");

	const addHog = (newHog) => setHogs([...hogs, newHog]);
	const hideHog = (hogName) => setHidden([...hidden, hogName]);
	const handleFilter = () => setFilter((e) => !e);
	const handleSort = (e) => setSort(e.target.value);

	const displayHogs = hogsData.filter((hog) => (filter ? hog.greased : true))
	.filter((hog) => !hidden.includes(hog.name));

	if (sort === "name") {
    	displayHogs.sort((a, b) => a.name.localeCompare(b.name));
  	} else if (sort === "weight") {
    	displayHogs.sort((a, b) => a.weight - b.weight);
  	}

	return (
		<div className="App">
			<Nav />
			<HogFilter filter={filter} sort={sort} 
			handleFilter={handleFilter} handleSort={handleSort}/>
			<HogForm addHog={addHog}/>
			<HogList hogs={displayHogs} hideDetails={hideHog}/>
		</div>
	);
}

export default App;
