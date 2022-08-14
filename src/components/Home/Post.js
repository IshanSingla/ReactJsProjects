import React from "react";
import {
  ExpandMore,
  Share,
  ChatBubbleOutline,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Typography,
  Collapse,
  Paper,
  Grid,
  ButtonGroup,
  Button,
  Box,
  Skeleton,
  Divider,
} from "@mui/material";

export default function Post(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [Comments, setComment] = React.useState(false);
  return (
    <Card
      sx={{
        margin: 0,
        maxWidth: 500,
        marginTop: 2,
        border: 2,
        borderColor: "#85C5",
        borderRadius: 1,
        "&:hover": {
          boxShadow: 10
        }
      }}
    >
      <CardHeader
        avatar={
          props.loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar>{props.userName[0]}</Avatar>
          )
        }
        title={
          props.loading ? (
            <Skeleton animation="wave" style={{ width: "80%", height: 10 }} />
          ) : (
            props.userName
          )
        }
        subheader={
          props.loading ? (
            <Skeleton animation="wave" style={{ width: "50%", height: 10 }} />
          ) : (
            props.postTime
          )
        }
      />
      {props.loading ? (
        <Skeleton animation="wave" style={{ width: "70%", height: 10 }} />
      ) : (
        <Typography
          sx={{ marginLeft: 2, marginBottom: 1 }}
          variant="body2"
          color="text.secondary"
        >
          {props.PostTitle}
        </Typography>
      )}
      <Box height="200px" bgcolor={"#212121"}>
        {props.loading ? (
          <Skeleton animation="wave" height="200px" />
        ) : (
          // eslint-disable-next-line
          <img
            style={{
              marginLeft: "30%",
              borderRadius: 4,
              resizeMode: "contain",
              height: "100%",
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            src={props.image}
          />
        )}
      </Box>
      <CardActions disableSpacing>
        <ButtonGroup
          fullWidth
          variant="text"
          size="small"
          aria-label="large button group"
        >
          <Button key="one" sx={{"&:hover": {
                backgroundColor: "#85C5",
                opacity: [0.9, 0.8, 0.7],
              },}}>
            <Checkbox
              icon={<ThumbUpOffAlt sx={{ color: "primary.main" }} />}
              checkedIcon={<ThumbUp sx={{ color: "primary.main" }} />}
            />
            100
          </Button>
          <Button sx={{"&:hover": {
                backgroundColor: "#85C5",
                opacity: [0.9, 0.8, 0.7],
              },}} onClick={() => setComment(!Comments)} key="two">
            <ChatBubbleOutline />
            13
          </Button>
          <Button sx={{"&:hover": {
                backgroundColor: "#85C5",
                opacity: [0.9, 0.8, 0.7],
              },}} key="three">
            <Share />
          </Button>
        </ButtonGroup>
        <ExpandMore onClick={() => setExpanded(!expanded)} />
      </CardActions>
      <Divider sx={{ color: "primary.main" }} />
      <Collapse in={Comments} timeout="auto" unmountOnExit>
        <Paper style={{ padding: "40px 20px", marginTop: 5 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Avatar alt="Remy Sharp" />
            <Grid justifyContent="left" item xs zeroMinWidth>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula
                laoreet. Suspendisse congue vulputate lobortis. Pellentesque at.
              </p>
            </Grid>
          </Grid>
          <br />
        </Paper>
      </Collapse>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.loading ? (
            <Skeleton
              animation="wave"
              height={210}
              width="100%"
              style={{ marginBottom: 4 }}
            />
          ) : (
            <>
              <Typography
                sx={{
                  marginLeft: 1,
                  marginBottom: 0.7,
                  textDecoration: "underline",
                  fontSize: "17px",
                  color: "primary.main",
                }}
              >
                Description:
              </Typography>
              <Typography
                paragraph
                sx={{
                  marginLeft: 3,
                  color: "text.secondary",
                  fontSize: "13px",
                }}
              >
                {props.description}
              </Typography>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

Post.defaultProps = {
  loading: false,
  userName: "Ishan Singla",
  image:
    "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  postTime: "20 April 2003",
  PostTitle: "hlo",
  description:
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
};
