// Import ---
import React from 'react';
import data from './portfolio.json';

// Construct ---
function Portfolio(props) {
	const [active, setActive] = React.useState(0);

	const slideLeft = () => {
		setActive(active === 0 ? data.length - 1 : active - 1);
	};

	const slideRight = () => {
		setActive(active === data.length - 1 ? 0 : active + 1);
	};

	const selectSlide = (slide) => {
		const id = parseInt(slide.target.id);
		setActive(active === id ? active : id);
	};

	return (
		<div className="section--100">
			<p className="p-p1">{props.text}</p>
			<div className="slideshow">
				<div className="slide-controls">
					<button id="btnSL" className="btn" onClick={slideLeft}>
						‹
					</button>
					<button id="btnSR" className="btn" onClick={slideRight}>
						›
					</button>
				</div>
				{data.map((slide) => {
					return (
						<div
							className={slide.id === active ? 'slide slide--active' : 'slide'}
							key={slide.id}
						>
							<div className="slide-title Fade">
								<h4 className="h-h4 SL">{slide.date}</h4>
								<h4 className="h-h4 SR">{slide.title}</h4>
							</div>
							<div className="slide-content Fade">
								<img
									className="slide-img SL"
									src={require(`../../assets/${slide.image.filename}`)}
									alt={slide.image.alt}
								/>
								<p className="p-p1 SR">{slide.description}</p>
								<div className="ext-btns SL">
									<button className="btn">
										<a
											href={slide.links.github}
											target="_blank"
											rel="noreferrer"
										>
											code
										</a>
									</button>
									<button className="btn">
										<a href={slide.links.test} target="_blank" rel="noreferrer">
											test
										</a>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="slide-bars">
				{data.map((slide) => {
					return (
						<div
							className={slide.id === active ? 'bar bar--active' : 'bar'}
							key={slide.id}
							id={slide.id}
							onClick={selectSlide}
						></div>
					);
				})}
			</div>
		</div>
	);
}

// Export ---
export default Portfolio;
