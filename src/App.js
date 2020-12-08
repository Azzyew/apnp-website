import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import English from "./pages/English";
import Literature from "./pages/Literature";
import Spanish from "./pages/Spanish";

function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<p>Carregando...</p>}>

				<div className="header">
					<Link to="/english" className="menu-link">
						Inglês
					</Link>
					<Link to="/literature" className="menu-link">
						Literatura
					</Link>
					<Link to="/spanish" className="menu-link">
						Espanhol
					</Link>
				</div>
				
					<div className="content">
						<Switch>

							<Route exact path="/" component={Dashboard} />
							<Route path="/english" component={English} />
							<Route path="/literature" component={Literature} />
							<Route path="/spanish" component={Spanish} />
              
						</Switch>
					</div>
				</Suspense>

				
			</div>
		</Router>
	);
}

export default App;