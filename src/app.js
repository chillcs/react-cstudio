import Header from './components/header';
import SectionTitle from './components/section-title';
import SectionHero from './components/section-hero';
import SectionAbout from './components/section-about';
import SectionPortfolio from './components/section-portfolio';
import SectionContact from './components/section-contact';
import Footer from './components/footer';
import './logic';

function App() {
	return (
		<div className="App">
			<Header />
			<SectionTitle title="cStudio" subtitle="code x commerce" />
			<SectionHero text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<SectionTitle title="about" subtitle="our vision" />
			<SectionAbout text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<SectionTitle title="portfolio" subtitle="our work" />
			<SectionPortfolio text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<SectionTitle title="contact" subtitle="get in touch" />
			<SectionContact text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta veritatis sunt nulla consectetur autem ipsum sit pariatur. Dolorum porro consequuntur omnis quis fuga suscipit sint dolorem aspernatur, voluptatum expedita." />
			<Footer />
		</div>
	);
}

export default App;
