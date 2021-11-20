import { useState } from "react"
import { Grid, ToggleButtonGroup, Typography, Card, CardHeader, Button } from "@mui/material"
import AppWaterUsage from "../components/app/AppWaterUsage"
import AppHotCold from "../components/app/AppHotCold"
import AppChallenges from "../components/app/AppChallenges"
import AppAchievements from "../components/app/AppAchievements"
import AppWeekSumChart from "../components/app/AppWeekSumChart"
import AppMonthSumChart from "../components/app/AppMonthSumChart"
import ToggleButton from "../components/app/ToggleButton"
import AppPowerUsage from "../components/app/AppPowerUsage"
import { Box } from "@mui/system"
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from "react-query"
import Page from '../components/Page'


export const App = () => {
  const [chart, setChart] = useState<'week' | 'month'>('week')

  const { data: weekData } = useQuery('week', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/11/week`)

    const json = await response.json()

    return json
  })

  const { data: monthData } = useQuery('month', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/0/month`)

    const json = await response.json()

    return json
  })

  return <Page>
    <Grid container spacing={2} justifyContent='center' alignItems='stretch'>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3" gutterBottom>Welcome, Dmitrijs</Typography>
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important' }} />
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
          {chart === 'week' ? weekData ? <AppWeekSumChart data={weekData} /> : null : monthData ? <AppMonthSumChart data={monthData} /> : null}
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important' }} />
      <Grid item xs={12} sm={6} md={3}>
        <AppWaterUsage />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AppPowerUsage />
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important' }} />
      <Grid item xs={12} sm={6}>
        <AppHotCold />
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important', mt: 4 }} />
      <Grid item xs={12} sm={6}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Typography variant="h4">Challenges</Typography>
          <Button
            variant="contained"
            color='info'
            component={RouterLink}
            to="/challenges"
            fullWidth
            sx={{
              justifyContent: "flex-start",
              borderRadius: 0,
              background: '#5f5f5f',
              width: 'auto',
              marginLeft: 'auto',
              display: { xs: 'none', md: 'inline-flex' },
              '&:hover': {
                background: '#ec0c0c'
              }
            }}
          >
            🏆 Show completed challenges
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important' }} />
      <Grid item xs={12} sm={6}>
        <AppChallenges />
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important', mt: 2 }} />
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">Achievements</Typography>
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important' }} />
      <Grid item xs={12} sm={6}>
        <AppAchievements />
      </Grid>
    </Grid>
  </Page>
}

export default App
