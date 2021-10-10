import { graphql, useStaticQuery } from 'gatsby';

/**
 * Hook that queries for SiteMetadata with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

const useSiteMetadata = () => {
  const {
    site: {
      siteMetadata: { author, description, title, siteUrl },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
            siteUrl
          }
        }
      }
    `
  );

  return {
    author,
    description,
    title,
    siteUrl,
  };
};

export default useSiteMetadata;
