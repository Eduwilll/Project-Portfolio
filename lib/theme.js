import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f5f5f5', '#1a1a1d')(props),
            color: mode('#1a1a1d', '#f5f5f5')(props),
        },
        '::selection': {
            bg: 'teal.500',
            color: 'white',
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 8,
                textDecorationColor: 'teal.500',
                textDecorationThickness: 3,
                marginTop: 3,
                marginBottom: 4,
                letterSpacing: '-0.02em',
            },
            'page-title': {
                letterSpacing: '-0.03em',
                fontWeight: 'bold',
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#319795', '#81E6D9')(props),
            textUnderlineOffset: 3,
            transition: 'all 0.2s ease',
            _hover: {
                textDecoration: 'none',
                color: mode('#2C7A7B', '#B2F5EA')(props),
            }
        })
    },
    Button: {
        baseStyle: {
            fontWeight: 'semibold',
            borderRadius: 'lg',
        }
    },
    Badge: {
        baseStyle: {
            borderRadius: 'md',
            fontWeight: 'medium',
            textTransform: 'none',
        }
    }
}

const fonts = {
    heading: "'Inter', 'M PLUS Rounded 1c', sans-serif",
    body: "'Inter', sans-serif",
}

const colors = {
    grassTeal: '#81E6D9',
    brand: {
        50: '#E6FFFA',
        100: '#B2F5EA',
        200: '#81E6D9',
        300: '#4FD1C5',
        400: '#38B2AC',
        500: '#319795',
        600: '#2C7A7B',
        700: '#285E61',
        800: '#234E52',
        900: '#1D4044',
    }
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
