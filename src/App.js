import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import English from "./pages/English";
import Literature from "./pages/Literature";
import Spanish from "./pages/Spanish";
import WebProg from "./pages/WebProg";

function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<p>Carregando...</p>}>
					<div className="content">
						<Switch>

							<Route exact path="/" component={Dashboard} />
							<Route path="/english" component={English} />
							<Route path="/literature" component={Literature} />
							<Route path="/spanish" component={Spanish} />
							<Route path="/web-prog" component={WebProg} />
              
						</Switch>
					</div>
				</Suspense>

				<div className="side-menu">
					<Link to="/aps" className="menu-link-aps">
						APS
					</Link>
					<Link to="/english" className="menu-link">
						Inglês
					</Link>
					<Link to="/literature" className="menu-link">
						Literatura
					</Link>
					<Link to="/spanish" className="menu-link">
						Espanhol
					</Link>
          <Link to="/web-prog" className="menu-link">
						Prog. Web
					</Link>
				</div>
			</div>
		</Router>
	);
}

export default App;