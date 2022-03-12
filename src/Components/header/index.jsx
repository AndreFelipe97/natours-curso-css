import {
  Header as HeaderStyled,
  LogoBox,
  Logo,
  TextBox,
  ButtonWhite,
} from "./styles";
import { HeadingPrimary } from "../../styles/typography";
import { LogoWhite } from "../../assets/img";

export function Header() {
  return (
    <HeaderStyled>
      <LogoBox>
        <Logo src={LogoWhite} alt="logo" />
      </LogoBox>

      <TextBox>
        <HeadingPrimary>
          <span className="heding-primary-main">Outdoors</span>
          <span className="heding-primary-sub">is where life happens</span>
        </HeadingPrimary>
        <ButtonWhite className="btn-white" href="#tours">
          Discover our tours
        </ButtonWhite>
      </TextBox>
    </HeaderStyled>
  );
}
