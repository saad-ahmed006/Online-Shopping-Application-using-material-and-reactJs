import { Box, Typography, } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../theme';

export const PromotionContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "20px 0px 20px 0px",
    backgroundColor: Colors.secondary,
    [theme.breakpoints.down('md')]: {
        padding: "40px 0px 40px 0px",
    }
}))
export const PromotionText = styled(Box)(({ theme }) => ({
    color:"white",
    fontSize:"3rem",
    fontFamily:"'Montez' ,'cursive' ",
    [theme.breakpoints.down('md')]: {
        fontSize:"1.5rem",
    }
}))