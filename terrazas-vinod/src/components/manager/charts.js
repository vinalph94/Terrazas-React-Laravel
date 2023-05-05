import React, { useState, useEffect } from "react";
import axios from "axios";
import * as echarts from "echarts";

function loadCharts() {
  axios
    .get("/api/poolmanager/get_all_residents")

    .then((data) => {
      var ar = data.data;
      var ondutycount = 0;
      var offdutycount = 0;

      for (var i = 0; i < ar.length; i++) {
        if (ar[i].decision == "accept") {
          ondutycount++;
        } else {
          offdutycount++;
        }
      }
      

      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {title: {
        text: 'Pool Access Statistics for residents'
      },
        xAxis: {
          type: "category",
          data: ["Granted", "Pending"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [ondutycount,offdutycount],
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    });

  
}

function ManagerCharts() {
  useEffect(() => {
    loadCharts();
  });

  return (
    <div style={{width:"100vh"}}>
      <style type="text/css">
        {`
#main {
  color:white;
  background:white;
}`}</style>
      <div id="main" style={{ marginTop:"40px",marginLeft:"200px", justifyContent:"center", height: "600px", width: "700px" }}></div>
      <div style={{ height: "25VH" }}></div>
    </div>
  );
}

export default ManagerCharts;
