import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  DoughnutChart,
  OrdersChartDiv,
} from "./ordersChart.styled";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
    },
    
  },
};
const points = [0,6,20,25,54,65,26,41,52,85,74]
const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "USERS",
      data: points.map((point) => point),
      backgroundColor: "#067FDE",
      color:"#fff"
    },
    {
      type:"line",
      fill: true,
      label: "REGISTER",
      data: points.map((point) => point),
      backgroundColor: "#1D5753",
    },
    {
      label: "PRODUCTS",
 data: points.map((point) => point),
      backgroundColor: "#FEB019",
    },
    {
      label: "ORDERS",
      data: points.map((point) => point),
      backgroundColor: "#A54C5A",
    },
  ],
};

function OrdersChart() {
  const { t } = useTranslation();
  return (
   
      <OrdersChartDiv>
        <h4>{t("menu.orders")}</h4>
        <DoughnutChart>
          <Bar data={data} options={options} />
        </DoughnutChart>
      </OrdersChartDiv>

  );
}

export default OrdersChart;
