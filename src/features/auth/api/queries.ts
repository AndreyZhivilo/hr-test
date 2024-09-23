// import { gql } from '@apollo/client'
import { gql } from '@/shared/api/__generated__/gql'

export const GET_MY_PROFILE = gql(`
  query GetMyProfile {
    myProfile {
      id
      name
      avatar
    }
  }
`)

export const LOGIN = gql(`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`)

export const REFRESH = gql(`
  mutation Refresh($token: String!) {
    refreshToken(refreshToken: $token) {
      access_token
      refresh_token
    }
  }
`)
