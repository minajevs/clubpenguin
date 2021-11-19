import { Box, Container, Grid, Typography } from "@mui/material"
import Page from "../components/Page.js"
import AppWeeklySales from "../components/_dashboard/app/AppWeeklySales.js"

export const App = () => {
  return <>
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi, Welcome back</Typography>
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