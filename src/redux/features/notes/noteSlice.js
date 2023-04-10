import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    section: "",
    name: "",
    groupType: "",
    idEnseignant: "",
    idGroup: "",
    idSemestre: "",
    idMatiere: "",
    codeMatiere: "",
    nameMatiere:"",
}

export const noteSlice = createSlice({
    name: "note",
    initialState: initialState,
    reducers: {
        setDataUrl: (state,action) => {
            state.section=action.payload.section;
            state.name=action.payload.name;
            state.groupType=action.payload.groupType;
            state.idEnseignant=action.payload.idEnseignant;
            state.idGroup=action.payload.idGroup;
            state.idSemestre=action.payload.idSemestre;
            state.idMatiere=action.payload.idMatiere;
            state.codeMatiere=action.payload.codeMatiere;
            state.nameMatiere=action.payload.nameMatiere;
        },
    },
})
export const { setDataUrl } = noteSlice.actions
export default noteSlice.reducer

