import { Box, Card, CardHeader, styled, Typography } from "@mui/material";
import Slider, { Settings } from "react-slick"
import ChallengeWrapper from "./ChallengeWrapper";

const Slide = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1)
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
        <Card>
          <CardHeader title="🔥🧊 Hot & Cold" subheader="keep up using less hot water!" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
            yo
          </Box>
        </Card>
      </Slide>
      <Slide>
        <Card>
          <CardHeader title="🔥🧊 Hot & Cold" subheader="keep up using less hot water!" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
            yo
          </Box>
        </Card>
      </Slide>
      <Slide>
        <Card>
          <CardHeader title="🔥🧊 Hot & Cold" subheader="keep up using less hot water!" />
          <Box sx={{ p: 3, pb: 3 }} dir="ltr">
            yo
          </Box>
        </Card>
      </Slide>

    </Slider>
  </Box>
}

export default AppChallenges
