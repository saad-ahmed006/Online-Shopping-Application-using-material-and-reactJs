import React from 'react'
import { ShoppingCart } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Person } from '@mui/icons-material'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import { MyList, ActionIconsContainerDextop, ActionIconsContainerMobile } from '../../Styles/appbar'
import { Colors } from '../../Styles/theme'

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDextop
  return (
    <Component>
      <MyList type="row">

        <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: matches && Colors.secondary }}>
            <ShoppingCart></ShoppingCart>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem></Divider>
        <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: matches && Colors.secondary }}>
            <Favorite></Favorite>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem></Divider>

        <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: matches && Colors.secondary }}>
            <Person></Person>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem></Divider>

      </MyList>
    </Component>
  )
}

