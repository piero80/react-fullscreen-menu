import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: fixed;
`

export const StyledMenu = styled.section`
  position: fixed;
  top: 0;
  z-index: 9999;
  display: ${({ open }) => (open ? 'inline-block' : 'none')};
  overflow: auto;
  width: 100%;
  height: 100%;
  background: #fff;

  .menu_mobile {
    width: 100%;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
  }

  .remove-icon-mobile {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 999;
  }

  .menu_mobile ul {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #lista li {
    padding: 20px 0;
    list-style: none;
    text-align: center;
    margin-bottom: 40px;
    display: inline-block;
    width: 100%;
    margin: 0;
    border-bottom: 2px solid #f5f7fb;
  }

  #lista li a {
    color: #525f7f;
    font-family: 'Roboto Condensed';
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    text-decoration: none;
  }

  #lista li a:hover {
    color: #525f7f;
    opacity: 0.6;
    font-weight: 600;
    text-decoration: none;
  }

  #lista li .sub-menu {
    position: absolute;
    left: 100%;
    top: -30px;
    margin-top: 0;
  }

  #lista li .sub-menu h3 {
    color: #525f7f;
    font-family: 'Roboto Condensed';
    font-size: 22px;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    margin-bottom: 30px;
  }

  #lista li .sub-menu li a h4 {
    color: #525f7f;
    font-family: 'Roboto Condensed';
    font-size: 18px;
    line-height: 21px;
    margin: 0 0 5px;
  }

  #lista li .sub-menu li a p {
    opacity: 0.94;
    color: #525f7f;
    font-family: 'Roboto Condensed';
    font-weight: lighter;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }

  #lista li .sub-menu {
    display: none;
  }

  #lista li .open {
    display: block;
  }

  #lista li .sub-menu li a {
    font-weight: 500;
  }

  #lista li .sub-menu li a:hover {
    color: #525f7f;
    opacity: 0.6;
    font-weight: 500;
    text-decoration: none;
  }

  #lista li ul li ul.sub-menu.move {
    transform: translateX(0%) !important;
  }

  span.return-level-1 {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 999;
  }

  #lista {
    overflow: visible;
  }

  .menu_mobile ul {
    transform: translateX(0);
    transition: all 0.3s ease;
  }

  .menu_mobile .move {
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  #lista li#social {
    width: 100%;
    margin-top: 50px;
  }

  #lista {
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    #lista li {
      float: none;
      width: 100%;
    }
    #lista li:last-child {
      border: 0;
    }
    .menu-btn {
      right: 25px;
    }
  }
`
