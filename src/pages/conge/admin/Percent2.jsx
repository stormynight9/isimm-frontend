import React from "react"
import { ResponsivePie } from "@nivo/pie"

const data = [
    {
        id: "traitées ",
        label: "traitées",
        color: "#F9AB35",
        value: 25,
    },
    {
        id: "non-traitées",
        label: "non-traitées",
        color: "#EBECF0",
        value: 25,
    },
]

const colors = ["#F9AB35", "#EBECF0"]

const Percent2 = () => {
    const centerText = "30"
    const centerText2 = "Demandes traitées  "
    const centerText3 = "30% "
    return (
        <div style={{ height: 140, width: 500 }}>
            <ResponsivePie
                data={data}
                margin={{ top: 5, right: -400, bottom: 60, left: -10 }}
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
            />
            <div
                style={{
                    position: "absolute",
                    top: "32%",
                    left: "75%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#F9AB35",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                }}
            >
                {centerText}
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "32%",
                    left: "84%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#999",
                    fontWeight: "",
                    fontSize: "1.3rem",
                }}
            >
                {centerText2}
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "32.3%",
                    left: "69.7%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#999",
                    fontWeight: "",
                    fontSize: "1.3rem",
                }}
            >
                {centerText3}
            </div>
        </div>
    )
}

export default Percent2
