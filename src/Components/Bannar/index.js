import { useTheme } from '@mui/material/styles'
import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import {  BannarContainer, BannarContent, BannarDescription, BannarImage, BannarTitle ,   } from '../../Styles/bannar';


export default function Bannar () {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
    <BannarContainer>
        <BannarImage src="/bannar/banner.png"/>
    <BannarContent>
   <Typography variant='h6'>Huge Collection</Typography>
   <BannarTitle variant='h2'>New Bags</BannarTitle>
   <BannarDescription >The muiiconsmatoject yet, install the icons package with The yet, install the icons package with</BannarDescription>
    </BannarContent>

    </BannarContainer>
    </>
  )
}

