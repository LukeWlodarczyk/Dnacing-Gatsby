module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Dance",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "dance",
        // Url to query from
        url: "https://api-eu-central-1.graphcms.com/v2/ckiphugznbu4m01yygp15fixy/master",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
  ]
};