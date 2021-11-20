import { Box, Card, CardHeader } from "@mui/material"
import { useQuery } from "react-query"

export const AppWaterUsage = () => {
  const { data } = useQuery('usage', async () => {
    const response = await fetch('http://localhost:3001/apartments/0/usage')

    const json = await response.json()

    return json
  })

  if (!data) return null

  const { today, yesterday } = data

  const percentage = (today / yesterday * 100).toFixed(0)

  return (
    <Card>
      <CardHeader title="💦 Water Usage" subheader={`${today > yesterday ? '+' : '-'}${percentage}% since yesterday`} />
      <Box sx={{ p: 3, pb: 3 }} dir="ltr">
        {`${data.today.toFixed(2)} liters`}
      </Box>
    </Card>
  )
}

export default AppWaterUsage
