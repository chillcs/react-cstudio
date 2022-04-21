// Import ---
import Nav from './nav';
import React from 'react';

// Construct ---
function Header(props) {
	// Menu Toggle ---
	const [menu, setMenu] = React.useState(true);
	function toggleMenu() {
		setMenu((prevState) => !prevState);
		document.body.classList.toggle('overflow');
	}

	return (
		<div className="head">
			<div className="logo">
				<a className="h-h3" href="#">
					{props.brandname}
				</a>
			</div>
			<input id="menuToggle" type="checkbox" onClick={toggleMenu} />
			<label className="menu-btn-cont" for="menuToggle">
				<div className="menu-btn"></div>
			</label>
			{menu ? (
				<div className="menu SR">
					<Nav />
				</div>
			) : (
				<div className="menu-mob SR">
					<Nav />
				</div>
			)}
		</div>
	);
}

// Export ---
export default Header;
