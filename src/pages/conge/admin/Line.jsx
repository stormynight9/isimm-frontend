import React from "react"
import { ResponsiveLine } from "@nivo/line"

const data = [
    {
        id: "germany",
        color: "#F9AB35",
        data: [
            {
                x: "plane",
                y: 38,
            },
            {
                x: "helicopter",
                y: 145,
            },
            {
                x: "boat",
                y: 149,
            },
            {
                x: "train",
                y: 295,
            },
            {
                x: "subway",
                y: 196,
            },
            {
                x: "bus",
                y: 74,
            },
            {
                x: "car",
                y: 110,
            },
            {
                x: "moto",
                y: 16,
            },
            {
                x: "bicycle",
                y: 86,
            },
            {
                x: "horse",
                y: 255,
            },
            {
                x: "skateboard",
                y: 256,
            },
            {
                x: "others",
                y: 7,
            },
        ],
    },
    {
        id: "norway",
        color: "#F93535",
        data: [
            {
                x: "plane",
                y: 252,
            },
            {
                x: "helicopter",
                y: 275,
            },
            {
                x: "boat",
                y: 44,
            },
            {
                x: "train",
                y: 19,
            },
            {
                x: "subway",
                y: 202,
            },
            {
                x: "bus",
                y: 25,
            },
            {
                x: "car",
                y: 294,
            },
            {
                x: "moto",
                y: 126,
            },
            {
                x: "bicycle",
                y: 123,
            },
            {
                x: "horse",
                y: 86,
            },
            {
                x: "skateboard",
                y: 63,
            },
            {
                x: "others",
                y: 121,
            },
        ],
    },
]

const colors = ["#34C759", "#356CF9", "#F9AB35", "#F93535"]

const Line = () => {
    return (
        <div style={{ height: "500px", width: "100%" }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 800, bottom: 500, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: "bottom",
                    tickSize: 6,
                    tickPadding: 0,
                    tickRotation: 22,
                    legend: "transportation",
                    legendOffset: 36,
                    legendPosition: "middle",
                }}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "count",
                    legendOffset: -40,
                    legendPosition: "middle",
                }}
                enableGridX={false}
                lineWidth={4}
                pointSize={9}
                colors={colors}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: "top-left",
                        direction: "row",
                        justify: false,
                        translateX: 97,
                        translateY: -30,
                        itemsSpacing: 60,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 10,
                        itemOpacity: 0.75,
                        symbolSize: 14,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    )
}

export default Line
