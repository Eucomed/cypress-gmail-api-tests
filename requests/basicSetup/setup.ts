// INPUT DATA
export const ENDPOINTS_MAP = {
  MESSAGES_ENDPOINT: '/messages'
}

//Auxiliary functions - definitions of request call
export function sendRequest(specificEndpoint: string) {
  return cy
    .request({
      method: 'GET',
      url: Cypress.env('baseRequestUrl') + Cypress.env('userName') + specificEndpoint,
      headers: { Authorization: `Bearer ` + Cypress.env('accessToken') }
    })
    .then(function (response) {
      return response
    })
}

// TESTS - for checking specific statuses and data from response
export function checkResponse200(response: Cypress.Response<unknown>) {
  expect(response.status).to.eq(200)
}

export function checkResponseTime(response: Cypress.Response<unknown>, maxResponseTime) {
  expect(response.duration).to.be.lessThan(maxResponseTime)
}
