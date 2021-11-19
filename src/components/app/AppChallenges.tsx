import { Box, Card, CardHeader, styled, Typography, Button, Icon } from "@mui/material";
import Slider, { Settings } from "react-slick"
import { Link as RouterLink } from 'react-router-dom';
//@ts-ignore
import SpotifyPlayer from 'react-spotify-player';


const size = {
  width: '100%',
  height: 80,
};
const view = "coverart"; // or 'list'
const theme = "white"; // or 'black'

const Slide = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 0)
}))

const ChallengeCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  border: 'none',
  backgroundColor: '#ffffff'
}))

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const AppChallenges = () => {
  return <Box sx={{ pb: 6 }} dir="ltr">
    <Slider {...settings}>
      <Slide>
        <ChallengeCard>
          <CardHeader title="🧼 Don't drop it!" subheader="Soap your hands for 20 seconds" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
          <SpotifyPlayer
          uri="spotify:album:64PWtKr0oA7mmKQC3SMDde"
          size={size}
          view={view}
          theme={theme}
          />
          </Box>
        </ChallengeCard>
      </Slide>
      <Slide>
        <ChallengeCard>
          <CardHeader title="🦷🪥 Brush brush brush" subheader="Brush your teeth in one song" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
          <SpotifyPlayer
          uri="spotify:track:3g7TPO02MaNESuHC4jer3R"
          size={size}
          view={view}
          theme={theme}
          />
          </Box>
        </ChallengeCard>
      </Slide>
      <Slide>
        <ChallengeCard>
          <CardHeader title="🚿 I need a shower" subheader="Take a shower in three songs" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
          <SpotifyPlayer
          uri="spotify:album:4htoDDUSJXQzMbqTzFVVux"
          size={size}
          view={view}
          theme={theme}
          />
          </Box>
        </ChallengeCard>
      </Slide>
    </Slider>
    <Button
      variant="contained"
      color='info'
      component={RouterLink}
      to="#"
      sx={{ mt: 4 }}
      fullWidth
      style={{ justifyContent: "flex-start" }}
    >
      🏆 Show completed challenges
    </Button>
  </Box>
}

export default AppChallenges
