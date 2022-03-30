import { checkResponse200, checkResponseTime } from '../../requests/basicSetup/setup'
import { getAccessToken } from '../../requests/specificRequests/getAccessToken'
import { getMessages } from '../../requests/specificRequests/getMessages'

describe('Gmail api - basic test scenarios', () => {
  before(() => {
    getAccessToken()
  })

  it('Check valid authorization for get messages', () => {
    getMessages().then((response) => {
      checkResponse200(response)
      checkResponseTime(response, 5000)
    })
  })
})
