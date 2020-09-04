This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# react-fullscreen-menu

> Simple Fullscreen Menu in React with Css Transition

[![NPM](https://img.shields.io/npm/v/@colpi/react-fullscreen-menu.svg)](https://www.npmjs.com/package/@colpi/react-fullscreen-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![alt text](https://github.com/piero80/react-fullscreen-menu/blob/master/example/public/screen.png)

## Install

```bash
npm install --save @colpi/react-fullscreen-menu
npm install --save styled-components
```

## Usage

```jsx
import React, { Component } from 'react'
import { FullscreenMenu } from '@colpi/react-fullscreen-menu'
import '@colpi/react-fullscreen-menu/dist/index.css'

function Example {

  export const dataMenu = [
  {
    label: 'Chi siamo',
    url: 'chi-siamo',
    sub_title: null,
    sub_menu: null
  },
  {
    label: 'Soluzioni',
    url: '#',
    sub_title: null,
    sub_menu: [
      {
        label: 'Video',
        sub_title: 'Gestisci i tuoi video',
        url: '/soluzioni/video',
        sub_menu: null
      },
      {
        label: 'Immagini',
        sub_title: 'Gestisci le tue immagini',
        url: '/soluzioni/immagini',
        sub_menu: null
      },
      {
        label: 'Gallerie',
        sub_title: 'Gestisci le tue gallerie',
        url: '/soluzioni/gallerie',
        sub_menu: null
      },
      {
        label: 'Siti-web',
        sub_title: 'Crea i tuoi siti web',
        url: '/soluzioni/gallerie',
        sub_menu: null
      },
      {
        label: 'Applicazioni',
        sub_title: 'Applicazioni',
        url: '/soluzioni/applicazioni',
        sub: null
      }
    ]
  },
  {
    label: 'Servizi',
    url: '#',
    sub_title: null,
    sub_menu: [
      {
        label: 'Comunicazione',
        sub_title: 'Lorem ipsum dolor sit amet dor',
        url: '/servizi/comunicazione',
        sub_menu: null
      },
      {
        label: 'Fruizione',
        sub_title: 'Lorem ipsum dolor sit amet dor',
        url: '/servizi/fruizione',
        sub_menu: null
      },
      {
        label: 'Formazione e consulenza',
        sub_title: 'Lorem ipsum dolor sit amet dor',
        url: '/servizi/formazione-e-consulenza',
        sub_menu: null
      }
    ]
  },
  {
    label: 'I nostri clienti',
    url: '#',
    sub_title: null,
    sub_menu: null
  },
  {
    label: 'Lavora con noi',
    url: 'lavora-con-noi',
    sub_title: null,
    sub_menu: null
  },
  {
    label: 'Contatti',
    url: 'contatti',
    sub_title: null,
    sub_menu: null
  }
]

  render() {
    return <FullscreenMenu data={dataMenu} position="left" colorIcon="black"/>
  }
}
```

## Props

**data: Array** (required) <br />
**position: string** (required) <br />
**colorIcon: string** (required)

## License

(MIT) © [piero80/react-fullscreen-menu](https://github.com/piero80/react-fullscreen-menu)
