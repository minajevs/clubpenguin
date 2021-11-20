import { Box, Card, CardActionArea, styled, Button, alpha, Typography, Grid } from "@mui/material";
import { Settings } from "react-slick"
import { ProgressIcon } from "./ProgressIcon";
import tree from '@iconify/icons-emojione/deciduous-tree'
import car from '@iconify/icons-emojione/oncoming-automobile'
import book from '@iconify/icons-emojione/books'
import sample from 'lodash/sample'
import { Link as RouterLink } from 'react-router-dom'
import Slider from "../Slider";

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

export const TREE_FACTS = [
  'It takes about 100 gallons of water to grow and process a single pound of cotton, and the average American goes through about 35 pounds of new cotton material each year.',
  'If you water your grass and trees more heavily, but less often, this saves water and builds stronger roots.',
  'It takes 3.3 acre feet of water to grow enough food for an average family for a year.',
  'Taking a shower is more water-efficient than taking a bath. You’ll use about 40 gallons of water taking a bath, compared to 20 gallons if you take a shower.',
  'By 2025, the world will have about 1 billion additional mouths to feed, and the agricultural sector alone will need an additional 1 trillion cubic meters of water annually. This is equivalent to the annual flow of 20 Nile Rivers.'
]

export const CAR_FACTS = [
  'About 25% of the energy used in your home goes toward heating your water.',
  'By choosing a high efficiency water heater (instead of a standard water heater), you can cut your energy use by 10-50 percent.',
  'Washing your vehicle at home can use up to 148 gallons of water or more for one washing. Self-service car washes use roughly 12 gallons per vehicle in desert regions.'
]

export const TIME_FACTS = [
  'The average 5-minute shower takes 15-25 gallons of water--around 40 gallons are used in 10 minutes.',
]

export const AppAchievements = () => {
  return (
    <Box sx={{ pb: 2, mx: -3, my: -3 }} dir="ltr">
      <Slider>
        <Slide>
          <Card>
            {/* @ts-ignore */}
            <CardActionArea to="/achievements/tree" LinkComponent={RouterLink}>
              <Box sx={{ p: 1 }} display='flex' alignItems='center' flexDirection='column'>
                <ProgressIcon icon={tree} progress={50} count={11} />
                <Typography variant="body1" gutterBottom>
                  20/40 liters of water saved to grow a tree
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.72 }}>
                  🤓 <strong>Did you know?</strong> {sample(TREE_FACTS)}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Slide>
        <Slide>
          <Card>
            {/* @ts-ignore */}
            <CardActionArea to="/achievements/car" LinkComponent={RouterLink}>
              <Box sx={{ p: 1 }} display='flex' alignItems='center' flexDirection='column'>
                <ProgressIcon icon={car} progress={66} iconMargin='0 0 20px 0' count={1337} />
                <Typography variant="body1" gutterBottom>
                  3.63/5.5 kWh of Citroën Ami charged
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.72 }}>
                  🤓 <strong>Did you know?</strong> {sample(CAR_FACTS)}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Slide>
        <Slide>
          <Card>
            {/* @ts-ignore */}
            <CardActionArea to="/achievements/book" LinkComponent={RouterLink}>
              <Box sx={{ p: 1 }} display='flex' alignItems='center' flexDirection='column'>
                <ProgressIcon icon={book} progress={70} count={23} />
                <Typography variant="body1" gutterBottom>
                  4.2/6 hours saved to read a book
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.72 }}>
                  🤓 <strong>Did you know?</strong> {sample(TIME_FACTS)}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Slide>
      </Slider>
    </Box >
  )
}

export default AppAchievements
