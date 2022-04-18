function SectionAbout(props) {
	return (
		<div className="section--100">
			<p className="p-p1">{props.text}</p>
			<div className="about-cont">
				<div className="about-text">
					<p className="p-p1">Curtis Hill</p>
					<p className="p-p1">Freelance Developer</p>
					<p className="p-p1">curtis@cstudio.ca</p>
					<p className="p-p1">+1 (236) 562-5630</p>
					<p className="p-p1">Victoria, Canada</p>
				</div>
				<div id="img-me"></div>
			</div>
		</div>
	);
}
export default SectionAbout;
