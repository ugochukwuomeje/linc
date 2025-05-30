// import React, { useState } from "react";
// import {
//   Container,
//   Nav,
//   Navbar as BootstrapNavbar,
//   Button,
// } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../assets/logo/logo.png";

// const Navbar = () => {
//   const [CollapseNavbar, setCollapseNavbar] = useState(false);
//   const navigate = useNavigate();

//   function handlenaviagtion(path) {
//     setCollapseNavbar(false);
//     navigate(path);
//   }

//   return (
//     <BootstrapNavbar expand="lg" className="custom-navbar sticky-top">
//       <Container>
//         <BootstrapNavbar.Brand
//           as="a"
//           href="#home"
//           className="navbar-brand"
//           style={{ cursor: "pointer" }}
//           expanded={CollapseNavbar}
//         >
//           <Link to="/" onClick={() => handlenaviagtion("/")}>
//             <img src={logo} alt="Linc Home Solutions" className="navbar-logo" />
//           </Link>
//           <Link
//             to="/"
//             style={{ textDecoration: "none" }}
//             onClick={() => handlenaviagtion("/")}
//           >
//             <span className="navbar-brand-text">Linc Home Solutions</span>
//           </Link>
//         </BootstrapNavbar.Brand>

//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse
//           id="basic-navbar-nav"
//           className="justify-content-end"
//           onClick={() => setCollapseNavbar(CollapseNavbar ? false : "expanded")}
//         >
//           <Nav className="navbar-nav align-items-center">
//             <Link
//               className="nav-link"
//               to="/how-it-works"
//               onClick={() => handlenaviagtion("/how-it-works")}
//             >
//               How It Works
//             </Link>
//             <Link
//               className="nav-link"
//               to="/help"
//               onClick={() => handlenaviagtion("/help")}
//             >
//               Who We Help
//             </Link>
//             <a
//               className="nav-link"
//               href="/#why-choose-us"
//               onClick={() => handlenaviagtion("/#why-choose-us")}
//             >
//               Why Choose Us
//             </a>
//             <Link
//               className="nav-link"
//               to="/testimonial"
//               onClick={() => handlenaviagtion("/testimonial")}
//             >
//               Testimonials
//             </Link>
//             <Link
//               className="nav-link"
//               to="/about"
//               onClick={() => handlenaviagtion("/about")}
//             >
//               About Us
//             </Link>
//             <Link
//               className="nav-link"
//               to="/faq"
//               onClick={() => handlenaviagtion("/faq")}
//             >
//               FAQ
//             </Link>
//             <Button
//               href="/#offer"
//               style={{
//                 backgroundColor: "#3599db",
//                 color: "white",
//                 fontWeight: 600,
//                 padding: "0.5rem 1.25rem",
//                 border: "none",
//                 borderRadius: "50px",
//                 transition: "background-color 0.3s ease",
//               }}
//               onClick={() => setCollapseNavbar(false)}
//             >
//               Get Cash Offer
//             </Button>
//           </Nav>
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setExpanded(false); // Collapse the navbar
    navigate(path); // Navigate to route
  };

  return (
    <BootstrapNavbar
      expand="lg"
      className="custom-navbar sticky-top"
      expanded={expanded}
    >
      <Container>
        <BootstrapNavbar.Brand
          className="navbar-brand"
          style={{ cursor: "pointer" }}
        >
          <Link to="/">
            <img src={logo} alt="Linc Home Solutions" className="navbar-logo" />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar-brand-text">Linc Home Solutions</span>
          </Link>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="navbar-nav align-items-center">
            <span
              className="nav-link"
              onClick={() => handleNavClick("/how-it-works")}
            >
              How It Works
            </span>
            <span className="nav-link" onClick={() => handleNavClick("/help")}>
              Who We Help
            </span>
            <a
              className="nav-link"
              href="/#why-choose-us"
              onClick={() => setExpanded(false)}
            >
              Why Choose Us
            </a>
            <span
              className="nav-link"
              onClick={() => handleNavClick("/testimonial")}
            >
              Testimonials
            </span>
            <span className="nav-link" onClick={() => handleNavClick("/about")}>
              About Us
            </span>
            <span className="nav-link" onClick={() => handleNavClick("/faq")}>
              FAQ
            </span>
            <Button
              href="/#offer"
              onClick={() => setExpanded(false)}
              style={{
                backgroundColor: "#3599db",
                color: "white",
                fontWeight: 600,
                padding: "0.5rem 1.25rem",
                border: "none",
                borderRadius: "50px",
                transition: "background-color 0.3s ease",
              }}
            >
              Get Cash Offer
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
