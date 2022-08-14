import React from "react";
import Feeds from "./Feed";

import Notification from "./Notification";

import {
  Newspaper,
  PeopleAlt,
  Bookmark,
  Groups,
  ContactSupport,
} from "@mui/icons-material";
import {
  Box,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Stack,
  Avatar,
} from "@mui/material";
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

export default function Homee() {
  return (
    <Stack direction="row">
      <Box flex={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <Box position="fixed" width={300}>
          <List >
            {men.map((text, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  marginLeft:3,
                  
                  "&:hover": {
                    boxShadow: 10,
                    marginLeft:1,
                    backgroundColor: "#85C5",
                    opacity: [0.5, 0.8, 0.7],
                  },
                }}
              >
                <ListItemButton  component="a" href={text.path}>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Feeds />
      <Box flex={1.6} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <Notification />
        </Box>
      </Box>
    </Stack>
  );
}
