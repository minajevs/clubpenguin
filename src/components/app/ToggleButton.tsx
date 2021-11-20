import { styled, ToggleButton as ToggleButtonRaw } from "@mui/material"

const ToggleButton = styled(ToggleButtonRaw)(({ theme }) => ({
  borderRadius: 0,
  py: 0.5,
  px: 1,
  background: '#5f5f5f',
  color: 'white',
  '&:hover': {
    background: '#ec0c0c',
  },
  '&.Mui-selected': {
    background: '#ec0c0c',
    color: 'white',

    '&:hover': {
      background: '#ec0c0c',
    },
  }
}));

export default ToggleButton
