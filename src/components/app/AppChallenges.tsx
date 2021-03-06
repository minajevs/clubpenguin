import { Box, Card, CardHeader, styled, Typography, Button, Icon } from "@mui/material";
import { Settings } from "react-slick"
import { Link as RouterLink } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';
import Slider from "../Slider";
//@ts-ignore
import SpotifyPlayer from 'react-spotify-player';


const size = {
  width: '100%',
  height: 80,
};
const view = "coverart"; // or 'list'
const theme = "white"; // or 'black'

const Slide = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 3, 4, 3),
}))

export const AppChallenges = () => {
  return <>
    <Box sx={{ pb: 2, mx: -3, my: -3 }} dir="ltr">
      <Slider>
        <Slide>
          <Card>
            {/* @ts-ignore */}
            <CardActionArea to='/soapchallenge' LinkComponent={RouterLink}>
              <CardHeader title="🧼 Don't drop it!" subheader="Soap your hands for 20 seconds" />
              <Box sx={{ p: 3, pb: 3 }} dir="ltr">
                <SpotifyPlayer
                  uri="spotify:album:64PWtKr0oA7mmKQC3SMDde"
                  size={size}
                  view={view}
                  theme={theme}
                />
              </Box>
            </CardActionArea>
          </Card>
        </Slide>
        <Slide>
          <Card>
            {/* @ts-ignore */}
            <CardActionArea to='/brushchallenge' LinkComponent={RouterLink}>
              <CardHeader title="🦷🪥 Brush brush brush" subheader="Brush your teeth in one song" />
              <Box sx={{ p: 3, pb: 3 }} dir="ltr">
                <SpotifyPlayer
                  uri="spotify:track:3g7TPO02MaNESuHC4jer3R"
                  size={size}
                  view={view}
                  theme={theme}
                />
              </Box>
            </CardActionArea>
          </Card>
        </Slide>
        <Slide>
          <Card>
            {/* @ts-ignore */}
            <CardActionArea to='/showerchallenge' LinkComponent={RouterLink}>
              <CardHeader title="🚿 I need a shower" subheader="Take a shower in three songs" />
              <Box sx={{ p: 3, pb: 3 }} dir="ltr">
                <SpotifyPlayer
                  uri="spotify:album:1pg8XypcyejiasjfBgGEgL"
                  size={size}
                  view={view}
                  theme={theme}
                />
              </Box>
            </CardActionArea>
          </Card>
        </Slide>
      </Slider>
    </Box>
    <Button
      variant="contained"
      color='info'
      component={RouterLink}
      to="/challenges"
      fullWidth
      sx={{
        justifyContent: "flex-start",
        borderRadius: 0,
        background: '#5f5f5f',
        mt: 3,
        display: { xs: 'flex', md: 'none' },
        '&:hover': {
          background: '#ec0c0c'
        }
      }}
    >
      🏆 Show completed challenges
    </Button>
  </>
}

export default AppChallenges
