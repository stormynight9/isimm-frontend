import React from "react"
import { ResponsivePie } from "@nivo/pie"

const data = [
    {
        id: "accéptées",
        label: "accéptées",
        color: "#34C759",
        value: 25,
    },
    {
        id: "En attente",
        label: "attente",
        color: "#356CF9",
        value: 25,
    },

    {
        id: "réfusées",
        label: "réfusées",
        color: "#F93535",
        value: 25,
    },
]

const colors = ["#34C759", "#F9AB35", "#F93535"]

const Pie = () => {
    const centerText = "30"
    const centerText2 = "Demandes"
    return (
        <div style={{ height: 300, width: 400 }}>
            <ResponsivePie
                data={data}
                margin={{ top: 30, right: 80, bottom: 80, left: -10 }}
                innerRadius={0.8}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={7}
                colors={colors}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsTextOffset={9}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsOffset={16}
                arcLinkLabelsDiagonalLength={0}
                arcLinkLabelsThickness={0}
                arcLinkLabelsColor={{ from: "color" }}
                enableArcLabels={false}
                arcLabelsRadiusOffset={0.25}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", "1.2"]],
                }}
                legends={[
                    {
                        anchor: "top",
                        direction: "row",
                        justify: false,
                        translateX: 35,
                        translateY: 220,
                        itemsSpacing: 70,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 16,
                        symbolShape: "square",

                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                },
                            },
                        ],
                        data: [
                            { id: "accéptées", label: "Acceptées", color: "#34C759" },
                            { id: "attente", label: "En attente", color: "#F9AB35" },
                        ],
                    },
                    {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 35,
                        translateY: 80,
                        itemsSpacing: 68,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 16,
                        symbolShape: "square",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                },
                            },
                        ],
                        data: [{ id: "réfusées", label: "Refusées", color: "#F93535" }],
                    },
                ]}
            />
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "27.4%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#333333",
                    fontWeight: "bold",
                    fontSize: "3rem",
                }}
            >
                {centerText}
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "27%",
                    left: "27.4%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#999",
                    fontWeight: "",
                    fontSize: "1.3rem",
                }}
            >
                {centerText2}
            </div>
        </div>
    )
}

export default Pie
