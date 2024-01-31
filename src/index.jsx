"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
require("./main.scss");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <Navbar_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<div>Test</div>}/>
        <react_router_dom_1.Route path="*" element={<div>Erreur 404</div>}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>);
