import React from "react"
import Pie from "./Pie"
import ImenBaarChart from "./ImenBaarChart.jsx"
import Radial from "./Radial"
import Line from "./Line"
import Percent1 from "./Percent1"
import Percent2 from "./Percent2"
import Departements from "./Departements"

const Statistiques = () => {
    console.log("Rendering Donut component")

    return (
        <div class="bg-white">
            <div class="text-2l ml-7 mt-3 font-bold"> rapport des demandes : </div>
            <Pie />

            <div class="  text-2l font-bold" style={{ marginLeft: "770px", marginTop: "-320px" }}>
                {" "}
                Traitement des demandes :{" "}
            </div>

            <div style={{ marginLeft: "350px" }}>
                <Percent1 />
            </div>
            <div style={{ marginLeft: "350px" }}>
                <Percent2 />
            </div>

            <div class="  text-2l font-bold" style={{ marginLeft: "400px", marginTop: "-305px" }}>
                {" "}
                Demandes traitées par Departement:{" "}
            </div>
            <Departements />

            <div class=" text-2l mt-5 font-bold" style={{ marginLeft: "770px" }}>
                {" "}
                Nombre d’employers faisant des demandes:{" "}
            </div>
            <ImenBaarChart />

            <div style={{ position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "-64px",
                        left: "450px",
                        fontWeight: "bold",
                    }}
                >
                    rapport des demandes :
                </div>
                <Radial />

                <div
                    style={{
                        border: "7px solid #F93535",
                        borderRadius: "50%",
                        height: "10px",
                        width: "10px",
                        position: "relative",
                        top: "-22.3px",
                        left: "607px",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            height: "7px",
                            width: "7px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></div>
                </div>
            </div>

            <div
                style={{
                    border: "7px solid #34C759",
                    borderRadius: "50%",
                    height: "10px",
                    width: "10px",
                    position: "relative",
                    top: "-35px",
                    left: "470px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        height: "7px",
                        width: "7px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>
            </div>

            <div
                style={{
                    border: "7px solid #F9AB35",
                    borderRadius: "50%",
                    height: "10px",
                    width: "10px",
                    position: "relative",
                    top: "-48px",
                    left: "535px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        height: "7px",
                        width: "7px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>
            </div>

            <Line />
        </div>
    )
}

export default Statistiques
