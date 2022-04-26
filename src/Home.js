// Import ---
import Title from './Title';
import Hero from './components/home/hero';
import About from './components/home/about';
import Portfolio from './components/home/portfolio';
import Contact from './components/home/contact';

// Construct ---
function Home() {
	return (
		<div className="App">
			<Title title="cStudio" subtitle="code x commerce" />
			<Hero text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Title title="about" subtitle="our vision" />
			<About text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Title title="portfolio" subtitle="our work" />
			<Portfolio text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Title title="contact" subtitle="get in touch" />
			<Contact text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
		</div>
	);
}

// Export ---
export default Home;
