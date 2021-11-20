import { Box, Card, CardHeader, styled, ToggleButtonGroup } from "@mui/material"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { useQuery } from "react-query";
import { useState } from 'react'
import ToggleButton from "./ToggleButton"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#0197f6',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: '#ec0c0c',
  },
}));

export const AppWaterUsage = () => {
  const [chart, setChart] = useState<'week' | 'month'>('week')

  const { data: monthData } = useQuery('month-temp', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/11/month-temp`)

    const json = await response.json()

    return json
  })

  const { data: weekData } = useQuery('week-temp', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/11/week-temp`)

    const json = await response.json()

    return json
  })

  if (!monthData || !weekData) return null

  return (
    <Card>
      <CardHeader
        title={<>
          Hot & Cold
          <ToggleButtonGroup
            size="small"
            color="primary"
            value={chart}
            exclusive
            onChange={(_, value) => setChart(value ?? chart)}
            sx={{ ml: 'auto', borderRadius: 0 }}
          >
            <ToggleButton value="week">
              Week
            </ToggleButton>
            <ToggleButton value="month">
              Month
            </ToggleButton>
          </ToggleButtonGroup>
        </>}
        titleTypographyProps={{ sx: { display: 'flex', alignItems: 'center' } }}
        subheader="keep up using less hot water!"
      />
      <Box sx={{ p: 3, pb: 3 }} dir="ltr">
        <BorderLinearProgress variant="determinate" value={100 - (chart === 'week' ? weekData.Cold_Percentage : monthData.Cold_Percentage)} />
      </Box>
    </Card>
  )
}

export default AppWaterUsage
