// Import ---
import { useNavigate } from 'react-router-dom';
import data from './Nav.json';

// Construct ---
function Nav() {
	let navigate = useNavigate();
	return (
		<ul>
			{data.map((navitem) => {
				return (
					<li key={navitem.id}>
						<a
							className="h-h3"
							onClick={() => {
								navigate(navitem.path);
							}}
						>
							{navitem.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
}

// Export ---
export default Nav;
