import React, { useState, Fragment } from 'react'
import { StyledIcon, SVG } from './Icon.styled'
import { StyledMenu } from './Menu.styled'

import { ReactComponent as CloseIcon } from './images/close.svg'
import { ReactComponent as BackIcon } from './images/back.svg'

export const FullscreenMenu = ({ data, position, colorIcon }) => {
  const [open, setOpen] = useState(false)

  return (
    <MenuBurger
      open={open}
      setOpen={setOpen}
      position={position}
      colorIcon={colorIcon}
    >
      <Menu open={open} data={data} setOpen={setOpen}></Menu>
    </MenuBurger>
  )
}

function MenuBurger({ open, setOpen, children, position, colorIcon }) {
  const Icon = (props) => {
    return (
      <SVG
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        {...props}
      >
        <g
          id='HP'
          stroke='none'
          strokeWidth='2'
          fill='none'
          fillRule='evenodd'
          strokeLinecap='square'
        >
          <g transform='translate(-271.000000, -19.000000)' stroke={colorIcon}>
            <g id='Group' transform='translate(271.000000, 19.000000)'>
              <line x1='0.444444444' y1='1.5' x2='32' y2='1' id='Line-4'></line>
              <line
                x1='0.444444444'
                y1='11.5'
                x2='32'
                y2='11'
                id='Line-4'
              ></line>
              <line
                x1='0.444444444'
                y1='22.5'
                x2='32'
                y2='22'
                id='Line-4'
                strokeWidth='3'
              ></line>
            </g>
          </g>
        </g>
      </SVG>
    )
  }
  return (
    <Fragment>
      <StyledIcon position={position} colorIcon={colorIcon}>
        <span className='navbar-menu'>
          <div className='menu-btn' open={open} onClick={() => setOpen(!open)}>
            <Icon
              fill='inherit'
              stroke={colorIcon}
              strokeWidth='2px'
              width='32px'
              height='23px'
              name='icon-home'
            />
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
              onClick={() => {
                item.sub_menu ? openSubMenu(index) : null
              }}
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
