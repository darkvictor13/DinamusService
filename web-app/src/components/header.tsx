"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandMore } from "@mui/icons-material";
import useCurrentMinistry from "@/hooks/useCurrentMinistry";

interface HeaderPages {
  route: string;
  name: string;
}

// TODO
const HEADER_PAGES: HeaderPages[] = [
  { route: "/", name: "Home" },
  { route: "/ministry", name: "Ministério" },
  { route: "/scales", name: "Escalas" },
  { route: "/services", name: "Serviços" },
];

export default function Header() {
  const { ministries, selectedMinistry, setSelectedMinistry } =
    useCurrentMinistry();

  const [ministriesMenuAnchor, setMinistriesMenuAnchor] =
    useState<null | HTMLElement>(null);

  // TODO: use api Ministry
  const handleSelectMinistry = (ministry: any) => {
    setSelectedMinistry(ministry);
    setMinistriesMenuAnchor(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ gap: 1 }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button
          endIcon={<ExpandMore />}
          color="inherit"
          onClick={(e) => setMinistriesMenuAnchor(e.currentTarget)}
        >
          {selectedMinistry ? selectedMinistry.name : "Selecione um ministério"}
        </Button>
        <Menu
          open={Boolean(ministriesMenuAnchor)}
          anchorEl={ministriesMenuAnchor}
          onClose={() => setMinistriesMenuAnchor(null)}
        >
          {ministries.map((ministry) => (
            <MenuItem
              key={ministry.id}
              onClick={() => handleSelectMinistry(ministry)}
            >
              {ministry.name}
            </MenuItem>
          ))}
          <MenuItem key="nenhum" onClick={() => handleSelectMinistry(null)}>
            Nenhum
          </MenuItem>
        </Menu>
        <Box>
          {HEADER_PAGES.map((page) => (
            <Button key={page.route} color="inherit" href={page.route}>
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
