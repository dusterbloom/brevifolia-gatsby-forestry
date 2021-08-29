import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              email
              github_handle
              twitter_handle
              ethereum_address
            }
            cta
            description
            background_color
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
