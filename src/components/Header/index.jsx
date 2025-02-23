import Logo from "../../assets/logo.png";
import { Container, Menu, Li, Img} from "../Header/style";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const { pathname } = useLocation();
  const [ scrolll, setScroll] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  return (
    <Container $scrolll={scrolll}>
      <Img src={Logo} alt="logo-DevMovies"/>
    <Menu>
      <Li $isActive={pathname === "/"}>
        <Link to="/">Home</Link>
      </Li>
      <Li $isActive={pathname.includes("movies")}>
        <Link to="/movies">Movies</Link>
      </Li>
      <Li $isActive={pathname.includes("series")}>
        <Link to="/series">Series</Link>
      </Li>
    </Menu>

    </Container>
  );
}

 export default Header