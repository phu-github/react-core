import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReportChart } from '.';


export default {
    title: 'Molecules/ReportChart',
    component: ReportChart,
    argTypes: {
        color: { control: 'color' },
    }
} as ComponentMeta<typeof ReportChart>;

const Template: ComponentStory<typeof ReportChart> = (args) => <ReportChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
    heightChart: 200

};

export const Bar = Template.bind({});
Bar.args = {
    typeChart: 'donut',
    optionsChart: {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
                }
            }
        }]
    },
    seriesChart: [44, 55, 41, 17, 15],
    heightChart: 200
    
}
