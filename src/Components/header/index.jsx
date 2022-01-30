import { Header as HeaderStyled, LogoBox, Logo, TextBox, HeadingPrimary, ButtonWhite } from "./styles";
import logo from "../../assets/img/logo-white.png";

export function Header() {
    return (
        <HeaderStyled>
            <LogoBox>
                <Logo src={logo} alt="logo" />
            </LogoBox>
            
            <TextBox>
                <HeadingPrimary>
                    <span className="heding-primary-main">Outdoors</span>
                    <span className="heding-primary-sub">is where life happens</span>
                </HeadingPrimary>
                <ButtonWhite className="btn-white" href="#">Discover our tours</ButtonWhite>
            </TextBox>
        </HeaderStyled>
    );
}
