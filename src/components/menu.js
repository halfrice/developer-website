import React from "react"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { navLinks } from "../config"
import styled from "styled-components"
import device from "../styles/device"
import mixins from "../styles/mixins"
import theme from "../styles/theme.yaml"
import { FormattedIcon, IconFloppy } from "~components/icons"

const { colors, fontSize } = theme

const MenuContainer = styled.div`
  /* background-color: ${props =>
    props.menuOpen ? colors.black : `transparent`}; */
  position: fixed;
  top: 0;
  /* bottom: 0; */
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  outline: 0;
  transition: all ${theme.time.medium} ${theme.easing};
  transform: translateY(${props => (props.menuOpen ? 0 : -100)}vh);
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
  z-index: 10;
  display: none;
  ${device.tablet`display: block;`};
`
const DropdownMenu = styled.div`
  ${mixins.flex.center};
  ${mixins.padding.sides};
  justify-content: flex-start;
  justify-items: flex-start;
  flex-direction: column;
  position: relative;
  padding: 50px;
  width: 100%;
  height: auto;
  right: 0;
  margin-left: auto;
  background-color: ${colors.black};
  ${mixins.navShadow};
  /* box-shadow: -10px 0px 30px -15px ${colors.black}; */

`
const NavLinks = styled.nav`
  ${mixins.flex.between};
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-top: ${props => props.navHeight + "px"};
  margin-bottom: ${props => props.navHeight / 2 + "px"};
  /* margin-bottom: 50px; */
`
const NavList = styled.ol`
  width: 100%;
`
const NavListItem = styled.li`
  width: 100%;
  max-width: 700px;
  height: 50px;
  margin: 0 auto;
  font-size: ${fontSize.md};
  font-weight: 600;
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  transition: opacity ${theme.time.medium} ${theme.easing} 0.25s;
  ${device.phone`
    font-size: ${fontSize.md};
  `};
`
const NavLink = styled(AnchorLink)`
  ${mixins.flex.end};
  border-bottom: 1px solid ${colors.grey};
  width: 100%;
  height: 100%;
  text-align: left;
  svg {
    fill: ${colors.lightGreen};
    stroke: ${colors.lightGreen};
    width: ${fontSize.lg};
    height: ${fontSize.lg};
    margin-right: 10px;
  }
`
const ResumeLink = styled.a`
  ${mixins.flex.end};
  width: 100%;
  max-width: 700px;
  height: 50px;
  font-size: ${fontSize.md};
  font-weight: 600;
  /* color: ${colors.lightGreen}; */
  svg {
    width: ${fontSize.lg};
    height: ${fontSize.lg};
    fill: ${colors.lightGreen};
    margin-right: 10px;
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
                    <FormattedIcon name={name} />
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
            <IconFloppy />
            Resume
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
