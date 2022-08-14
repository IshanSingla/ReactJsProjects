import React from "react";
import { Box } from "@mui/material";
import InfinitScroll from "react-infinite-scroll-component";
import axios from "axios";
import Post from "./Post";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      count: 10,
      start: 1,
    };
    this.fetchNextUsers = this.fetchNextUsers.bind(this);
  }
  componentDidMount() {
    this.fetchNextUsers();
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

  render() {
    return (
      <Box flex={3} >
        <InfinitScroll
          dataLength={this.state.users.length}
          next={this.fetchNextUsers}
          hasMore={true}
          loader={<Post loading={true} />}
        >
          {this.state.users.map((user, _index) => (
            <Post
              userName={user.name.first}
              postTime={user.name.first}
              image={user.picture.medium}
              PostTitle={user.login.uuid}
              description={user.login.uuid}
            />
          ))}
        </InfinitScroll>
      </Box>
    );
  }
}
