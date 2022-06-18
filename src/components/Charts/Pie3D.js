import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  console.log(data);
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Data - from step 2
      data: data,
      // Chart Configuration
      chart: {
        decimals: 0,
        caption: "Languages", //
        theme: "fusion", //Set the theme for your chart
      },
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
