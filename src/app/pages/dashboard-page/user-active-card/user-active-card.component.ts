import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
};

@Component({
  selector: 'app-user-active-card',
  templateUrl: './user-active-card.component.html',
  styleUrls: ['./user-active-card.component.scss']
})
export class UserActiveCardComponent {
  @ViewChild("userActiveChart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "series1",
          data: [15, 22, 17, 40, 12, 35, 25]
        },
      ],
      chart: {
        height: 150,
        width: 200,
        type: "area",
        toolbar: {
          show: false
        }
      },
      colors: ['#71dd37'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: [
              "#A0A0A0",
              "#A0A0A0",
              "#A0A0A0",
              "#A0A0A0",
              "#A0A0A0",
              "#A0A0A0",
              "#A0A0A0",
              "#A0A0A0"
            ],
            fontSize: "12px"
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#71dd37', '#ffffff'],
          inverseColors: false,
          opacityFrom: 0.9,
          opacityTo: 0.1,
          stops: [0, 100]
        }
      }
    };
  }
}
