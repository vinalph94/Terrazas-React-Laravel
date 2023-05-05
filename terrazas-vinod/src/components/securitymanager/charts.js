import React, { useState, useEffect } from "react";
import axios from "axios";
import * as echarts from "echarts";

function loadCharts() {
  axios
    .get("/api/securityperson/get_all")

    .then((data) => {
      var ar = data.data;
      var ondutycount = 0;
      var offdutycount = 0;

      for (var i = 0; i < ar.length; i++) {
        if (ar[i].active_status == "on-duty") {
          ondutycount++;
        } else {
          offdutycount++;
        }
      }
      

      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {title: {
        text: 'Off & On-Duty Employee Statistics'
      },
        xAxis: {
          type: "category",
          data: ["on-duty", "off-duty"],
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

function SecurityCharts() {
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

export default SecurityCharts;
