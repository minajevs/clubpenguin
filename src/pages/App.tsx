import { Suspense, useState } from "react"
import { Box, Container, Grid, ToggleButton, ToggleButtonGroup, Typography, Card, CardHeader } from "@mui/material"
import AppWaterUsage from "../components/app/AppWaterUsage"
import AppHotCold from "../components/app/AppHotCold"
import AppChallenges from "../components/app/AppChallenges"
import AppAchievements from "../components/app/AppAchievements"
import AppMonthlySumChart from "../components/app/AppMonthlySumChart"
import AppWeekSumChart from "../components/app/AppWeekSumChart"
import AppMonthSumChart from "../components/app/AppMonthSumChart"

export const App = () => {
  const [chart, setChart] = useState<'week' | 'month'>('week')

  return <>
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 1 }}>
        <Typography variant="h4">Summary</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <ToggleButtonGroup
              color="primary"
              value={chart}
              exclusive
              onChange={(_, value) => setChart(value)}
              sx={{ m: 2 }}
            >
              <ToggleButton value="week">Week</ToggleButton>
              <ToggleButton value="month">Month</ToggleButton>
            </ToggleButtonGroup>
            <Suspense fallback={'TODO'}>
              {chart === 'week' ? (
                <AppWeekSumChart />
              ) : (
                <AppMonthSumChart />
              )}
            </Suspense>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppWaterUsage />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppHotCold />
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 1 }}>
        <Typography variant="h4">Challenges</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppChallenges />
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 1 }}>
        <Typography variant="h4">Achievements</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppAchievements />
        </Grid>
      </Grid>
    </Container>
  </>
}

export default App
