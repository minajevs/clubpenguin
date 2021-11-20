import { Box, Card, CardHeader, styled, Button, alpha, Typography, Grid } from "@mui/material";
import Slider, { Settings } from "react-slick"
import { ProgressIcon } from "./ProgressIcon";

const Slide = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 0)
}))

const AchievementCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  border: '1px solid #e8e8e8',
  backgroundColor: '#ffffff'
}))

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

// const AchievementIcon = () => (

// )

export const AppAchievements = () => {
  return <Box sx={{ pb: 6 }} dir="ltr">
    <Slider {...settings}>
      <Slide>
        <AchievementCard>
          <Grid container spacing={0} direction='column' alignItems='center' sx={{ pb: 3 }}>
            <Box display='flex' alignItems='center' flexDirection='column'>
              <ProgressIcon progress={50} />
            </Box>
            <Typography variant="body1" sx={{ opacity: 0.72 }}>
              20 out of 40 liters of water saved
            </Typography>
          </Grid>
        </AchievementCard>
      </Slide>
      <Slide>
        <AchievementCard>
          <CardHeader title="🦷🪥 Brush brush brush" subheader="Brush your teeth in one song" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
            yo
          </Box>
        </AchievementCard>
      </Slide>
      <Slide>
        <AchievementCard>
          <CardHeader title="🚿 I need a shower" subheader="Take a shower in three songs" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
            yo
          </Box>
        </AchievementCard>
      </Slide>
    </Slider>
  </Box >
}

export default AppAchievements
