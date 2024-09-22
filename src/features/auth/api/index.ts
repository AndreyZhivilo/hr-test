import { createClientWithCredentials } from '@/shared/api'
import { ACCESS_TOKEN_LOCAL_STORAGE_NAME } from '@/shared/config/client-env-variables'
import { gql } from '@apollo/client'

export const fetchUser = async () => {
  const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME)
  const client = createClientWithCredentials(token)
  const res = await client.query({
    query: gql`
      query {
        myProfile {
          id
          name
          avatar
        }
      }
    `,
  })

  return res
}
