import './login.scss'
import { SyntheticEvent, useRef } from 'react'

export const Login = () => {
  const account = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)
  function onSubmit(e: SyntheticEvent) {
    e.preventDefault()
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome SportsClub</h1>
          <p>This is a social web app developed by Allen, Henry and Mr.Xie</p>
          <span>Do you have an account?</span>
          <button>Register</button>
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
