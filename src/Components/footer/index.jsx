import { Footer as FooterStyled, FooterLogoBox, FooterLogoImage, FooterNavigation, FooterLink, Copyright } from './styles';
import { LogoGreen1x, LogoGreen2x, LogoGreenSmall1x, LogoGreenSmall2x } from '../../assets/img';

export function Footer() {
  return (
   <FooterStyled>
      <FooterLogoBox>
        <FooterLogoImage>
          <source srcSet={`${LogoGreenSmall1x} 1x, ${LogoGreenSmall2x} 2x`} media='(max-width: 37.5em)' />
          <img srcSet={`${LogoGreen1x} 1x, ${LogoGreen2x} 2x`} alt="Full logo" />
        </FooterLogoImage>
      </FooterLogoBox>
      <div className="row">
        <div className="col-1-of-2">
          <FooterNavigation>
            <ul>
              <li>
                <FooterLink href="#">
                  Company
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#">
                  Contact us
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#">
                  Carrers
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#">
                  Privacy policy
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#">
                  Terms
                </FooterLink>
              </li>
            </ul>
          </FooterNavigation>
        </div>
        <div className="col-1-of-2">
          <Copyright>
            Built my <FooterLink href='#'>Jonas Schmedtmann</FooterLink> for his online course <FooterLink href='#'>Advanced CSS and Sass</FooterLink>. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of cours highly appreciated!
          </Copyright>
        </div>
      </div>
   </FooterStyled>
  );
}