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
    type: 'datetime',
    categories: Array.apply(null, Array(12)).map((_, i) => new Date(2021, i, 1).toISOString()),
    labels: {
      format: "MMM"
    }
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
      format: 'dd/MM/yy'
    },
  }
}

function AppSumChart() {
  const { data } = useQuery('months', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/11/monthly`)

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
    <Card>
      <div id="chart">
        <ReactApexChart options={options as any} series={series} type="area" height={350} />
      </div>
    </Card>
  )
}

export default AppSumChart
