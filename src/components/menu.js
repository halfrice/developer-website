import React from "react"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { navLinks } from "../config"
import styled from "styled-components"
import device from "../styles/device"
import mixins from "../styles/mixins"
import theme from "../styles/theme.yaml"
import { IconDownload } from "~components/icons"

const { colors, fontSize } = theme

const MenuContainer = styled.div`
  background-color: ${props => (props.menuOpen ? colors.black : `transparent`)};
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: ${mixins.padding.sides};
  transition: all ${theme.time.medium} ${theme.easing};
  transform: translateY(${props => (props.menuOpen ? 0 : -100)}vh);
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
  z-index: 0;
  ${device.tablet`display: block;`};
`
const DropdownMenu = styled.div`
  ${mixins.flex.start};
  justify-content: flex-start;
  justify-items: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
`
const NavLinks = styled.nav`
  ${mixins.flex.between};
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-top: ${props => props.navHeight + "px"};
`
const NavList = styled.ol`
  width: 100%;
`
const NavListItem = styled.li`
  width: 100%;
  max-width: 700px;
  height: 50px;
  margin: 0 auto;
  font-size: ${fontSize.lg};
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  transition: opacity ${theme.time.medium} ${theme.easing} 0.25s;
  ${device.phone`
    font-size: ${fontSize.md};
  `};
`
const NavLink = styled(AnchorLink)`
  ${mixins.flex.start};
  border-bottom: 1px solid ${colors.grey};
  width: 100%;
  height: 100%;
  text-align: left;
`
const ResumeLink = styled.a`
  ${mixins.flex.start};
  width: 100%;
  max-width: 700px;
  height: 50px;
  /* margin-right: 10px; */
  font-size: ${fontSize.lg};
  /* color: ${colors.lightGreen}; */
`
const ResumeIcon = styled.div`
  ${mixins.flex.start};
  margin-left: 8px;
  svg {
    width: 19px;
    height: 19px;
    fill: ${colors.lightGreen};
    /* margin-right: 8px; */
  }
`

const Menu = ({ menuOpen, toggleMenu, navHeight }) => {
  const handleMenuClick = e => {
    const target = e.target
    const isLink = target.hasAttribute("href")
    const isNotMenu =
      target.classList && target.classList[0].includes("MenuContainer")

    if (isLink || isNotMenu) {
      toggleMenu()
    }
  }

  return (
    <MenuContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <DropdownMenu>
        <NavLinks navHeight={navHeight}>
          <NavList>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <NavListItem key={i} menuOpen={menuOpen}>
                  <NavLink href={url} to={url} offset={-30}>
                    {name}
                  </NavLink>
                </NavListItem>
              ))}
          </NavList>
          <ResumeLink
            href="/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Resume
            <ResumeIcon>
              <IconDownload />
            </ResumeIcon>
          </ResumeLink>
        </NavLinks>
      </DropdownMenu>
    </MenuContainer>
  )
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  navHeight: PropTypes.number.isRequired,
}

export default Menu
