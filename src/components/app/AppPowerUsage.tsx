import { Box, Card, CardHeader } from "@mui/material"
import { useQuery } from "react-query"

export const AppPowerUsage = () => {
  const { data } = useQuery('power-usage', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/11/power-usage`)

    const json = await response.json()

    return json
  })

  if (!data) return null

  const { today, yesterday } = data

  const percentage = Math.abs(100 - (today / yesterday * 100)).toFixed(0)

  return (
    <Card>
      <CardHeader title="Power Usage" subheader={`${today > yesterday ? '+' : '-'}${percentage}% since yesterday`} />
      <Box sx={{ p: 3, pb: 3 }} dir="ltr">
        {`${data.today.toFixed(2)} kWh`}
      </Box>
    </Card>
  )
}

export default AppPowerUsage
