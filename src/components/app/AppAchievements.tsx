import { Box, Card, CardHeader, styled, Button, alpha } from "@mui/material";
import { Icon } from '@iconify/react'
import tree from '@iconify/icons-emojione/deciduous-tree';
import Slider, { Settings } from "react-slick"

const Slide = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 0)
}))

const AchievementCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  border: '1px solid #e8e8e8',
  backgroundColor: '#ffffff'
}))

const IconWrapperStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(16),
  height: theme.spacing(16),
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`,
  position: 'relative'
}))

const IconColor = styled(IconWrapperStyle)(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  margin: 0
}))

const IconColorWrapper = styled('div')(() => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'hidden'
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
          <Box display='flex' justifyContent='center'>
            <IconWrapperStyle>
              <Icon icon={tree} width={64} height={64} style={{ filter: 'grayscale(1)', opacity: 0.8 }} />
              <IconColorWrapper style={{ height: '69%' }}>
                <IconColor>
                  <Icon icon={tree} width={64} height={64} />
                </IconColor>
              </IconColorWrapper>
            </IconWrapperStyle>
          </Box>
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
  </Box>
}

export default AppAchievements
