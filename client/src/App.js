import React, { useContext, useState } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//Context
import { ThemeContext } from "./Context/themeContext";
//Components
import Header from "./components/Header";
import CardSet from "./components/CardSet";
import Navigation from "./components/Navigation";

function App() {
	const [language, setLanguage] = useState("Javascript");
	const [pageNumber, setPageNumber] = useState(1);
	const [maxPageNumber, setMaxPageNumber] = useState(100);
	const [inputSearch, setInputSearch] = useState("");
	const [sortByForks, setSortByForks] = useState("desc");
	const [sortByStars, setSortByStars] = useState("desc");
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className="App"
			style={{ backgroundColor: theme.bg, color: theme.color }}
		>
			<Header
				setLanguage={setLanguage}
				setInputSearch={setInputSearch}
				inputSearch={inputSearch}
				sortByStars={sortByStars}
				setSortByStars={setSortByStars}
				sortByForks={sortByForks}
				setSortByForks={setSortByForks}
			/>
			<Navigation
				setPageNumber={setPageNumber}
				pageNumber={pageNumber}
				maxPageNumber={maxPageNumber}
			/>
			<CardSet
				pageNumber={pageNumber}
				language={language}
				key={language + pageNumber}
				setMaxPageNumber={setMaxPageNumber}
				sortByForks={sortByForks}
				sortByStars={sortByStars}
				inputSearch={inputSearch}
			/>
			<Navigation
				setPageNumber={setPageNumber}
				pageNumber={pageNumber}
				maxPageNumber={maxPageNumber}
			/>
		</div>
	);
}

export default App;
