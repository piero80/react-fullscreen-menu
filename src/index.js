import React, { useState, Fragment } from 'react'
import { StyledIcon } from './Icon.styled'
import { StyledMenu } from './Menu.styled'
import { ReactComponent as CloseIcon } from './images/close.svg'
import { ReactComponent as MenuIcon } from './images/menu.svg'
import { ReactComponent as BackIcon } from './images/back.svg'

export const FullscreenMenu = ({ data, position }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='App'>
      <MenuBurger open={open} setOpen={setOpen} position={position}>
        <Menu open={open} data={data} setOpen={setOpen}></Menu>
      </MenuBurger>
    </div>
  )
}

function MenuBurger({ open, setOpen, children, position }) {
  return (
    <Fragment>
      <StyledIcon position={position}>
        <span className='navbar-menu'>
          <div className='menu-btn' open={open} onClick={() => setOpen(!open)}>
            <MenuIcon />
          </div>
        </span>
      </StyledIcon>
      {children}
    </Fragment>
  )
}

function Menu({ open, setOpen, data }) {
  const [sub, setSub] = useState(false)

  const [selectedItemMenu, toggleMenu] = useState(-1)

  function openSubMenu(index) {
    toggleMenu(selectedItemMenu === index ? -1 : index)
    setSub(!sub)
  }

  function returnToBack() {
    setOpen(false)
    setSub(false)
    toggleMenu(-1)
  }
  return (
    <StyledMenu open={open}>
      <div className='remove-icon-mobile' onClick={returnToBack}>
        <CloseIcon />
      </div>
      <div className='menu_mobile'>
        <ul id='lista' className={sub ? 'move' : ''}>
          {data.map((item, index) => (
            <li
              className={item.sub_menu ? 'item-level-1' : ''}
              onClick={() => openSubMenu(index)}
              key={`item-${index}`}
            >
              <a href={item.url}>{item.label}</a>
              <SubMenu
                item={item}
                selectedItemMenu={selectedItemMenu}
                index={index}
                setSub={setSub}
              ></SubMenu>
            </li>
          ))}
        </ul>
      </div>
    </StyledMenu>
  )
}

function SubMenu({ item, selectedItemMenu, index }) {
  return (
    <Fragment>
      {item.sub_menu && (
        <ul className={`sub-menu ${selectedItemMenu === index ? 'open' : ''}`}>
          <span className='return-level-1'>
            <BackIcon />
          </span>
          <h3>{item.label}</h3>
          {item.sub_menu &&
            item.sub_menu.map((sub_item, i) => (
              <li key={i}>
                <a href={sub_item.url}>
                  <h4>{sub_item.label}</h4>
                  <p>{sub_item.sub_title}</p>
                </a>
              </li>
            ))}
        </ul>
      )}
    </Fragment>
  )
}
