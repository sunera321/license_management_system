import Logo from "../image/logo.png";
import Menue from "./Menue";
import {
  HaderMainCon,
  LogoImage,
  MenuContainer,
  StyledLinkM,
} from "../styles/layout/header";

const Header = () => {
  return (
    <HaderMainCon>
      <StyledLinkM to="/">
        <LogoImage src={Logo} alt="logo" />
      </StyledLinkM>
      <MenuContainer>
        <Menue />
      </MenuContainer>
    </HaderMainCon>
  );
};

export default Header;
