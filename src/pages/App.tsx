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
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" gutterBottom>Welcome, Dmitrijs</Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader
              title={<>
                Some Stats
                <ToggleButtonGroup
                  size="small"
                  color="primary"
                  value={chart}
                  exclusive
                  onChange={(_, value) => setChart(value)}
                  sx={{ ml: 'auto' }}
                >
                  <ToggleButton value="week">Week</ToggleButton>
                  <ToggleButton value="month">Month</ToggleButton>
                </ToggleButtonGroup>
              </>}
              titleTypographyProps={{ sx: { display: 'flex', alignItems: 'center' } }}
            />
            <Suspense fallback={'TODO'}>
              {chart === 'week' ? (
                <AppWeekSumChart />
              ) : (
                <AppMonthSumChart />
              )}
            </Suspense>
          </Card>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={6} md={3}>
          <AppWaterUsage />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppHotCold />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Challenges</Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={6}>
          <AppChallenges />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Achievements</Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={6}>
          <AppAchievements />
        </Grid>
      </Grid>
    </Container>
  </>
}

export default App
