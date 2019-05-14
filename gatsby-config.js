module.exports = {
  plugins: [
  					`gatsby-plugin-catch-links`,
			  {
			    resolve: `gatsby-source-filesystem`,
			    options: {
			      path: `${__dirname}/blog`,
			      name: "markdown-pages",
			    },
			  },
			  `gatsby-transformer-remark`,
  `gatsby-plugin-netlify-cms`]
};