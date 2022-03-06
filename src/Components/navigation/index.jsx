import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import {
  Navigation as NavigationStyled,
  NavigationBackground,
  NaviToggle,
  NavigationNav,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./styles";

export function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <NavigationStyled>
      {!showNavigation ? (
        <>
          <NaviToggle
            className="toogle-button"
            onClick={() => setShowNavigation(true)}
          >
            <FiMenu size={25} />
          </NaviToggle>
        </>
      ) : (
        <>
          <NaviToggle
            className="toogle-button"
            onClick={() => setShowNavigation(false)}
          >
            <FiX size={25} />
          </NaviToggle>
          <NavigationBackground className="navigation-background">
            &nbsp;
          </NavigationBackground>
          <NavigationNav className="navigation-nav">
            <NavigationList>
              <NavigationItem>
                <NavigationLink
                  onClick={() => setShowNavigation(false)}
                  href="#about"
                >
                  <span>01</span> About Natous
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink
                  onClick={() => setShowNavigation(false)}
                  href="#features"
                >
                  <span>02</span> Your benfits
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink
                  onClick={() => setShowNavigation(false)}
                  href="#tours"
                >
                  <span>03</span> Popular tours
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink
                  onClick={() => setShowNavigation(false)}
                  href="#stories"
                >
                  <span>04</span> Stories
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink
                  onClick={() => setShowNavigation(false)}
                  href="#book"
                >
                  <span>05</span> Book now
                </NavigationLink>
              </NavigationItem>
            </NavigationList>
          </NavigationNav>
        </>
      )}
    </NavigationStyled>
  );
}
