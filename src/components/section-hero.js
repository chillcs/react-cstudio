function SectionHero(props) {
	return (
		<div className="section--100">
			<p className="p-p1">{props.text}</p>
			<div className="hero-icon-cont">
				<div id="icon-html" className="hero-icon"></div>
				<div id="icon-css" className="hero-icon"></div>
				<div id="icon-javascript" className="hero-icon"></div>
				<div id="icon-react" className="hero-icon"></div>
				<div id="icon-shopify" className="hero-icon"></div>
			</div>
			<button className="btn">contact</button>
			<button className="btn">hire</button>
		</div>
	);
}
export default SectionHero;
