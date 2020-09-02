import styled from 'styled-components'

export const StyledIcon = styled.div`
  .menu-btn {
    cursor: pointer;
  }
  .navbar-menu {
    position: fixed;
    top: 36px;
    ${({ position }) =>
      position == 'left' &&
      `
    left: 36px;
  `}
    ${({ position }) =>
      position == 'right' &&
      `
    right: 36px;
  `}
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`
