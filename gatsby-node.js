/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateWebpackConfig = ({ actions }) => {
    const { setWebpackConfig } = actions
    setWebpackConfig({
        externals: {
            jquery: 'jQuery',
        },
    })
}
// You can delete this file if you're not using it