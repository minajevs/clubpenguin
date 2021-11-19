import { Box, Container, Grid, Typography } from "@mui/material"
import AppWaterUsage from "../components/app/AppWaterUsage"
import AppHotCold from "../components/app/AppHotCold"
import AppWeeklySales from "../components/_dashboard/app/AppWeeklySales.js"

export const App = () => {
  return <>
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 1 }}>
        <Typography variant="h4">Summary</Typography>
      </Box>
      <Grid container spacing={2}>
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
          <AppWeeklySales />
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Achievements</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWeeklySales />
        </Grid>
      </Grid>
    </Container>
  </>
}

export default App