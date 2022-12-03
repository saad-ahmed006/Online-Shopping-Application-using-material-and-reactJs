import React from 'react'
import Actions from './Actions'
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from '@mui/icons-material';
import {  ListItemIcon } from '@mui/material';
import { AppbarHeader ,AppbarContainer, } from '../../Styles/appbar';
export default function AppbarMobile({matches}) {
  return (
    <>
    <AppbarContainer>
    <ListItemIcon >
    <MenuIcon/>
  </ListItemIcon>

  <AppbarHeader textAlign={"center"} variant={"h1"}>
      This Bags
      </AppbarHeader>
     
      <ListItemIcon sx={{ display: "flex", justifyContent: "end", alignItems: "center" }} >
      <Search/>
    </ListItemIcon>
    
      </AppbarContainer>
<Actions matches={matches}/>
</>
    )
}
