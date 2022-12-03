import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../theme';

export const BannarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}))
export const BannarImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: "400px",
  height: "350px",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px"
  }
}))
export const BannarContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  paddingTop: "30px",
  paddingLeft: "5px",
}))
export const BannarTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',
  }
}))
export const BannarDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}))


