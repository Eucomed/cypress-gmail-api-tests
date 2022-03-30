// Defined common types of response
type OAuth2Response = {
  access_token: string
  expires_in: number
  id_token: string
  scope: string
  token_type: string
}

// Get Access Token request
export function getAccessToken() {
  return cy
    .request({
      method: 'POST',
      url: Cypress.env('tokenUrl'),
      body: {
        grant_type: 'refresh_token',
        client_id: Cypress.env('clientId'),
        client_secret: Cypress.env('clientSecret'),
        refresh_token: Cypress.env('refreshToken')
      }
    })
    .then((response) => {
      // save access token for further request calls
      checkAccessTokenVisible(response)
      Cypress.env('accessToken', response.body.access_token)
      cy.log('The access token is :' + Cypress.env('accessToken'))
    })
}

// Tests for checking response codes and specific data from response
function checkAccessTokenVisible(response: Cypress.Response<OAuth2Response>) {
  expect(response.body.access_token).not.be.empty
  expect(response.body.access_token.length).is.greaterThan(10)
}
