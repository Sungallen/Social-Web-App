import './register.scss'
import { SyntheticEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useAppDispatch } from 'store/hooks'
import { userActions } from 'features/store/user.slice'

export const Register = () => {
  const email = useRef<HTMLInputElement | null>(null)
  const account = useRef<HTMLInputElement | null>(null)
  const username = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)
  const [age, setAge] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const loginClick = () => {
    navigate('/login')
  }
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  const onRegister = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(account.current?.value)
    dispatch(
      userActions.registerSaga(
        email.current?.value,
        account.current?.value,
        username.current?.value,
        password.current?.value,
        new Date(),
        Number(age),
      ),
    )
    navigate('/login')
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Welcome SportsClub</h1>
          <p>Please fill the signup form to become our members</p>
          <span>Already registered</span>
          <button onClick={loginClick}>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={onRegister}>
            <input type="text" placeholder="Email" ref={email} />
            <input type="text" placeholder="Username" ref={username} />
            <input type="text" placeholder="Account" ref={account} />
            <input type="text" placeholder="Password" ref={password} />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
                <MenuItem value={3}>Non-binary</MenuItem>
              </Select>
            </FormControl>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
