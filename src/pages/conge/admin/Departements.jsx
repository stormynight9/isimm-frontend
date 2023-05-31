import "./Style.css"

export default function Departements() {
    return (
        <div style={{ marginLeft: "-400px", marginTop: "30px" }}>
            <span className="dot">
                <div>
                    <span style={{ marginLeft: "60px", top: "60px", fontWeight: "bold" }}>
                        Informatiques
                    </span>
                    <br />
                    <span style={{ marginLeft: "60px", top: "60px", fontWeight: "bold" }}>
                        7/10
                    </span>
                    <span style={{ marginLeft: "10px", top: "60px", fontWeight: "" }}>
                        demandes{" "}
                    </span>
                </div>
            </span>
            <span className="dot">
                <div>
                    <span style={{ marginLeft: "60px", top: "60px", fontWeight: "bold" }}>
                        Mathematiques
                    </span>
                    <br />
                    <span style={{ marginLeft: "60px", top: "60px", fontWeight: "bold" }}>
                        7/10
                    </span>
                    <span style={{ marginLeft: "10px", top: "60px", fontWeight: "" }}>
                        demandes{" "}
                    </span>
                </div>
            </span>
            <span className="dot">
                <div>
                    <span style={{ marginLeft: "60px", top: "60px", fontWeight: "bold" }}>
                        Technologie
                    </span>
                    <br />
                    <span style={{ marginLeft: "60px", top: "60px", fontWeight: "bold" }}>
                        7/10
                    </span>
                    <span style={{ marginLeft: "10px", top: "60px", fontWeight: "" }}>
                        demandes{" "}
                    </span>
                </div>
            </span>
        </div>
    )
}
