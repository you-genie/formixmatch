import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#ede7f6',
            main: '#2196f3',
            dark: '#0069c0',
        },
        secondary: {
            light: '#fff5f8',
            main: '#e53935',
            dark: '#ab000d',
        },
        like: {
            main: '#e53935'
        },
        grad: {
            purple: '#8e24aa',
            red: '#d81b60',
            yellow: '#ff9800'
        },
        warning: {
            main: '#ffc071',
            dark: '#ffb25e',
        },
        error: {
            xLight: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            xLight: green[50],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
        fontFamilySecondary: "'Roboto Condensed', sans-serif",
    },
});

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: rawTheme.typography.fontFamilySecondary,
    textTransform: 'uppercase',
};

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200],
        },
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            letterSpacing: 0,
            fontSize: 60,
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 48,
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 42,
        },
        h4: {
            ...rawTheme.typography.h4,
            fontSize: 26,
            lineHeight: 2,
            fontWeight: rawTheme.typography.fontWeightLight
        },
        h5: {
            ...rawTheme.typography.h5,
            fontSize: 20,
            fontWeight: rawTheme.typography.fontWeightLight,
        },
        h6: {
            ...rawTheme.typography.h6,
            ...fontHeader,
            fontSize: 18,
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
            fontSize: 24
        },
        boldbody: {
            fontWeight: 500,
            fontSize: 18
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 20
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 14,
        },
    },
};
		  
export default theme;