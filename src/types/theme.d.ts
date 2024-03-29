import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    colors: Colors
    fonts: Fonts
    fontWt: FontWt
  }
}

interface Colors {
  green: string
  lightGreen: string
  red: string
  navy: string
  white: string
  black: string
}

interface Fonts {
  txtBasic: string
  pixel: string
  VDL: string
}

interface FontWt {
  Regular: number
  Medium: number
  Bold: number
}
