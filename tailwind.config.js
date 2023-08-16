// A17 tailwind plugins
const {
    Setup,
    ApplyColorVariables,
    ColorTokens,
    Components,
    Container,
    DevTools,
    GridGap,
    GridLayout,
    GridLine,
    InteractionMediaQueries,
    Layout,
    Scrollbar,
    Spacing,
    SpacingTokens,
    Typography,
    Underline,
} = require('@area17/a17-tailwind-plugins')

// conf
const feConfig = require('./fe.config.json')
// console

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],

    corePlugins: {
        container: false,
    },
    plugins: [
        Setup,
        ColorTokens,
        Components,
        Container,
        DevTools,
        GridGap,
        GridLayout,
        GridLine,
        InteractionMediaQueries,
        Layout,
        Scrollbar,
        Spacing,
        Typography,
        Underline,
    ],
    theme: {
        screens: feConfig.structure.breakpoints,
        mainColWidths: feConfig.structure.container,
        innerGutters: feConfig.structure.gutters.inner,
        outerGutters: feConfig.structure.gutters.outer,
        columnCount: feConfig.structure.columns,
        fontFamilies: feConfig.typography.families, // https://systemfontstack.com/
        typesets: feConfig.typography.typesets,
        spacingGroupProperties: { h: ['height'] },
        spacingGroups: feConfig.spacing.groups,
        spacing: SpacingTokens(feConfig.spacing.tokens),
        colors: feConfig.color.tokens,
        borderColor: ApplyColorVariables(
            feConfig.color.tokens,
            feConfig.color.border
        ),
        textColor: ApplyColorVariables(
            feConfig.color.tokens,
            feConfig.color.text
        ),
        backgroundColor: ApplyColorVariables(
            feConfig.color.tokens,
            feConfig.color.background
        ),
        underlineColor: ApplyColorVariables(
            feConfig.color.tokens,
            feConfig.color.underline
        ),
        outlineColor: ApplyColorVariables(
            feConfig.color.tokens,
            feConfig.color.outlineColor
        ),
        placeholderColor: ApplyColorVariables(
            feConfig.color.tokens,
            feConfig.color.text
        ),
        zIndex: () => {
            const max = 100
            let values = {
                9999: 9999,
            }

            for (let index = 1; index <= max; index++) {
                values[index] = index
            }

            return values
        },
        components: feConfig.components,
        css: feConfig.css,
        extend: {
            minHeight: ({ theme }) => theme('spacing'),
            minWidth: ({ theme }) => theme('spacing'),
            maxWidth: ({ theme }) => theme('spacing'),
            spacing: {
                gutter: 'var(--inner-gutter)',
                'outer-gutter': 'var(--outer-gutter, 0px)',
            },
        },
    },
}
