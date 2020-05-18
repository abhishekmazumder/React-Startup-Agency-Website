import React from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './components/pages/Home';
import About from './components/pages/About'

function App() {
	return (
		<Router>
			<PageWrapper>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route  exact path="/about" component={About} />
				</Switch>
			</PageWrapper>
		</Router>
	);
}


export default App;
