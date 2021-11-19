import { Box, Card, CardHeader, styled } from "@mui/material"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#1a90ff',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundColor: '#ec4c4c',
  },
}));

export const AppWaterUsage = () => {
  return (
    <Card>
      <CardHeader title="🔥🧊 Hot & Cold" subheader="keep up using less hot water!" />
      <Box sx={{ p: 3, pb: 3 }} dir="ltr">
        <BorderLinearProgress variant="determinate" value={33} />
      </Box>
    </Card>
  )
}

export default AppWaterUsage
