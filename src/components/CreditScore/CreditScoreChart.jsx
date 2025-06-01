import React, { Fragment, useState, useEffect } from "react";
import Chart from "react-apexcharts";

const CreditScoreChart = ({ creditScore }) => {
  // Function to determine credit score category
  const getScoreCategory = (score) => {
    if (score >= 300 && score <= 499) {
      return "Very Poor";
    } else if (score >= 500 && score <= 600) {
      return "Poor";
    } else if (score >= 601 && score <= 660) {
      return "Fair";
    } else if (score >= 661 && score <= 780) {
      return "Good";
    } else if (score >= 781 && score <= 850) {
      return "Excellent";
    } else {
      return "Unknown";
    }
  };

  const getColorByScore = (score) => {
    if (score >= 300 && score <= 499) {
      return "#FF0000"; // Red for Very Poor
    } else if (score >= 500 && score <= 600) {
      return "#FFA500"; // Orange for Poor
    } else if (score >= 601 && score <= 660) {
      return "#FFFF00"; // Light Yellow for Fair
    } else if (score >= 661 && score <= 780) {
      return "#90EE90"; // Light Green for Good
    } else if (score >= 781 && score <= 850) {
      return "#008000"; // Green for Excellent
    } else {
      return "#E0E0E0";
    }
  };

  const initialCategory = getScoreCategory(creditScore);
  const initialSeries = [(creditScore / 900) * 100];
  const initialColor = getColorByScore(creditScore);

  const [scoreCategory, setScoreCategory] = useState(initialCategory);
  const [series, setSeries] = useState(initialSeries);
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    if (creditScore >= 300 && creditScore <= 850) {
      setScoreCategory(getScoreCategory(creditScore));
      setSeries([(creditScore / 900) * 100]);
      setColor(getColorByScore(creditScore));
    } else {
      setScoreCategory("Unknown");
      setSeries([0]);
      setColor("#E0E0E0");
    }
  }, [creditScore]);

  const options = {
    chart: {
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 15,
          size: "70%",
        },
        track: {
          background: "#E0E0E0",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            fontSize: "20px",
            color: "#212121",
            offsetY: -10,
          },
          value: {
            fontSize: "24px",
            color: color,
            offsetY: 5,
            formatter: () => scoreCategory,
          },
        },
      },
    },
    labels: ["Odas Score"],
    fill: {
      colors: [color],
    },
  };

  return (
    <Fragment>
      <div>
        <h3 style={{ textAlign: "center" }}>Your Odas Score</h3>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height="300"
        />
      </div>
    </Fragment>
  );
};

export default CreditScoreChart;
