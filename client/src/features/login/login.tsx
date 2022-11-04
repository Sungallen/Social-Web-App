import './login.scss'

export const Login = () => (
  <div className="login">
    <div className="card">
      <div className="left">
        <h1>Welcome Social</h1>
        <p>This is a social web app developed by Allen, Henry and Mr.Xie</p>
        <span>Do you have an account?</span>
        <button>Register</button>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  </div>
)
