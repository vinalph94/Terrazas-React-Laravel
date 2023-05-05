import React, { useEffect } from "react";

import * as echarts from "echarts";

function loadCharts(){

  var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

option && myChart.setOption(option);
}

function Charts() {
  useEffect(()=>{

    loadCharts();
    
    })
    
  return (
    <div>
      <div id="main" style={{ height:"400px",width:"400px" }}></div>
    </div>
  );
}

export default Charts;
