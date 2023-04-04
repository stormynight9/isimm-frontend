import React, { useMemo } from "react"
import Table from "@/pages/charge/components/DiplomeTable"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/Select"
import "./GestionDiplomes.css"
import { ChevronRight } from "lucide-react"
const GestionDiplomes = () => {
    const columns = useMemo(
        () => [
            {
                Header: "UEEE",
                columns: [
                    {
                        Header: "UE",
                        accessor: "ue",
                    },
                    {
                        Header: "Unité",
                        accessor: "unite",
                    },
                ],
            },

            {
                Header: "EC",
                accessor: "ec",
            },
            {
                Header: "Eléments Constitutifs d'EU",
                columns: [
                    {
                        Header: "Module",
                        accessor: "module",
                    },
                ],
            },
            {
                Header: "Volume Horaire Semestriel",
                columns: [
                    {
                        Header: "TOT",
                        accessor: "tot",
                    },
                    {
                        Header: "CR",
                        accessor: "cr",
                    },
                    {
                        Header: "Enseignant CR",
                        accessor: "enseignant_cr",
                    },
                    {
                        Header: "TD",
                        accessor: "td",
                    },
                    {
                        Header: "Enseignant TD",
                        accessor: "enseignant_td",
                    },
                    {
                        Header: "TP",
                        accessor: "tp",
                    },
                    {
                        Header: "Enseignant TP",
                        accessor: "enseignant_tp",
                    },
                    {
                        Header: "CI",
                        accessor: "ci",
                    },
                    {
                        Header: "Enseignant CI",
                        accessor: "enseignant_ci",
                    },
                ],
            },
            {
                Header: "Régime d’examen",
            },
        ],
        []
    )

    const data = useMemo(
        () => [
            {
                ue: "511",
                unite: "Analyse Descriptive 1",
                modules: [
                    {
                        ec: "5111",
                        module: "Analyse de données",
                        tot: "45",
                        cr: "22.5",
                        enseignant_cr: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        td: "",
                        enseignant_td: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        tp: "22.5",
                        enseignant_tp: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        ci: "",
                        enseignant_ci: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        cc: true,
                        rm: false,
                    },
                    {
                        ec: "5112",
                        module: "mathématique des reseaux de neurones",
                        tot: "45",
                        cr: "22.5",
                        enseignant_cr: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        td: "",
                        enseignant_td: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        tp: "22.5",
                        enseignant_tp: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        ci: "",
                        enseignant_ci: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        cc: false,
                        rm: true,
                    },
                ],
            },
            {
                ue: "515",
                unite: "Transversale 5",
                modules: [
                    {
                        ec: "5151",
                        module: "Anglais",
                        tot: "45",
                        cr: "22.5",
                        enseignant_cr: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        td: "",
                        enseignant_td: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        tp: "22.5",
                        enseignant_tp: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        ci: "",
                        enseignant_ci: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        cc: false,
                        rm: true,
                    },
                    {
                        ec: "5152",
                        module: "Francais",
                        tot: "45",
                        cr: "22.5",
                        enseignant_cr: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        td: "",
                        enseignant_td: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        tp: "22.5",
                        enseignant_tp: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        ci: "",
                        enseignant_ci: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        cc: false,
                        rm: true,
                    },
                    {
                        ec: "5153",
                        module: "Techniques de communication",
                        tot: "45",
                        cr: "22.5",
                        enseignant_cr: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        td: "",
                        enseignant_td: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        tp: "22.5",
                        enseignant_tp: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        ci: "",
                        enseignant_ci: (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select enseignant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Enseignant_Cours</SelectLabel>
                                        <SelectItem value="1">Sekma manel</SelectItem>
                                        <SelectItem value="2">Ilhem Blel</SelectItem>
                                        <SelectItem value="3">Babba Raja</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ),
                        cc: false,
                        rm: true,
                    },
                ],
            },
        ],
        []
    )
    return (
        <div className="Diplome_Table">
            <div className="DiplomeTitle">
                <p>Diplome ING_INF </p> <ChevronRight /> <p>Semestre 1</p>
            </div>

            <Table columns={columns} data={data} />
        </div>
    )
}

export default GestionDiplomes
