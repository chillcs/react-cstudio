// Import ---
import data from './nav.json';

// Construct ---
function Nav() {
	return (
		<ul>
			{data.map((navitem) => {
				return (
					<li key={navitem.id}>
						<a className="h-h3" href={navitem.url}>
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
