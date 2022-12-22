<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="radarchart">
    <Radar :chartData="chartData" :options="chartOptions" :width="width" :height="height"/>
  </div>
  </div>
  
</template>

<script>
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'Radarchart',
  props:{
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
  },
  components: {
    Radar
  },
  data() {
  return {
   chartData:{
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [
      {
        
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }
    
    ]
    },
    chartOptions: {
          responsive: true,
          maintainAspectRatio: false
    },
   
    }
},
  computed:{
    getLicences(){
      return this.$store.getters['licence/getLicences'];
    }
    
  },
  beforeMount(){
    this.$store.dispatch('licence/fetchLicences')
  },
 mounted(){
    console.log(this.getLicences.map(t=>t.licence))
    this.chartData.labels = this.getLicences.map(t=>t.licence)
    this.chartData.datasets[0].data = this.getLicences.map(t=>t.total)
  }

}



</script>
<style scoped>
.radarchart{
  height:400px;
  width:400px;
}
</style>