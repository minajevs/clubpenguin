import ReactApexChart from 'react-apexcharts';
import { useQuery } from 'react-query'
import { Card } from '@mui/material';

const options = {
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'string',
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yaxis: [
    {
      show: false,
      title: {
        text: "Consumption"
      },
    },
    {
      show: false,
      title: {
        text: "Flow Time"
      },
    },
    {
      show: false,
      title: {
        text: "Power Consumption"
      },
    }
  ],
  tooltip: {
    x: {
      // format: 'dd/MM/yy'
    },
  }
}

function AppWeekSumChart() {
  const { data } = useQuery('week', async () => {
    const response = await fetch('http://localhost:3001/apartments/0/week')

    const json = await response.json()

    return json
  })

  if (!data) return null

  const series = [
    {
      name: 'Consumption',
      data: data.Consumption
    },
    {
      name: 'Flow Time',
      data: data.FlowTime
    },
    {
      name: 'Power Consumption',
      data: data.Power_Consumption
    },
  ]

  return (
    <ReactApexChart options={options as any} series={series} type="area" height={350} />
  )
}

export default AppWeekSumChart