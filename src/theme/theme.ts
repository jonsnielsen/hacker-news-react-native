
import { DefaultTheme, DarkTheme } from 'react-native-paper'

export const lightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: '#1ba1f2' }
}
export const darkTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, primary: '#1ba1f2' }
}