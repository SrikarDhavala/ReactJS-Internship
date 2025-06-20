import Chart from 'react-apexcharts'

const options = {
    labels: ["Income", "Expense"],
    colors: ["#21bf73", "#FD5E53"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#21bf73", "#FD5E53"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
    },
};

export default function TransactionChart({expense = 100, income = 500}) {

    return (
        <Chart options={options} series={[income, expense]} type='pie' width={'100%'} height={'100%'}></Chart>
    );
}