// Import ---
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

// Construct ---
function Header(props) {
	// Menu Toggle ---
	let navigate = useNavigate();
	const [menu, setMenu] = React.useState(true);
	function toggleMenu() {
		setMenu((prevState) => !prevState);
		document.body.classList.toggle('overflow');
	}

	return (
		<div className="head">
			<div className="logo">
				<a
					className="h-h3"
					onClick={() => {
						navigate('/');
					}}
				>
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
