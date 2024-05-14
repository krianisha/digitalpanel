import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { useEffect, useState } from "react";

const StatisticalChart = () => {
  const [chartWidth, setChartWidth] = useState("100%");
  const [marginLeft, setMarginLeft] = useState("0");

  const resizeChart = () => {
    if (window.innerWidth <= 768) {
      setChartWidth("387px"); // Set width to 387px for smaller screens
      setMarginLeft("-4rem"); // Adjust margin for smaller screens
    } else {
      setChartWidth("100%"); // Reset width for larger screens
      setMarginLeft("0"); // Reset margin for larger screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeChart);
    resizeChart(); // Call initially to set the initial width and margin

    return () => window.removeEventListener("resize", resizeChart);
  }, []);

  const option = {
    color: ["var(--orange)"],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0, 0, 0, 0.59)",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "#F450D3",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#FE4C00",
            },
            {
              offset: 1,
              color: "rgba(255,144,70,0.1)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: chartWidth, marginLeft: marginLeft }} />;
};

export default StatisticalChart;
