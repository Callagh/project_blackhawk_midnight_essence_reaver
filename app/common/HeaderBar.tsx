'use client';
import Image from "next/image";
import { AppBar, Typography, Toolbar, IconButton } from "@mui/material";
import menuIcon from "../resources/menuIcon.jpeg";
import { theme } from "./theme/theme";

export default function HeaderBar() {
  return (
    <AppBar position="static" color="primary" style={{backgroundColor: theme.palette.primary.main}}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Image src={menuIcon} alt="menu" width={32} height={32} />
        </IconButton>
        <Typography variant="h3" color="inherit" component="div" style={{color: theme.palette.primary.contrastText}}>
          Everyfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}