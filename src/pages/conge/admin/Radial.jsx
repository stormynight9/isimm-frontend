import React from "react"
import ReactApexChart from "react-apexcharts"

class Radial extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            series: [44, 55, 67],
            options: {
                chart: {
                    height: 3000,
                    type: "radialBar",
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "22px",
                            },
                            value: {
                                fontSize: "16px",
                            },
                            total: {
                                show: true,
                                label: "Total",
                                formatter: function (w) {
                                    return 249
                                },
                            },
                        },
                        hollow: {
                            size: "50%",
                            background: "transparent",
                        },
                        data: {
                            strokeWidth: 100, // set the width of the stroke for the data
                            margin: 10, // set the margin between bars
                        },
                    },
                },
                labels: ["Info", "Math", "Elec"],
                colors: ["#34C759", "#F9AB35", "#F93535"],
                legend: {
                    show: true,
                    position: "bottom",
                    labels: {
                        colors: ["#000"],
                        useSeriesColors: false,
                    },
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        strokeColor: "#fff",
                        fillColors: undefined,
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0,
                    },
                    itemMargin: {
                        horizontal: 15,
                        vertical: 8,
                    },
                },
            },
        }
    }

    render() {
        return (
            <div style={{ marginLeft: "-130px", marginTop: "-230px" }}>
                <ReactApexChart
                    options={{
                        ...this.state.options,
                        plotOptions: {
                            ...this.state.options.plotOptions,
                            radialBar: {
                                ...this.state.options.plotOptions.radialBar,
                                dataLabels: {
                                    ...this.state.options.plotOptions.radialBar.dataLabels,
                                    total: {
                                        show: false,
                                    },
                                },
                            },
                        },
                    }}
                    series={this.state.series}
                    type="radialBar"
                    height={280}
                />
            </div>
        )
    }
}

export default Radial
