import React from "react";
import ReactApexChart from "react-apexcharts";

const data = {
  series: [70, 10, 20],
  options: {
    chart: {
      type: "pie",
      height: 350,
    },
    labels: ["Attended", "Absent", "Not Submitted"],
    colors: ["#4CAF50", "#FF5252", "#BDBDBD"],
  },
};

function PieChart() {
  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="pie"
        height={350}
      />
    </div>
  );
}

export default PieChart;
