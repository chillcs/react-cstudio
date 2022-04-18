// Import ---
import nav from './nav.json';

// Construct ---
function Header(props) {
	return (
		<div className="head">
			<div className="logo">
				<a className="h-h3" href="#">
					{props.brandname}
				</a>
			</div>
			<div className="menu SR">
				<ul>
					{nav.map((navitem) => {
						return (
							<li key={navitem.id}>
								<a className="h-h3" href={navitem.url}>
									{navitem.title}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
			<input id="menuToggle" type="checkbox" />
			<label className="menu-btn-cont" for="menuToggle">
				<div className="menu-btn"></div>
			</label>
		</div>
	);
}

// Export ---
export default Header;
