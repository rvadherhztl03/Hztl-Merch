import { Users, RequiredDeep, Tokens, User } from 'ordercloud-javascript-sdk'
import { retrieveOrder, transferAnonOrder } from '../ocCurrentOrder'
import { createOcAsyncThunk } from '../ocReduxHelpers'
// import { useCookies } from 'react-cookie'
// import { cookies } from 'next/headers'
// import parseJwt from '../../utils/parseJwt'

export interface RegistrationActionRequest {
  firstName: string
  lastName: string
  email: string
  username: string
  phone: string
  password: string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const registrationUser = createOcAsyncThunk<
  RequiredDeep<User<RegistrationActionRequest>>,
  RegistrationActionRequest
>('ocAuth/registration', async (credentials, thunkAPI) => {
  const { ocConfig } = thunkAPI.getState()
  if (!ocConfig.value) {
    throw new Error('OrderCloud Provider was not properly configured')
  }

  //   const [cookies, setCookie] = useCookies(['portal.access-token', 'storeDetails'])
  // set the transfer token if the anonymous user has an in progress order
  let transferToken
  const initialAccessToken = Tokens.GetRefreshToken()
  //   const cookieStore = cookies()
  //   transferToken =initialAccessToken)

  console.log('@@token:', document.cookie)
  const response = await Users.Create(
    'NORMAL_BUYER_ORG',
    {
      FirstName: credentials.firstName,
      LastName: credentials.lastName,
      Email: credentials.email,
      Active: true,
      Username: credentials.username,
      Password: credentials.password,
      Phone: credentials.phone,
    },
    {
      accessToken: initialAccessToken,
    }
  )

  // transfer the order if a transfer token was set
  if (transferToken) {
    thunkAPI.dispatch(transferAnonOrder(transferToken))
  } else {
    thunkAPI.dispatch(retrieveOrder())
  }
  return response
})

export default registrationUser
