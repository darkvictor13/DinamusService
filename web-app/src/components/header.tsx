"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Acho que vai uma logo
        </Typography>
        <Box>
          <IconButton edge="end" color="inherit" aria-label="menu">
            Login
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="menu">
            Register
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
