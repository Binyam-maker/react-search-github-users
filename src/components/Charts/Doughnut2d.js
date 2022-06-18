import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  console.log(data);
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Data - from step 2
      data: data,
      // Chart Configuration
      chart: {
        decimals: 0,
        caption: "Stars Per Language", //
        doughnutRadius: "45%",
        showPercentValues: 0,
        theme: "candy",
      },
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
