import { Search } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
// import { ListItemText } from '@mui/material'
import { AppbarContainer, AppbarHeader, MyList,} from '../../Styles/appbar'
import Actions from './Actions'


export default function AppbarDestop(matches) {
  return (
    <AppbarContainer>
      <AppbarHeader>
      This Bags
      </AppbarHeader>
      <MyList type="row">
  <ListItemText primary="Home" />
  <ListItemText primary="Categories" />
  <ListItemText primary="Products" />
  <ListItemText primary="Contact us" />
  <ListItemButton>
    <ListItemIcon >
      <Search/>
    </ListItemIcon>
   </ListItemButton>
      </MyList>
  <Actions />
    </AppbarContainer>
  )
}
