const query = `{
    blogPostCollection {
        items {
          sys {
            firstPublishedAt
          }
          title
          postDate
          postImage {
            url
            title
            width
            height
            description
          }
          postContent {
            json
          }
        }
      }
}`

const fetchOptions = {
    spaceID: "148g7oiyn2rx",
    accessToken: "7Wm2MhGf6DKTR8D_eoirHBBYIcSFJHFyI7vNj2gPh-Y",
    endpoint: "https://graphql.contentful.com/content/v1/spaces/148g7oiyn2rx",
    method: "POST",
    headers: {
      Authorization: "Bearer 7Wm2MhGf6DKTR8D_eoirHBBYIcSFJHFyI7vNj2gPh-Y",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }
  
  // Let's fetch the data - check out the browser console!
  fetch(endpoint, fetchOptions)
    .then(response => response.json())
    .then(data => console.log(data));
