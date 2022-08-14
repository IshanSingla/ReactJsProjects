import {
  AppBar,
  Avatar,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import CreatePost from "../Home/CreatePost";
import Drawer from "./Drawer";
import { NavbarStyle } from "../style";

export default function Navbar({ setMode, mode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar style={{ position: "fixed" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Drawer setMode={setMode} mode={mode} />
        <Typography sx={{ position: { xs: "", lg: "absolute" } }}>
          Dectino
        </Typography>
        <InputBase style={NavbarStyle.InputBase} placeholder="search..." />
        <CreatePost />
        <Avatar
          onClick={(e) => setOpen(true)}
          sx={NavbarStyle.Avatar}
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
