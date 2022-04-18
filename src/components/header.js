function Header(props) {
	return (
		<div className="head">
			<div className="logo">
				<a className="h-h3" href="#">
					cStudio
				</a>
			</div>
			<div className="menu SR">
				<ul>
					<li>
						<a className="h-h3" href="#">
							about
						</a>
					</li>
					<li>
						<a className="h-h3" href="#">
							portfolio
						</a>
					</li>
					<li>
						<a className="h-h3" href="#">
							contact
						</a>
					</li>
					<li>
						<a className="h-h3" href="#">
							hire
						</a>
					</li>
				</ul>
			</div>
			<input id="menuToggle" type="checkbox" />
			<label className="menu-btn-cont" for="menuToggle">
				<div className="menu-btn"></div>
			</label>
		</div>
	);
}
export default Header;
