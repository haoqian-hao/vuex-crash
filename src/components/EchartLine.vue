<template>
    <v-chart class="chart" :option="lineData" autoresize/>
</template>

<script>

import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { use } from "echarts/core";
import VChart from "vue-echarts";

use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
    name:"EchartLine", 
    components: {
        VChart,
    },
    
    props: {
        lineData: Object,
    }, 
}
</script>

<style>
.chart {
  height: 700;
}

body {
  margin: 0;
}
</style>