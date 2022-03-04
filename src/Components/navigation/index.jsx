import { useState } from "react";
import { FiX, FiMenu } from 'react-icons/fi';
import { Navigation as NavigationStyled, NavigationBackground, NaviToggle, NavigationNav, NavigationList, NavigationItem, NavigationLink } from './styles';

export function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <NavigationStyled>
      {
        !showNavigation ? (
          <>
            <NaviToggle onClick={() => setShowNavigation(true)}><FiMenu size={25} /></NaviToggle>
          </>
        ) : (
          <>
            <NaviToggle onClick={() => setShowNavigation(false)}><FiX size={25} /></NaviToggle>
            <NavigationBackground>&nbsp;</NavigationBackground>
            <NavigationNav>
              <NavigationList>
                <NavigationItem>
                  <NavigationLink onClick={() => setShowNavigation(false)} href="#about"><span>01</span> About Natous</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <NavigationLink onClick={() => setShowNavigation(false)} href="#features"><span>02</span> Your benfits</NavigationLink>
                </NavigationItem><NavigationItem>
                  <NavigationLink onClick={() => setShowNavigation(false)} href="#tours"><span>03</span> Popular tours</NavigationLink>
                </NavigationItem><NavigationItem>
                  <NavigationLink onClick={() => setShowNavigation(false)} href="#stories"><span>04</span> Stories</NavigationLink>
                </NavigationItem><NavigationItem>
                  <NavigationLink onClick={() => setShowNavigation(false)} href="#book"><span>05</span> Book now</NavigationLink>
                </NavigationItem>
              </NavigationList>
            </NavigationNav>
          </>
        )
      }
      {/* {
        !showNavigation ? (<></>) : (<NavigationBackground>&nbsp;</NavigationBackground>)
      }
      {
        !showNavigation ? (
          <></>
        ) : (
          <NavigationNav>
            <NavigationList>
              <NavigationItem>
                <NavigationLink href="#">About Natous</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink href="#">Your benfits</NavigationLink>
              </NavigationItem><NavigationItem>
                <NavigationLink href="#">Popular tours</NavigationLink>
              </NavigationItem><NavigationItem>
                <NavigationLink href="#">Stories</NavigationLink>
              </NavigationItem><NavigationItem>
                <NavigationLink href="#">Book now</NavigationLink>
              </NavigationItem>
            </NavigationList>
          </NavigationNav>
        )
      } */}
    </NavigationStyled>
  );
}