import React from "react";
import {
  ModeNight,
  Newspaper,
  PeopleAlt,
  Groups,
  Bookmark,
  ContactSupport,
} from "@mui/icons-material";
import {
  ListItemIcon,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  Switch,
  ListItemText,
  ListItemButton,
  Avatar,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerStyle } from "../style";

const men = [
  {
    icon: (
      <Avatar
        sx={{ width: 35, height: 35 }}
        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    ),
    name: "Ishan Singla",
    path: "/Profile",
  },
  {
    icon: <Newspaper />,
    name: "News",
    path: "/news",
  },
  {
    icon: <PeopleAlt />,
    name: "Friends",
    path: "/Friends",
  },
  {
    icon: <Groups />,
    name: "Groups",
    path: "/Groups",
  },
  {
    icon: <Bookmark />,
    name: "Saved",
    path: "/Saved",
  },
  {
    icon: <ContactSupport />,
    name: "Help & Support",
    path: "/ContactSupport",
  },
];
export default function Drawers({ mode, setMode }) {
  const [open1, setOpen1] = React.useState(false);
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen1(true)}
        edge="start"
        sx={DrawerStyle.IconButton}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={DrawerStyle.Drawer}
        variant="persistent"
        anchor="left"
        open={open1}
        onClose={() => setOpen1(false)}
      >
        <List>
          <ListItem>
            <ListItemButton
              style={{ justifyContent: "flex-end" }}
              component="a"
              onClick={() => setOpen1(false)}
            >
              <Typography sx={{ display: { sm: "block" } }}>Dectino</Typography>
              <ChevronLeftIcon onClick={() => setOpen1(false)} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {men.map((text, index) => (
            <>
              <ListItem
                key={text.name}
                disablePadding
                sx={{
                  marginLeft: 3,
                  "&:hover": {
                    marginLeft: 1,
                    backgroundColor: "#85C5",
                    opacity: [1, 0.8, 0.7],
                  },
                }}
              >
                <ListItemButton key={text.name} component="a" href={text.path}>
                  <ListItemIcon key={text.name}>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
              {index === 1 || index === 3 || index === 5 ? <Divider /> : <></>}
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
