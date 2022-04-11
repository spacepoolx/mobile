import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Poppins-SemiBold',
  //    fontWeight: 'normal',
      fontWeight: '600',
    },
    bold: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Poppins-SemiBold',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: 'normal',
    },
  },
};

export const LightTheme = {
  ...CombinedDefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 2,
  tileModeRadius: 4,
  roundModeRadius: 24,
  colors: {
    ...CombinedDefaultTheme.colors,
    // background: '#ebebeb',
    background: '#f8f8f8',
    border: '#436B34',
    accent: '#c57e49',
    accentLight: 'rgba(197, 126, 73, 0.4)',
    surface: '#f5f5f5',
    onSurface: '#f8f8f8',
    onSurfaceLight: '#fff',
    primary: '#436B34',
    primaryLight: '#69A951',
    primaryDark: '#243F1E',
    accentColor: '#4B4E97',
    // textPrimary: '#fff',
    // textSecondary: '#436B34',
    divider: 'rgba(0, 0, 0, 0.02)',
    selected: 'rgba(0, 0, 0, 0.2)',
    statusBarColor: '#ffffff',
    // statusBarColor: '#243F1E',
    text: '#636363',
    textLight: '#436B34',
    textDark: '#243F1E',
    textGrey: '#8c8c8c',
    drawerText: '#636363',
    textGreyLight: '#8c8c8c',
    // disabled: '#436B34',
    placeholder: '#8c8c8c',
    // backdrop: '#436B34',
    notification: '#436B34',
    leaves: 'rgba(41, 50, 57, 0.05)',
    // borderColor: 'rgba(0,0,0,0.08)',
    // borderColor: '#e0e0e0',
    borderColor: '#f0f0f0',
    dividerColor: '#f0f0f0',
    tabNavigator: '#436B34',
    tabNavigatorText: '#f5f5f5',
    tabNavigatorBackground: '#fff',
    tabNavigatorTopBorderColor: '#e8e8e8',
    jellyBarText: '#424242',
    drawerSelected: '#436B34',
    itemColor: '#fff',
    blue: '#007affff',
    green: '#34c759ff',
    indigo: '#5856d6ff',
    orange: '#ff9500ff',
    pink: '#ff2d55ff',
    purple: '#af52deff',
    red: '#ff3b30ff',
    teal: '#5ac8faff',
    yellow: '#ffcc00ff',
  },
};

export const DarkTheme = {
  ...CombinedDarkTheme,
  fonts: configureFonts(fontConfig),
  roundness: 2,
  tileModeRadius: 4,
  roundModeRadius: 24,
  colors: {
    ...CombinedDarkTheme.colors,
    background: '#121b22',
    // text: '#ffffff',
    text: '#ffffff',
    textLight: '#61914e',
    textDark: '#243F1E',
    textGrey: '#bababa',
    drawerText: '#bababa',
    textGreyLight: '#8c8c8c',
    accentColor: '#f5f5f5',
    surface: '#121b22',
    accent: '#c57e49',
    accentLight: 'rgba(197, 126, 73, 0.4)',
    onSurface: '#121b22',
    onSurfaceLight: '#1f2c34',
    primary: '#69A951',
    primaryLight: '#588746',
    primaryDark: '#243F1E',
    statusBarColor: '#1f2c34',
    leaves: 'rgba(245, 245, 245, 0.07)',
    divider: 'rgba(255, 255, 255, 0.02)',
    selected: 'rgba(255, 255, 255, 0.2)',
    placeholder: '#bababa',
    enabled: 'pink',
    notification: '#f5f5f5',
    borderColor: 'rgba(0,0,0,0.05)',
    tabNavigator: '#436B34',
    tabNavigatorText: '#f5f5f5',
    tabNavigatorBackground: '#1f2c34',
    tabNavigatorTopBorderColor: '#1f2c34',
    jellyBarText: '#f5f5f5',
    drawerSelected: '#61914e',
    itemColor: '#121b22',
    blue: '#0a84ffff',
    green: '#30d158ff',
    indigo: '#5e5ce6ff',
    orange: '#ff9f0aff',
    pink: '#ff375fff',
    purple: '#bf5af2ff',
    red: '#ff453aff',
    teal: '#64d2ffff',
    yellow: '#ffd60aff',
  },
};
