import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReportChartGroup } from '.';

export default {
  title: 'organisms/ReportChartGroup',
  component: ReportChartGroup,
} as ComponentMeta<typeof ReportChartGroup>;

const Template: ComponentStory<typeof ReportChartGroup> = (args) => <ReportChartGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  reportChartArr: [
    {
      seriesChart: [
        {
          name: 'XYZ MOTORS',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: 'ABC',
          data: [6, 21, 34, 67, 43, 65, 42, 32, 70]
        }
      ],
      optionsChart: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
      typeChart: 'line',
      heightChart: 300
    },
    {
      typeChart: 'donut',
      optionsChart: {
        legend: {
          horizontalAlign: 'center'
        },
        dataLabels: {
          enabled: false
        },
        labels: ['Automation', 'Manufacture', 'UnResponse'],
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom'
            }
          }
        }],
        tooltip: {
          y: {
            formatter: (val: any) => {
              return val + ".00";
            },
          }
        }
      },
      seriesChart: [70, 20, 10],
      heightChart: 300,
    }
  ]
};
