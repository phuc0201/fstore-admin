import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels, ApexGrid, ApexLegend, ApexPlotOptions, ApexStroke, ApexXAxis, ApexYAxis, ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  legend: ApexLegend;
  colors: string[];
  grid: ApexGrid;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-new-visitor-card',
  templateUrl: './new-visitor-card.component.html',
  styleUrls: ['./new-visitor-card.component.scss']
})
export class NewVisitorCardComponent {
  @ViewChild('visitorChart') chart!: ChartComponent;
  chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: 'Sales',
        data: [40, 95, 60, 45, 90, 50, 75]
      }
    ],
    chart: {
      type: 'bar',
      height: 150,
      width: 200,
      toolbar: { show: false },
      animations: { enabled: true }
    },
    dataLabels: {
      enabled: false
    },
    colors: [
      "#E0E7FF",
      "#E0E7FF",
      "#E0E7FF",
      "#E0E7FF",
      "#E0E7FF",
      "#696cff",
      "#E0E7FF",
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: 15,
        borderRadius: 8,
        distributed: true
      }
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
    }
  };;
}
