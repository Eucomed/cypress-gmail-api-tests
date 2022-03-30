import { ENDPOINTS_MAP, sendRequest } from '../basicSetup/setup'

// TYPES - Defined type of response body
type getMessages = {
  messages: [
    {
      id: string
      threadId: string
    }
  ]
  resultSizeEstimate: 1
}

// GET Request - lists the messages in the user's mailbox.
export function getMessages() {
  return sendRequest(ENDPOINTS_MAP.MESSAGES_ENDPOINT)
}

// TESTS - check data from response
export function checkGeneratedMessageId(response: Cypress.Response<getMessages>) {
  expect(response.body.messages[0].id).to.have.length(16)
}

export function checkReturnedResultList(response: Cypress.Response<getMessages>) {
  expect(response.body.messages[0].id).to.have.length(16)
}
