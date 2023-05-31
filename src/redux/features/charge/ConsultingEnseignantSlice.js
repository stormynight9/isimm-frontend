import { createSlice } from "@reduxjs/toolkit"

export const ConsultingEnseignantSlice = createSlice({
    name: "ConsultingEnseignant",
    initialState: {
        enseignantId: null,
        gradeEnseignant: null,
        cin: "",
        nom: "",
        prenom: "",
        naissance: null,
        sexe: null,
        adresse: "",
        email: "",
        telephone: "",
        age: 0,
        nombreHeures: 0.0,
    },
    reducers: {
        updateCredentials: (state, action) => {
            state.enseignantId = action.payload.enseignantId ? action.payload.enseignantId : null
            state.gradeEnseignant = action.payload.gradeEnseignant
                ? action.payload.gradeEnseignant
                : null
            state.cin = action.payload.cin ? action.payload.cin : null
            state.nom = action.payload.nom ? action.payload.nom : null
            state.prenom = action.payload.prenom ? action.payload.prenom : null
            state.naissance = action.payload.naissance ? action.payload.naissance : null
            state.sexe = action.payload.sexe ? action.payload.sexe : null
            state.adresse = action.payload.adresse ? action.payload.adresse : null
            state.email = action.payload.email ? action.payload.email : null
            state.telephone = action.payload.telephone ? action.payload.telephone : null
            state.age = action.payload.age ? action.payload.age : null
            state.nombreHeures = action.payload.nombreHeures ? action.payload.nombreHeures : null
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateCredentials } = ConsultingEnseignantSlice.actions

export default ConsultingEnseignantSlice.reducer
