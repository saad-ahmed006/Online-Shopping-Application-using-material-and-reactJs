import { Box, List, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
// import List from "@mui/material";
import "@fontsource/montez";
import { Colors } from '../theme'
export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4px",
    padding: "2px 8px"
}))

export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    fontFamily: '"Montez","cursive"',
    fontSize: "4em",
    color: Colors.secondary,
    flexGrow: 1,

}))


export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    // color: "black"

}))
export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`

}))
export const ActionIconsContainerDextop = styled(Box)(() => ({
    flexGrow: 0
}))


