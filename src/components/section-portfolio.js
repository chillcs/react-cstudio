import Slides from './portfolio';

function SectionPortfolio(props) {
	return (
		<div className="section--100">
			<p className="p-p1">{props.text}</p>
			<div className="slideshow">
				<div className="slide-controls">
					<button id="btnSL" className="btn">
						‹
					</button>
					<button id="btnSR" className="btn">
						›
					</button>
				</div>
				{Slides &&
					Slides.map((slide) => {
						return (
							<div>
								<div className="slide slide--active">
									<div className="slide-title Fade">
										<h4 className="h-h4 SL">{slide.date}</h4>
										<h4 className="h-h4 SR">{slide.title}</h4>
									</div>
									<div className="slide-content Fade">
										<div id="sImg01" className="slide-img SL"></div>
										<p className="p-p1 SR">{slide.text}</p>
										<div className="ext-btns SL">
											<button className="btn">code</button>
											<button className="btn">test</button>
										</div>
									</div>
									<div className="slide-bars">
										<div className="bar bar--active"></div>
										<div className="bar"></div>
										<div className="bar"></div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
export default SectionPortfolio;
