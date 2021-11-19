import { Box, Card, CardHeader } from "@mui/material"

export const AppWaterUsage = () => {
  return (
    <Card>
      <CardHeader title="💦 Water Usage" subheader="+42% since yesterday" />
      <Box sx={{ p: 3, pb: 3 }} dir="ltr">
        22 liters
      </Box>
    </Card>
  )
}

export default AppWaterUsage
