import React from "react"
import PropTypes from "prop-types"
import { navLinks } from "../config"
import { Link } from "gatsby"
import styled from "styled-components"
import device from "../styles/device"
import mixins from "../styles/mixins"
import theme from "../styles/theme.yaml"

const { colors, fontSizes } = theme

const MenuContainer = styled.div`
  background-color: ${props => (props.menuOpen ? colors.black : `transparent`)};
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  padding: ${mixins.padding.sides};
  transition: all ${theme.time.medium} ${theme.easing};
  transform: translateY(${props => (props.menuOpen ? 0 : -100)}vh);
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
  z-index: 0;
  ${device.tablet`display: block;`};
`
const Sidebar = styled.div`
  ${mixins.flex.center};
  justify-content: flex-start;
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
  margin-top: 100px;
`
const NavList = styled.ol`
  width: 100%;
`
const NavListItem = styled.li`
  width: 100%;
  max-width: 700px;
  height: 50px;
  margin: 0 auto;
  font-size: ${fontSizes.large};
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  transition: opacity ${theme.time.medium} ${theme.easing} 0.25s;
  ${device.phone`
    font-size: ${fontSizes.medium};
  `};
`
const NavLink = styled(Link)`
  ${mixins.flex.start};
  border-bottom: 1px solid ${colors.grey};
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
`

const Menu = ({ menuOpen, toggleMenu }) => {
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
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <NavListItem key={i} menuOpen={menuOpen}>
                  <NavLink href={url} to={url}>
                    {name}
                  </NavLink>
                </NavListItem>
              ))}
          </NavList>
        </NavLinks>
      </Sidebar>
    </MenuContainer>
  )
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default Menu
