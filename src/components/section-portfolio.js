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
				<div className="slide slide--active">
					<div className="slide-title Fade">
						<h4 className="h-h4 SL">02.16.2022</h4>
						<h4 className="h-h4 SR">LOREM IPSUM DOLOR</h4>
					</div>
					<div className="slide-content Fade">
						<div id="sImg01" className="slide-img SL"></div>
						<p className="p-p1 SR">
							Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero
							oporteat apeirian in vel. Et appareat electram appellantur est. Ei
							nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.
						</p>
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
				<div className="slide">
					<div className="slide-title Fade">
						<h4 className="h-h4 SL">02.16.2022</h4>
						<h4 className="h-h4 SR">LOREM IPSUM DOLOR</h4>
					</div>
					<div className="slide-content Fade">
						<div id="sImg02" className="slide-img SL"></div>
						<p className="p-p1 SR">
							Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero
							oporteat apeirian in vel. Et appareat electram appellantur est. Ei
							nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.
						</p>
						<div className="ext-btns SL">
							<button className="btn">code</button>
							<button className="btn">test</button>
						</div>
					</div>
					<div className="slide-bars">
						<div className="bar"></div>
						<div className="bar bar--active"></div>
						<div className="bar"></div>
					</div>
				</div>
				<div className="slide">
					<div className="slide-title Fade">
						<h4 className="h-h4 SL">02.16.2022</h4>
						<h4 className="h-h4 SR">LOREM IPSUM DOLOR</h4>
					</div>
					<div className="slide-content Fade">
						<div id="sImg03" className="slide-img SL"></div>
						<p className="p-p1 SR">
							Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero
							oporteat apeirian in vel. Et appareat electram appellantur est. Ei
							nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.
						</p>
						<div className="ext-btns SL">
							<button className="btn">code</button>
							<button className="btn">test</button>
						</div>
					</div>
					<div className="slide-bars">
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar bar--active"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SectionPortfolio;
