import { useNavigate } from 'react-router-dom';
import data from './Nav.json';

// Construct ---
function Footer() {
	let navigate = useNavigate();
	return (
		<div className="foot">
			<div className="copyright">
				<h5 className="h-h5">© Hill & Co Consulting Inc.</h5>
			</div>
			<div className="links">
				<ul>
					{data.map((navitem) => {
						return (
							<li key={navitem.id}>
								<a
									className="h-h5"
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
			</div>
		</div>
	);
}

// Export ---
export default Footer;
