const contentful = require('contentful')

const client = contentful.createClient({
  space: '148g7oiyn2rx',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '7Wm2MhGf6DKTR8D_eoirHBBYIcSFJHFyI7vNj2gPh-Y'
})

/* client.getEntry('27QbEWOelZll6pMFy5wpBv')
    .then((entry) => console.log(entry))
    .catch(console.error) */

    client.sync({
        initial: true,
        type: 'Entry',
        content_type: 'blogPost'
      })
      .then((response) => console.log({
        entries: response.entries,
        assets: response.assets,
        nextSyncToken: response.nextSyncToken
      }))
      .catch(console.error)