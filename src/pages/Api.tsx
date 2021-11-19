import ReactApexChart from 'react-apexcharts';
import { useQuery } from 'react-query'

const options = {
  chart: {
    height: 350,
    type: 'area'
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
      format: "MMMM"
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
      }
    },
    {
      show: false,
      title: {
        text: "Power Consumption"
      }
    }
  ],
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  }
}

function Api() {
  const { data } = useQuery('todos', async () => {
    const response = await fetch('http://localhost:3001/apartments/0/monthly')

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
    <div id="chart">
      <ReactApexChart options={options as any} series={series} type="area" height={350} />
    </div>
  )
}

export default Api
