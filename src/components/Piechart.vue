<template>
  <div>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    },
    
  },
  data() {
    return {
      chartData: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed:{
    getLicences(){
      return this.$store.getters['licence/getLicences'];
    },
    getLanguages(){
      return this.$store.getters['licence/getLicences'];
    }
    
  },
  beforeMount(){
    this.$store.dispatch('licence/fetchLicences')
    this.$store.dispatch('licence/fetchLanguage')
   
    
  },
 created(){
    
    if(this.$route.name=="language"){
      this.chartData.labels = this.getLanguages.map(t=>t.LANGUAGE)
      this.chartData.datasets[0].data = this.getLanguages.map(t=>t.total_bytes)
    }else if(this.$route.name=="piechart"){
      this.chartData.labels = this.getLicences.map(t=>t.licence)
      this.chartData.datasets[0].data = this.getLicences.map(t=>t.total)
    }
    
  }

}
</script>
