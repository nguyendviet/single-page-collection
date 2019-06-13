import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {data} from './CandidateByCountryData';

const config = {
    chart: {
        type: 'spline',
        // scrollablePlotArea: {
        //     scrollPositionX: 1
        // },
        // height: 250,
        backgroundColor: 'transparent',
        // maxWidth: 600,
    },
    title: {
        text: data.title
    },
    subtitle: {
        text: data.subtitle
    },
    xAxis: {
        // type: 'number',
        // labels: {
        //     overflow: 'justify'
        // },
        // min: data.startYear,
        // max: data.endYear,
        // tickInterval: 1
    },
    yAxis: {
        // type: 'number',
        title: {
            text: data.yTitle
        },
        // minorGridLineWidth: 0,
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
            // turboThreshold: 10
            // pointIntervalUnit: 'year'
        },
        series: {
            connectNulls: true
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