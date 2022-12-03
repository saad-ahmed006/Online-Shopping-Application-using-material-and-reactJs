import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import AppbarMobile from './AppbarMobile';
import AppbarDestop from './AppbarDestop';

export default function Appbar() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? <AppbarMobile matches={matches} /> : <AppbarDestop  />}
    </>
  )
}

