/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
    transparent: 'rgba(0,0,0,0)',
    black: '#000',
    background: '#151515',
    white: '#fff',
    additional: '#C2C2C2',
    placeholder: '#8F8F8F',
    field: '#282828',
    text: '#212529',
    modals: '#1F1F1F',
    bottomModals: '#303030',
    topIcons: '#303030',
    option: '#303030',
    secondary: '#0F0F0F',
    dark: '#0F0F0F',
    blue: '#23D2C6',
    iconBlue: '#21D5C5',
    primary: '#E14032',
    success: '#28a745',
    error: '#FF0000',
    disabled: '#7C7C7C',

}

export const NavigationColors = {
    primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
    small: 16,
    regular: 20,
    large: 40,
    text12: {
        size: 12,
        lineHeight: 18,
    },
    text14: {
        size: 14,
        lineHeight: 21,
    },
    text16: {
        size: 16,
        lineHeight: 24,
    },
    text20: {
        size: 20,
        lineHeight: 24,
    },
    text24: {
        size: 24,
        lineHeight: 36,
    },
    text42: {
        size: 42,
        lineHeight: 63
    }
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
const x0 = 0 // 4
const x4 = 4 // 4
const x8 = x4 * 2 // 8
const x12 = x4 * 3 // 12
const x16 = x4 * 4 // 16
const x20 = x4 * 5 // 20
const x24 = x4 * 6 // 24
const x28 = x4 * 7 // 28
const x32 = x4 * 8 // 32
const x36 = x4 * 9 // 36
const x40 = x4 * 10 // 40
const x44 = x4 * 11 // 44
const x48 = x4 * 12 // 48
const x52 = x4 * 13 // 52
const x56 = x4 * 14 // 56
const x64 = x4 * 16 // 64
const x80 = x4 * 20 // 80
export const MetricsSizes = {
    tiny,
    small,
    regular,
    large,
    x0,
    x4,
    x8,
    x12,
    x16,
    x20,
    x24,
    x28,
    x32,
    x36,
    x40,
    x44,
    x48,
    x52,
    x56,
    x64,
    x80,
}

export default {
    Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
}
