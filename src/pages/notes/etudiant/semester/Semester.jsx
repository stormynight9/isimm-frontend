import TableAfficheNote from "../components/TableAfficheNote"

const Semester = (props) => {
    const { sem, idEtd } = props
    return (
        <div className=".block mx-auto  justify-center p-9">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Notes {`>`} Semestre {sem}{" "}
            </h3>
            <TableAfficheNote sem={sem} idEtd={idEtd}></TableAfficheNote>
        </div>
    )
}

export default Semester
