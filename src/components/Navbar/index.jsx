"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
const LOGO_svg_1 = require("../../assets/LOGO.svg");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
function Navbar() {
    const location = (0, react_router_dom_1.useLocation)();
    const [pathname, setPathname] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        setPathname(location.pathname);
    }, [location]);
    return (<nav className="nav">
      <LOGO_svg_1.ReactComponent className="nav__logo"/>
      <ul className="nav__links">
        <li>
          <react_router_dom_1.Link to="/" className={pathname === '/' ? 'active' : ''}>
            Accueil
          </react_router_dom_1.Link>
        </li>
        <li>
          <react_router_dom_1.Link to="/about" className={pathname === '/about' ? 'active' : ''}>
            A Propos
          </react_router_dom_1.Link>
        </li>
      </ul>
    </nav>);
}
exports.default = Navbar;
