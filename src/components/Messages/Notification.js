import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Avatar,
  Skeleton,
} from "@mui/material";

import React, { Component } from "react";
import axios from "axios";
import InfinitScroll from "react-infinite-scroll-component";
import { Box } from "@mui/system";

export default class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      count: 10,
      start: 1,
      msg: "",
    };
    this.fetchNextUsers = this.fetchNextUsers.bind(this);
  }

  componentDidMount() {
    this.fetchNextUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      this.setState({
        users: this.state.users,
      });
    }
  }

  fetchNextUsers() {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + this.state.count });
    axios
      .get(`https://randomuser.me/api/?results=${count}&start=${start}`)
      .then((response) => {
        this.setState({
          users: this.state.users.concat(response.data.results),
        });
      });
  }
  // <li></li>
  render() {
    return (
      <>
        <Typography  variant="h5">Notification</Typography>

        <Box
          style={{ overflow: "auto" }}
          width={300}
          height={600}
          flex={2}
          p={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Paper square>
            <ListSubheader sx={{ bgcolor: "background.paper" }}>
              Today
            </ListSubheader>

            <List
              style={{ maxHeight: "100%", overflow: "auto" }}
              sx={{ mb: 2 }}
            >
              <InfinitScroll
                dataLength={this.state.users.length}
                next={this.fetchNextUsers}
                hasMore={true}
                loader={
                  <ListItem button>
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
                          height={40}
                          width="80%"
                          style={{ marginBottom: 6 }}
                        />
                      }
                    />
                  </ListItem>
                }
              >
                {this.state.users.map((user, index) => (
                  <div key={index}>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar
                          alt={user.name.first}
                          src={user.picture.medium}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.name.first}
                        secondary={user.login.uuid}
                      />
                    </ListItem>
                  </div>
                ))}
              </InfinitScroll>
            </List>
          </Paper>
        </Box>
      </>
    );
  }
}
