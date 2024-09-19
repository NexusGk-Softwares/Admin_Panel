export const chartsConfig = {
  chart: {
    toolbar: {
      show: false, // Keep the toolbar hidden for a cleaner look
    },
  },
  title: {
    show: false, // Disable the title for a more minimal appearance
  },
  dataLabels: {
    enabled: false, // Disable data labels to reduce clutter
  },
  xaxis: {
    axisTicks: {
      show: false, // Remove axis ticks for a cleaner look
    },
    axisBorder: {
      show: false, // Remove the axis border for a modern, flat design
    },
    labels: {
      style: {
        colors: "#607d8b", // Use a neutral blue-gray color for modern aesthetics
        fontSize: "12px",
        fontFamily: "Inter, sans-serif", // Use a modern font
        fontWeight: 400, // Slightly increase the weight for readability
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#607d8b", // Matching modern color for consistency
        fontSize: "12px",
        fontFamily: "Inter, sans-serif", // Consistent modern font
        fontWeight: 400,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: "#e0e0e0", // Use a light gray for subtle grid lines
    strokeDashArray: 3, // Make the lines more subtle
    xaxis: {
      lines: {
        show: true, // Show grid lines for better readability
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 10,
      right: 20,
      left: 0,
      bottom: 0,
    },
  },
  fill: {
    opacity: 0.85, // Slightly increase opacity for clearer visual representation
    colors: ["#42a5f5", "#66bb6a", "#ff7043"], // Use modern, vibrant colors for fills
  },
  tooltip: {
    theme: "light", // Light theme for modern design
    style: {
      fontSize: "12px",
      fontFamily: "Inter, sans-serif",
    },
    x: {
      show: true, // Display the x-axis label in tooltips
    },
    marker: {
      show: true, // Show marker points in tooltips
    },
  },
  legend: {
    show: true,
    position: "top", // Position the legend at the top for better layout
    labels: {
      colors: "#607d8b",
      fontFamily: "Inter, sans-serif",
    },
  },
};

export default chartsConfig;
