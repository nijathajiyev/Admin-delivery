import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import {
  ChartdivFooter,
  ChartdivFooterText,
  ChartEllipseIcon,
  LineChart,
  RestaurantChartDiv,
} from "./RestaurantChart.styled";
import { useTranslation } from "react-i18next";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = ["2018", "2019", "2020", "2021", "2022"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "February",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      border: "3px solid #FFFFFF",
      backgroundColor: "#F4A26C",
    },
    {
      fill: true,
      label: "March",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      border: "3px solid #FFFFFF",
      backgroundColor: "#3FAEA3",
    },
    {
      fill: true,
      label: "April",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      border: "3px solid #FFFFFF",
      backgroundColor: "#914DF0",
    },
  ],
};
function RestaurantsChart() {
    const {t} = useTranslation()
  return (
    <RestaurantChartDiv>
      <h4>{t("menu.restaurants")}</h4>
      <LineChart>
        <Line data={data} options={options} />
      </LineChart>

      <ChartdivFooter>
        <ChartdivFooterText>
          <ChartEllipseIcon february></ChartEllipseIcon>
          <span>February</span>
        </ChartdivFooterText>
        <ChartdivFooterText>
          <ChartEllipseIcon march></ChartEllipseIcon>
          <span>March</span>
        </ChartdivFooterText>
        <ChartdivFooterText>
          <ChartEllipseIcon april></ChartEllipseIcon>
          <span>April</span>
        </ChartdivFooterText>
      </ChartdivFooter>
    </RestaurantChartDiv>
  );
}

export default RestaurantsChart;
