import {
  Grid,
  Card,
  Box,
  Typography,
  Avatar,
  CardMedia,
  Icon,
  Divider,
  Tooltip,
  Stack,
  Tab,
  Tabs,
  AppBar,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  Message,
  Settings,
} from "@mui/icons-material";

const profilesListData = [
  {
    image: "https://telegra.ph/file/dff924bcc1144977cb0b5.png",
    name: "Sophie B.",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: "https://telegra.ph/file/dff924bcc1144977cb0b5.png",
    name: "Anne Marie",
    description: "Awesome work, can you..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: "https://telegra.ph/file/dff924bcc1144977cb0b5.png",
    name: "Ivanna",
    description: "About files I can..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: "https://telegra.ph/file/dff924bcc1144977cb0b5.png",
    name: "Peterson",
    description: "Have a great afternoon..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: "https://telegra.ph/file/dff924bcc1144977cb0b5.png",
    name: "Nick Daniel",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
];
export default function Profile() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: 'url("https://telegra.ph/file/8aba7af52c573793f9958.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -9,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src="https://telegra.ph/file/dff924bcc1144977cb0b5.png"
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <Box height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                Alex Thompson
              </Typography>
              <Typography color="text" fontSize="small">
                500 Friend || 500 Connections
              </Typography>
              <Typography color="text" fontSize="small">
                50 Posts
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation="horizontal" sx={{ background: "transparent" }}>
                <Tab label="Message" icon={<Message />} />
                <Tab label="Settings" icon={<Settings />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
      <Stack
        mt={5}
        mb={3}
        sx={{ marginLeft: { xs: 0, lg: 2 }, maxWidth: { xs: 1000, lg: 300 } }}
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Card>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pt={2}
              px={2}
            >
              <Typography variant="h5" textTransform="capitalize">
                profile information
              </Typography>
              <Typography variant="body2" color="secondary">
                <Tooltip title="edit" placement="top">
                  <Icon>edit</Icon>
                </Tooltip>
              </Typography>
            </Box>
            <Box p={2}>
              <Box mb={2} lineHeight={1}>
                <Typography fontSize={13} fontWeight="regular">
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </Typography>
              </Box>
              <Box opacity={0.3}>
                <Divider />
              </Box>
              <Box>
                <Box key="fullName" display="flex" py={1} pr={2}>
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    full name: &nbsp;ishan singla
                  </Typography>
                </Box>
                <Box key="mobile" display="flex" py={1} pr={2}>
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    mobile: &nbsp;+918708504000
                  </Typography>
                </Box>
                <Box key="email" display="flex" py={1} pr={2}>
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    email: &nbsp;ishansingla@ieee.org
                  </Typography>
                </Box>
                <Box key="location" display="flex" py={1} pr={2}>
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    location: &nbsp;India
                  </Typography>
                </Box>
                <Box display="flex" py={1} pr={2}>
                  <Typography variant="button" fontWeight="bold">
                    Social:
                  </Typography>
                  {[
                    {
                      link: "https://www.facebook.com/CreativeTim/",
                      icon: <Facebook />,
                      color: "facebook",
                    },
                    {
                      link: "https://twitter.com/creativetim",
                      icon: <Twitter />,
                      color: "twitter",
                    },
                    {
                      link: "https://www.instagram.com/creativetimofficial/",
                      icon: <Instagram />,
                      color: "instagram",
                    },
                  ].map(({ link, icon }) => (
                    <Box
                      key={icon}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      pr={1}
                      pl={0.5}
                      lineHeight={1}
                    >
                      {icon}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <Box display="flex" pt={2} px={2}>
              <Typography
                variant="h6"
                fontWeight="medium"
                textTransform="capitalize"
              >
                Friends
              </Typography>
            </Box>
            <Box display="flex" p={2}>
              <Box
                component="ul"
                display="flex"
                flexDirection="column"
                p={0}
                m={0}
              >
                {profilesListData.map(({ image, name, description }) => (
                  <Box
                    key={name}
                    component="li"
                    display="flex"
                    alignItems="center"
                    mb={2}
                  >
                    <Box mr={2}>
                      <Avatar
                        src={image}
                        alt="something here"
                        variant="rounded"
                        shadow="md"
                      />
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Typography variant="button" fontWeight="medium">
                        {name}
                      </Typography>
                      <Typography variant="caption" color="text">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
      </Stack>
      <Box mb={3}>
        <Card>
          <Box pt={2} px={2}>
            <Box mb={0.5}>
              <Typography variant="h6" fontWeight="medium">
                Posts
              </Typography>
            </Box>
          </Box>
          <Box p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    overflow: "visible",
                  }}
                >
                  <Box
                    position="relative"
                    width="100.25%"
                    shadow="xl"
                    borderRadius="xl"
                  >
                    <CardMedia
                      src="https://telegra.ph/file/dff924bcc1144977cb0b5.png"
                      component="img"
                      title="modern"
                      sx={{
                        maxWidth: "100%",
                        margin: 0,
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </Box>
                  <Box pt={3} px={0.5}>
                    <Box mb={1}>
                      <Typography variant="h5" textTransform="capitalize">
                        modern
                      </Typography>
                    </Box>
                    <Box mb={3} lineHeight={0}>
                      <Typography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                      >
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
}
