import React from "react";
import { Header } from "./header/Header";
import { Nav } from "./nav/Nav";
import { Page } from "./page/Page";
import "./App.css";
import FilterContextWrapper from "./filterContext/filterContext";

function App() {
	return (
		<div className="App">
			<FilterContextWrapper>
				<Header />
				<Nav />
				<Page />
			</FilterContextWrapper>
		</div>
	);
}

export default App;
