import { Doughnut } from "react-chartjs-2";
import {
  ChartdivFooter,
  ChartdivFooterText,
  ChartEllipseIcon,
  DoughnutChart,
  OrdersChartDiv,
  ProductChartDiv,
} from "./productChart.styled";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useState } from "react";
import { useTranslation } from "react-i18next";
ChartJS.register(
    ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const produtsData = [
  {
    name: "metin",
    surname: "quliyev",
    usergain: 5,
    age: 2005,
  },
  {
    name: "medfgdfgtin",
    surname: "quliyev",
    usergain: 8,
    age: 2007,
  },
  {
    name: "asdasd",
    surname: "quliyev",
    usergain: 8,
    age: 2007,
  },
  {
    name: "metsdfgdfgin",
    surname: "quliyev",
    usergain: 7,
    age: 2009,
  },
  {
    name: "metsdfgdfgin",
    surname: "quliyev",
    usergain: 7,
    age: 2009,
  },
  {
    name: "metsdfgdfgin",
    surname: "quliyev",
    usergain: 2,
    age: 2009,
  },
  {
    name: "metsdfgdfgin",
    surname: "quliyev",
    usergain: 1,
    age: 2009,
  },
];

function OrdersChart() {
    const {t} = useTranslation()
  const [products, setProducts] = useState({
    datasets: [
      {
        label: "User Gained",
        data: produtsData.map((data) => data.usergain),
        backgroundColor: [
          "#8D43FF",
          "#4CD964",
          "#BB6BD9",
          "#2D9CDB",
          "#00B2A9",
          "#A84069",
          "#EAAB00",
          "#EB5757",
        ],
        borderColor: "#27283C",
      },
    ],
  });
  return (
    <ProductChartDiv>
      <h4>{t("menu.products")}</h4>
      <DoughnutChart>
        <Doughnut data={products} />
      </DoughnutChart>

      <ChartdivFooter>
        <ChartdivFooterText>
          <ChartEllipseIcon kfc></ChartEllipseIcon>
          <span>KFC</span>
        </ChartdivFooterText>
        <ChartdivFooterText>
          <ChartEllipseIcon mcdonalds></ChartEllipseIcon>
          <span>Mc`Donalds</span>
        </ChartdivFooterText>
        <ChartdivFooterText>
          <ChartEllipseIcon american></ChartEllipseIcon>
          <span>American Restaurants</span>
        </ChartdivFooterText>
      </ChartdivFooter>
    </ProductChartDiv>
  );
}

export default OrdersChart;
