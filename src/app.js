// Import ---
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Error from './Error';
import Footer from './Footer';

// Construct ---
function App() {
	return (
		<Router>
			<div className="App">
				<Header brandname="cStudio" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

// Export ---
export default App;
