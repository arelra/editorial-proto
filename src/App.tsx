import React from "react";
import { Header } from "./header/Header";
import { Nav } from "./nav/Nav";
import "./App.css";
import FilterBank from "./filterBank/filterBank";
import FilterContextWrapper from "./filterContext/filterContext";

function App() {
	return (
		<div className="App">
			<FilterContextWrapper>
				<Header />
				<Nav />
				<FilterBank />
			</FilterContextWrapper>
		</div>
	);
}

export default App;
