import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

/* sobbrescrevendo a tipagem  */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
