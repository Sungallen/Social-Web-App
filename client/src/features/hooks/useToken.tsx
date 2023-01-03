import { userSlice } from 'features/store/user.slice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'store/hooks'

const DEV_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBbGxlbiIsImdlbmRlciI6MSwiY3JlYXRlZF90aW1lIjoiMjAyMi0xMC0xMFQxNjowMDowMS4wMDBaIiwiYWNjb3VudCI6IkFsbGVuMTAxNyIsInBhc3N3b3JkIjoiMTIzNDU2IiwiZW1haWwiOiJzdW5nYWxsZW5AMTIzIiwiaWF0IjoxNjcyNzIzMTY4LCJleHAiOjE2NzI3MjY3Njh9.oOPJSTRehfhqSJ4Prv5_vI4FOh1An3AP36ecMKdC9U0'

export const useDevToken = () => {
  const [devToken, setDevToken] = useState<string>('')
  const { token } = useAppSelector(state => state.user)

  useEffect(() => {
    if (token) {
      return
    }
    if (token === '') {
      setDevToken(DEV_TOKEN)
    }
  }, [])

  return devToken
}
