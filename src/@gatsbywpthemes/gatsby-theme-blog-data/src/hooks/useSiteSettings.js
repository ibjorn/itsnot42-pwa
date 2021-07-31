import { useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'

export const useSiteSettings = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          dateFormat
          title
          description
          language
          url
          timezone
        }
      }
    }
  `)

  /* the language is returned in underscore format , we fix it here */

  data.wp.generalSettings.language =
    data.wp.generalSettings.language.replace('_', '-') || 'en-US'
  data.wp.generalSettings.title = parse(data.wp.generalSettings.title)
  return data.wp.generalSettings
}
