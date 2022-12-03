import React from 'react'
import { ShoppingCart } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Person } from '@mui/icons-material'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import { MyList, ActionIconsContainerDextop, ActionIconsContainerMobile } from '../../Styles/appbar'

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDextop
  return (
    <Component>
      <MyList type="row">

        <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ShoppingCart></ShoppingCart>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem></Divider>
        <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Favorite></Favorite>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem></Divider>

        <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Person></Person>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem></Divider>

      </MyList>
    </Component>
  )
}

