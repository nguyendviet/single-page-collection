import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {data} from './CandidateByCountryData';

const config = {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            scrollPositionX: 1
        },
        backgroundColor: 'transparent'
    },
    title: {
        text: data.title
    },
    subtitle: {
        text: data.subtitle
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: data.yTitle
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null
    },
    tooltip: {
        valueSuffix: ' candidates'
    },
    plotOptions: {
        spline: {
            lineWidth: 3,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
        },
        series: {
            connectNulls: true,
            pointStart: data.startYear,
            pointIntervalUnit: 'year'
        }
    },
    series: data.series,
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    credits: false
};

const CandidateByCountryChart = () => ( 
    <HighchartsReact 
        highcharts = {Highcharts}
        options = {config}
    />
);

export {CandidateByCountryChart};
