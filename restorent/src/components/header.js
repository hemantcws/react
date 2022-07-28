import sitelogo from '../images/react-logo.png';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
				<Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
					<img src={sitelogo} className="logo" alt="logo" />
				</Link>
				<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 top-menu">
					<li className=""><Link to="/about" className="nav-link px-2 link-secondary">How does it work?</Link></li>
					<li className="open-gift"><Link to="/gifts" className="nav-link px-2 link-red">Open my gift <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
						<path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
						</svg></Link>
					</li>
				</ul>
				<div className="col-md-3 text-center">
					<button type="button" className="btn btn-outline-primary me-2">Login</button>
					<button type="button" className="btn btn-primary">Sign-up</button>
				</div>
			</header>
		</div>
    </div>
  );
}

export default Header;
