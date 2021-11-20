import { Box, Card, styled, Button, alpha, Typography, Grid } from "@mui/material";
import Slider, { Settings } from "react-slick"
import { ProgressIcon } from "./ProgressIcon";
import tree from '@iconify/icons-emojione/deciduous-tree'
import car from '@iconify/icons-emojione/oncoming-automobile'
import book from '@iconify/icons-emojione/books'

const Slide = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 3, 4, 3),
}))

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

export const AppAchievements = () => {
  return (
    <Box sx={{ pb: 6, mx: -3, my: -3 }} dir="ltr">
      <Slider {...settings}>
        <Slide>
          <Card>
            <Box sx={{ p: 1 }} display='flex' alignItems='center' flexDirection='column'>
              <ProgressIcon icon={tree} progress={50} count={11} />
              <Typography variant="body1" sx={{ opacity: 0.72 }}>
                20/40 liters of water saved to grow a tree
              </Typography>
            </Box>
          </Card>
        </Slide>
        <Slide>
          <Card>
            <Box sx={{ p: 1 }} display='flex' alignItems='center' flexDirection='column'>
              <ProgressIcon icon={car} progress={66} iconMargin='0 0 20px 0' count={1337} />
              <Typography variant="body1" sx={{ opacity: 0.72 }}>
                3.63/5.5 kWh of Citroën Ami charged
              </Typography>
            </Box>
          </Card>
        </Slide>
        <Slide>
          <Card>
            <Box sx={{ p: 1 }} display='flex' alignItems='center' flexDirection='column'>
              <ProgressIcon icon={book} progress={70} count={23} />
              <Typography variant="body1" sx={{ opacity: 0.72 }}>
                4.2/6 hours saved to read a book
              </Typography>
            </Box>
          </Card>
        </Slide>
      </Slider>
    </Box >
  )
}

export default AppAchievements
