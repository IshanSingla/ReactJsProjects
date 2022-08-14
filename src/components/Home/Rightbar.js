import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Rightbar = () => {
  const [img, imgLoading] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    axios
      .get(`https://randomuser.me/api/?results=7&start=1`)
      .then((response) => {
        imgLoading(response.data.results);
        console.log(response.data.results);
      });

    setLoading(false);
  }, [2000]);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", lg: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          {loading ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7].map(() => (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              ))}
            </>
          ) : (
            <>
              {img.map((user, index) => (
                  <Avatar alt={user.name.first} src={user.picture.medium} />
              ))}
            </>
          )}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {loading ? (
            <>
              {[1, 2, 3, 4, 5].map((user, index) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Skeleton
                          animation="wave"
                          height={10}
                          width="80%"
                          style={{ marginBottom: 6 }}
                        />
                      }
                      secondary={
                        <Skeleton
                          animation="wave"
                          height={10}
                          width="80%"
                          style={{ marginBottom: 6 }}
                        />
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </>
          ) : (
            <>
              {img.map((user, index) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={user.name.first} src={user.picture.medium} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name.first}
                      secondary={user.name.first}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
