import { Box, Card, CardHeader, styled, Button, alpha, Typography, Grid } from "@mui/material";
import Slider, { Settings } from "react-slick"
import { ProgressIcon } from "./ProgressIcon";
import tree from '@iconify/icons-emojione/deciduous-tree'
import car from '@iconify/icons-emojione/oncoming-automobile'
import book from '@iconify/icons-emojione/books'


const Slide = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 0)
}))

const AchievementCard = styled(Card)(({ theme }) => ({
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

// const AchievementIcon = () => (

// )

export const AppAchievements = () => {
  return <Card>
    <Box sx={{ pb: 6 }} dir="ltr">
      <Slider {...settings}>
        <Slide>
          <AchievementCard>
            <Grid container spacing={0} direction='column' alignItems='center' sx={{ pb: 3 }}>
              <Box display='flex' alignItems='center' flexDirection='column'>
                <ProgressIcon icon={tree} progress={50} count={11} />
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.72 }}>
                20/40 liters of water saved to grow a tree
              </Typography>
            </Grid>
          </AchievementCard>
        </Slide>
        <Slide>
          <AchievementCard>
            <Grid container spacing={0} direction='column' alignItems='center' sx={{ pb: 3 }}>
              <Box display='flex' alignItems='center' flexDirection='column'>
                <ProgressIcon icon={car} progress={66} iconMargin='0 0 20px 0' count={1337} />
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.72 }}>
                3.63/5.5 kWh of Citroën Ami charged
              </Typography>
            </Grid>
          </AchievementCard>
        </Slide>
        <Slide>
          <AchievementCard>
            <Grid container spacing={0} direction='column' alignItems='center' sx={{ pb: 3 }}>
              <Box display='flex' alignItems='center' flexDirection='column'>
                <ProgressIcon icon={book} progress={70} count={23} />
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.72 }}>
                4.2/6 hours saved to read a book
              </Typography>
            </Grid>
          </AchievementCard>
        </Slide>
      </Slider>
    </Box >
  </Card>
}

export default AppAchievements
