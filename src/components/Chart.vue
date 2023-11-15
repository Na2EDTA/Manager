<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ '今日到馆人数', '当前在馆人数', '当前预约人数' ],
        datasets: [ {
          data: [40, 20, 12],
          labels: '人数',
          backgroundColor: [
              'rgba(75, 192, 192, 0.4)',  // color for '今日到馆人数'
              'rgba(255, 206, 86, 0.4)',  // color for '当前在馆人数'
              'rgba(153, 102, 255, 0.4)'  // color for '当前预约人数'
          ] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>