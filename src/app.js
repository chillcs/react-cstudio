// Import ---
import Header from './common/header';
import Title from './home/title';
import Hero from './home/hero';
import About from './home/about';
import Portfolio from './home/portfolio';
import Contact from './home/contact';
import Footer from './common/footer';

// Construct ---
function App() {
	return (
		<div className="App">
			<Header brandname="cStudio" />
			<Title title="cStudio" subtitle="code x commerce" />
			<Hero text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Title title="about" subtitle="our vision" />
			<About text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Title title="portfolio" subtitle="our work" />
			<Portfolio text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Title title="contact" subtitle="get in touch" />
			<Contact text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Footer />
		</div>
	);
}

// Export ---
export default App;
