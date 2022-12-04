import './register.scss'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

export const Register = () => {
  const email = useRef<HTMLInputElement | null>(null)
  const account = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)
  const [age, setAge] = useState('')
  const navigate = useNavigate()
  function onSubmit() {}
  const loginClick = () => {
    navigate('/login')
  }
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
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
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="email" ref={email} />
            <input type="text" placeholder="Username" ref={account} />
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
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
