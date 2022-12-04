import './login.scss'
import { SyntheticEvent, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { userActions, userSlice } from 'features/store/user.slice'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const account = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)
  const { loginStatus } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault()
    dispatch(userActions.loginSaga(account.current?.value, password.current?.value))
  }

  const registerClick = () => {
    navigate('/register')
  }

  useEffect(() => {
    if (loginStatus === 'Login') {
      navigate('/main')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus])

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome SportsClub</h1>
          <p>This is a social web app developed by Allen, Henry and Mr.Xie</p>
          <span>Do you have an account?</span>
          <button onClick={registerClick}>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Username" ref={account} />
            <input type="text" placeholder="Password" ref={password} />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
