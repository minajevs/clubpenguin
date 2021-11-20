import ReactApexChart from 'react-apexcharts';
import { useQuery } from 'react-query'
import { Card } from '@mui/material';
import { getDaysInMonth, getMonth } from 'date-fns';

const month = getMonth(new Date())

const options = {
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  xaxis: {
    type: 'datetime',
    categories: Array.apply(null, Array(getDaysInMonth(new Date()))).map((_, i) => new Date(2021, month, i + 1).toISOString()),
    labels: {
      format: "d"
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
  colors: ['#0197f6', '#07004d', '#ec0c0c'],
  tooltip: {
    x: {
      format: 'dd/MM/yy'
    },
  }
}

function AppMonthSumChart() {
  const { data } = useQuery('month', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/apartments/0/month`)

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
    <ReactApexChart options={options as any} series={series} type="area" height={200} />
  )
}

export default AppMonthSumChart
