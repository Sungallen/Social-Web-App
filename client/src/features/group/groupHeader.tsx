import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import { ViewState } from 'features/types/group.types'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { groupSlice } from 'features/store/group.slice'

// TODO make this header sticky
export const Header = () => {
  // const [viewState, setViewState] = useState<ViewState>(ViewState.SHOW_EVENTS)
  const dispatch = useAppDispatch()
  const viewState = useAppSelector(state => state.group.viewState)
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          // m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Button>
          <Typography
            variant="h5"
            component="h5"
            mt="2rem"
            mr="2rem"
            onClick={() => {
              dispatch(groupSlice.actions.setViewState(ViewState.SHOW_EVENTS))
            }}
          >
            Events
          </Typography>
        </Button>
        <Button>
          <Typography
            variant="h5"
            component="h5"
            mt="2rem"
            mr="2rem"
            onClick={() => {
              dispatch(groupSlice.actions.setViewState(ViewState.SHOW_GROUPS))
            }}
          >
            Groups
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          // m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography>
          {viewState === ViewState.SHOW_EVENTS ? 'Events' : 'Groups'} near South San Diego, San
          Diego, CA
        </Typography>
      </Box>

      {/* form  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          // m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <FormControl sx={{ mr: 3, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
        <FormControl sx={{ mr: 3, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Any Category</InputLabel>
          <Select
            // value={age}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>
        <Typography>Reset filter</Typography>
      </Box>
    </>
  )
}

export default Header
