import ReclamationTable from "./ReclamationTable"

const ReclamationNote = () => {
    return (
        <div class="mx-auto flex max-w-screen-md flex-grow justify-center">
            {/* <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">{"Notes > Reclamation"}</h3> */}
            <ReclamationTable></ReclamationTable>
        </div>
    )
}

export default ReclamationNote
