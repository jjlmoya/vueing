module.exports = {
    ignoreFiles: ['**/*.js', 'dist/**/*.css', '.github', '_old'],
    plugins: [
        'stylelint-scss'
    ],
    rules: {
        indentation: [2, { baseIndentLevel: 1 }],
        'length-zero-no-unit': [true, {
            ignore: ['custom-properties']
        }]
    }
}
