import { Box, Card, CardHeader, styled, ToggleButtonGroup } from "@mui/material"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { useQuery } from "react-query";
import { useState, Suspense } from 'react'
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
        <Suspense fallback='TODO'>
          {chart === 'week' ? (
            <UsageWeek />
          ) : (
            <UsageMonth />
          )}
        </Suspense>
      </Box>
    </Card>
  )
}

const UsageMonth = () => {
  const { data } = useQuery('month-temp', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/11/month-temp`)

    const json = await response.json()

    return json
  })

  if (!data) return null

  return (<BorderLinearProgress variant="determinate" value={100 - data.Cold_Percentage} />)
}

const UsageWeek = () => {
  const { data } = useQuery('week-temp', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/11/week-temp`)

    const json = await response.json()

    return json
  })

  if (!data) return null

  return (<BorderLinearProgress variant="determinate" value={100 - data.Cold_Percentage} />)
}

export default AppWaterUsage