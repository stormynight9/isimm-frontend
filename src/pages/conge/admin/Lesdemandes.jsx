import React, { useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import Box from "@mui/material/Box"
import TableRow from "@mui/material/TableRow"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import "./style1.css"
import {
    faUmbrellaBeach,
    faRing,
    faSadTear,
    faArrowDownWideShort,
    faMoneyBillAlt,
    faDollarSign,
    faNotesMedical,
    faGraduationCap,
    faBaby,
    faSearch,
} from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Avatar, AvatarImage } from "@/components/ui/Avatar"
import { NavLink as Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export const Badge1 = ({ status, children }) => {
    const BadgeClassName = cn({
        "inline-block px-4 rounded-full font-medium capitalize": true,
        "bg-[#fae9c2] text-[#542b14]": status === "yellow",
        "bg-[#e6f4ea] text-[#1f5d3d]": status === "green",
        "bg-[#f4d7d7] text-[#5d1f1f]": status === "red",
    })

    return React.createElement("div", { className: BadgeClassName }, children)
}

export const PrimaryNav = styled.nav`
    z-index: 14;
    height: 50px;
    display: flex;
    background: #ffffff;
    justify-content: right;

    padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
    color: #fff;
    display: flex;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    padding: 0 1.2rem;
    height: 100%;
    &.active {
        color: #000000;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -25px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

const handleRefuse = (row) => {
    // Perform logic to refuse the request for the row
    //console.log(`Refusing request for row with id ${row.id}`)
}
const handleAccept = (row) => {
    // Perform logic to accept the request for the row
    //console.log(`Accepting request for row with id ${row.id}`)
}

const getIconForType = (type) => {
    switch (type) {
        case "Vacances":
            return <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" style={{ color: "skyblue" }} />
        case "Congé maladie":
            return <FontAwesomeIcon icon={faNotesMedical} size="2x" style={{ color: "#FF0000" }} />
        case "Congé formation":
            return <FontAwesomeIcon icon={faGraduationCap} size="2x" />
        case "Congé maternité":
            return <FontAwesomeIcon icon={faBaby} size="2x" style={{ color: "	#F08080" }} />
        case "Congé payé":
            return <FontAwesomeIcon icon={faDollarSign} size="2x" />
        case "Congé sans solde":
            return <FontAwesomeIcon icon={faMoneyBillAlt} size="2x" style={{ color: "orange" }} />
        case "Congé paternité":
            return <FontAwesomeIcon icon={faBaby} size="2x" style={{ color: "	#F08080" }} />
        case "Congé de mariage":
            return <FontAwesomeIcon icon={faRing} size="2x" style={{ color: " #ffd700 " }} />
        case "Congé de deuil":
            return <FontAwesomeIcon icon={faSadTear} size="2x" />
        default:
            return null
    }
}
const Button = styled.button`
    color: white;
    font-size: 15px;
    padding: 4px 4px;
    border-radius: 3px;
    margin: 4px 0px;
    cursor: pointer;
`

const rows = [
    {
        id: "1",
        name: "Doe john",
        email: "daoe@gmail.com",
        departement: "informatique",
        datedemande: "09/04/2023",
        debut: "12/10/2023",
        fin: "10/10/2023",
        nbjours: "3",
        type: "Vacances",
    },
    {
        id: "2",
        name: "Amal maatoug",
        email: "amal@gmail.com",
        departement: "informatique",
        datedemande: "03/04/2023",
        debut: "12/10/2023",
        fin: "05/10/2023",
        nbjours: "3",
        type: "Congé maladie",
    },
    {
        id: "3",
        name: "Imen kh",
        email: "daoe@gmail.com",
        departement: "informatique",
        datedemande: "02/04/2023",
        debut: "12/10/2023",
        fin: "22/11/2023",
        nbjours: "40",
        type: "Congé maternité",
    },
    {
        id: "4",
        name: "foulen fouleni",
        email: "foulen@gmail.com",
        departement: "informatique",
        datedemande: "12/04/2023",
        debut: "12/10/2023",
        fin: "15/10/2023",
        nbjours: "5",
        type: "Congé de deuil",
    },
    {
        id: "5",
        name: "foulen fouleni",
        email: "foulen@gmail.com",
        departement: "informatique",
        datedemande: "01/04/2023",
        debut: "12/10/2023",
        fin: "15/10/2023",
        nbjours: "5",
        type: "Congé formation",
    },
    {
        id: "6",
        name: "foulen fouleni",
        email: "foulen@gmail.com",
        departement: "informatique",
        datedemande: "08/04/2023",
        debut: "12/04/2023",
        fin: "15/10/2023",
        nbjours: "5",
        type: "Congé de mariage",
    },
    {
        id: "7",
        name: "foulen fouleni",
        email: "foulen@gmail.com",
        departement: "informatique",
        datedemande: "03/04/2023",
        debut: "12/10/2023",
        fin: "15/10/2023",
        nbjours: "5",
        type: "Congé sans solde",
    },
    {
        id: "8",
        name: "foulen fouleni",
        email: "foulen@gmail.com",
        departement: "informatique",
        datedemande: "07/04/2023",
        debut: "12/10/2023",
        fin: "15/10/2023",
        nbjours: "5",
        type: "Congé paternité",
    },
    {
        id: "9",
        name: "foulen fouleni",
        email: "foulen@gmail.com",
        departement: "informatique",
        datedemande: "10/04/2023",
        debut: "12/10/2023",
        fin: "15/10/2023",
        nbjours: "5",
        type: "Congé maladie",
    },
    {
        id: "10",
        name: "foulen fouleni",
        email: "foulen@gmail.com",
        departement: "informatique",
        datedemande: "06/04/2023",
        debut: "12/10/2023",
        fin: "15/10/2023",
        nbjours: "5",
        type: "Congé payé",
    },
]

function App() {
    const [currentPage1, setCurrentPage1] = useState(1)
    const [currentPage2, setCurrentPage2] = useState(1)
    const [currentPage3, setCurrentPage3] = useState(1)
    const [rowsPerPage] = useState(5)

    const indexOfLastRow1 = currentPage1 * rowsPerPage
    const indexOfFirstRow1 = indexOfLastRow1 - rowsPerPage
    const currentRows1 = rows.slice(indexOfFirstRow1, indexOfLastRow1)

    const handlePageClick1 = (pageNumber) => {
        setCurrentPage1(pageNumber)
    }

    const renderPagination1 = () => {
        const pageNumbers = Math.ceil(rows.length / rowsPerPage)

        return (
            <ul className="pagination">
                <li
                    className={currentPage1 === 1 ? "page-item disabled" : "page-item"}
                    onClick={() => handlePageClick1(currentPage1 - 1)}
                >
                    <button className="page-link">❰</button>
                </li>
                {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((number) => (
                    <li
                        key={number}
                        className={currentPage1 === number ? "page-item active" : "page-item"}
                        onClick={() => handlePageClick1(number)}
                    >
                        <button className="page-link">{number}</button>
                    </li>
                ))}
                <li
                    className={currentPage1 === pageNumbers ? "page-item disabled" : "page-item"}
                    onClick={() => handlePageClick1(currentPage1 + 1)}
                >
                    <button className="page-link">❱</button>
                </li>
            </ul>
        )
    }
    const indexOfLastRow2 = currentPage2 * rowsPerPage
    const indexOfFirstRow2 = indexOfLastRow2 - rowsPerPage
    const currentRows2 = rows.slice(indexOfFirstRow2, indexOfLastRow2)

    const handlePageClick2 = (pageNumber) => {
        setCurrentPage2(pageNumber)
    }

    const renderPagination2 = () => {
        const pageNumbers = Math.ceil(rows.length / rowsPerPage)

        return (
            <ul className="pagination">
                <li
                    className={currentPage2 === 1 ? "page-item disabled" : "page-item"}
                    onClick={() => handlePageClick2(currentPage2 - 1)}
                >
                    <button className="page-link">❰</button>
                </li>
                {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((number) => (
                    <li
                        key={number}
                        className={currentPage2 === number ? "page-item active" : "page-item"}
                        onClick={() => handlePageClick2(number)}
                    >
                        <button className="page-link">{number}</button>
                    </li>
                ))}
                <li
                    className={currentPage2 === pageNumbers ? "page-item disabled" : "page-item"}
                    onClick={() => handlePageClick2(currentPage2 + 1)}
                >
                    <button className="page-link">❱</button>
                </li>
            </ul>
        )
    }
    const indexOfLastRow3 = currentPage3 * rowsPerPage
    const indexOfFirstRow3 = indexOfLastRow3 - rowsPerPage
    const currentRows3 = rows.slice(indexOfFirstRow3, indexOfLastRow3)

    const handlePageClick3 = (pageNumber) => {
        setCurrentPage3(pageNumber)
    }

    const renderPagination3 = () => {
        const pageNumbers = Math.ceil(rows.length / rowsPerPage)

        return (
            <ul className="pagination">
                <li
                    className={currentPage3 === 1 ? "page-item disabled" : "page-item"}
                    onClick={() => handlePageClick3(currentPage3 - 1)}
                >
                    <button className="page-link">❰</button>
                </li>
                {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((number) => (
                    <li
                        key={number}
                        className={currentPage3 === number ? "page-item active" : "page-item"}
                        onClick={() => handlePageClick3(number)}
                    >
                        <button className="page-link">{number}</button>
                    </li>
                ))}
                <li
                    className={currentPage3 === pageNumbers ? "page-item disabled" : "page-item"}
                    onClick={() => handlePageClick3(currentPage3 + 1)}
                >
                    <button className="page-link">❱</button>
                </li>
            </ul>
        )
    }
    //search
    const [search, setSearch] = useState("")
    const [search1, setSearch1] = useState("")
    const [search2, setSearch2] = useState("")
    /*Tabs*/
    const theme = useTheme()
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const handleChange1 = (event, newValue) => {
        setValue1(newValue)
    }
    const handleChangeIndex1 = (index) => {
        setValue1(index)
    }
    const handleChange2 = (event, newValue) => {
        setValue2(newValue)
    }

    //filter
    const sortedRows = [...rows]
    const [defaut, setDefaut] = useState(true)
    const [recent, setRecent] = useState(false)
    const [ancient, setAncient] = useState(false)
    const [sortRows, setSortRows] = useState(sortedRows)
    const [sorted, setSorted] = useState(sortRows.slice())
    useEffect(() => {
        if (recent) {
            setSortRows(
                sortedRows.sort((a, b) => {
                    const D1 = new Date(a.datedemande)
                    const D2 = new Date(b.datedemande)
                    return D1 - D2
                })
            )
        }
        if (ancient) {
            setSortRows(
                sortedRows.sort((a, b) => {
                    const D1 = new Date(a.datedemande)
                    const D2 = new Date(b.datedemande)
                    return D2 - D1
                })
            )
        }
        if (defaut) {
            setSortRows(rows)
        }
    }, [ancient, recent, defaut, currentRows1, sorted, sortedRows])

    useEffect(() => {
        setSorted(sortRows.slice(indexOfFirstRow1, indexOfLastRow1))
    }, [sorted, sortRows, indexOfFirstRow1, indexOfLastRow1])

    return (
        <div>
            {/*card*/}
            <div class="container mx-auto grid px-6">
                <div class="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <div class="shadow-xs flex items-center rounded-lg bg-white p-4">
                        <div class="mr-4 rounded-full bg-blue-100 p-3 text-blue-500">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="mb-2 text-sm font-medium text-gray-600">Demandes en total</p>
                            <p class="text-lg font-semibold text-gray-700">38</p>
                        </div>
                    </div>
                    <div class="shadow-xs flex items-center rounded-lg bg-white p-4">
                        <div class="mr-4 rounded-full bg-green-100 p-3 text-green-500">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="mb-2 text-sm font-medium text-gray-600">Demandes acceptées</p>
                            <p class="text-lg font-semibold text-gray-700">12</p>
                        </div>
                    </div>
                    <div class="shadow-xs flex items-center rounded-lg bg-white p-4">
                        <div class="mr-4 rounded-full bg-red-100 p-3 text-red-500">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="mb-2 text-sm font-medium text-gray-600">Demandes refusées</p>
                            <p class="text-lg font-semibold text-gray-700">20</p>
                        </div>
                    </div>
                    <div class="shadow-xs flex items-center rounded-lg bg-white p-4">
                        <div class="mr-4 rounded-full bg-yellow-100 p-3 text-yellow-500">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="mb-2 text-sm font-medium text-gray-600">
                                Demandes en attente
                            </p>
                            <p class="text-lg font-semibold text-gray-700">{rows.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Container
                style={{
                    backgroundColor: "white",
                }}
            >
                <br></br>

                <b className=" p-4 text-left  uppercase" style={{ color: "#334155" }}>
                    En attente de validation
                </b>
                <TableContainer
                    sx={{ minHeight: 700 }}
                    aria-label="table in dashboard"
                    style={{ width: "auto" }}
                >
                    <br></br>
                    <br></br>
                    <div style={{ display: "flex" }}>
                        <div>
                            <FontAwesomeIcon
                                icon={faSearch}
                                style={{
                                    cursor: "pointer",
                                    fontSize: "20px",
                                    color: "#334155",
                                    marginRight: "5px",
                                }}
                            ></FontAwesomeIcon>
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                className="form-control border-0 bg-transparent"
                                placeholder="Search..."
                                style={{ marginRight: "300px" }}
                            />
                        </div>

                        <div className="dropdown" style={{ marginLeft: "400px" }}>
                            <button className="dropbtn" style={{ display: "flex" }}>
                                <FontAwesomeIcon
                                    icon={faArrowDownWideShort}
                                    style={{ fontSize: "20px", color: "#334155" }}
                                ></FontAwesomeIcon>
                                <h2 style={{ color: "#334155" }}>Filter</h2>
                            </button>
                            <div className="dropdown-content" style={{ width: 70 }}>
                                <button
                                    onClick={(e) => {
                                        setDefaut(true)
                                        setRecent(false)
                                        setAncient(false)
                                    }}
                                >
                                    Par défaut
                                </button>
                                <button
                                    onClick={(e) => {
                                        setRecent(true)
                                        setDefaut(false)
                                        setAncient(false)
                                    }}
                                >
                                    Les plus récentes d'abord
                                </button>
                                <button
                                    onClick={(e) => {
                                        setAncient(true)
                                        setDefaut(false)
                                        setRecent(false)
                                    }}
                                >
                                    Les plus anciennes d'abord
                                </button>
                            </div>
                        </div>
                    </div>

                    <TableHead>
                        <TableRow style={{ backgroundColor: "#F8F8FF" }}>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Département</TableCell>
                            <TableCell>Date Demande</TableCell>
                            <TableCell>Date début</TableCell>
                            <TableCell>Date fin</TableCell>
                            <TableCell>Nombre de jours</TableCell>
                            <TableCell width="300">Type congés</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sorted
                            .filter((row) => {
                                return search.toLowerCase() === ""
                                    ? row
                                    : row.name.toLowerCase().includes(search)
                            })
                            .map((row) => (
                                <TableRow
                                    hover
                                    key={row.id}
                                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: "0.875rem !important",
                                                }}
                                            >
                                                {row.id}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.departement}</TableCell>
                                    <TableCell>{row.datedemande}</TableCell>
                                    <TableCell>{row.debut}</TableCell>
                                    <TableCell>{row.fin}</TableCell>
                                    <TableCell>{row.nbjours}</TableCell>
                                    <TableCell>
                                        <div style={{ display: "flex" }}>
                                            <span style={{ marginRight: "10px" }}>
                                                {getIconForType(row.type)}
                                            </span>
                                            <span>{row.type}</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <div style={{ display: "inline-flex" }}>
                                            <Button
                                                style={{
                                                    backgroundColor: "#22C55E",
                                                    marginRight: "10px",
                                                }}
                                                onClick={() => handleAccept(row)}
                                            >
                                                Accepter
                                            </Button>
                                            <Button
                                                style={{
                                                    backgroundColor: "#EF4444",
                                                    marginLeft: "10px",
                                                }}
                                                onClick={() => handleRefuse(row)}
                                            >
                                                Refuser
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                    {renderPagination1()}
                </TableContainer>
            </Container>
            <br></br>
            <br></br>
            <Container
                maxWidth="s"
                style={{
                    backgroundColor: "white",
                }}
            >
                <Box sx={{ bgcolor: "background.paper", width: "auto" }}>
                    <AppBar position="static">
                        <Tabs
                            value={value1}
                            onChange={handleChange1}
                            indicatorColor="white"
                            style={{ backgroundColor: "#334155" }}
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Les demandes acceptées" />
                            <Tab label="Les demandes refusées" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={value1}
                        onChangeIndex={handleChangeIndex1}
                    >
                        <TabPanel value={value1} index={0} dir={theme.direction}>
                            <TableContainer sx={{ minHeight: 600 }} aria-label="table in dashboard">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            color: "#334155",
                                            marginRight: "5px",
                                        }}
                                    ></FontAwesomeIcon>
                                    <input
                                        type="text"
                                        onChange={(e) => setSearch1(e.target.value)}
                                        className="form-control border-0 bg-transparent"
                                        placeholder="Search..."
                                        style={{ marginRight: "300px" }}
                                    />
                                </div>
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "#F8F8FF", width: "auto" }}>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Nom</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Département</TableCell>
                                        <TableCell>Date Demande</TableCell>
                                        <TableCell>Date début</TableCell>
                                        <TableCell>Date fin</TableCell>
                                        <TableCell>Nombre de jours</TableCell>
                                        <TableCell width="300">Type congés</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentRows2
                                        .filter((row) => {
                                            return search1.toLowerCase() === ""
                                                ? row
                                                : row.name.toLowerCase().includes(search1)
                                        })
                                        .map((row) => (
                                            <TableRow
                                                hover
                                                key={row.id}
                                                sx={{
                                                    "&:last-of-type td, &:last-of-type th": {
                                                        border: 0,
                                                    },
                                                }}
                                            >
                                                <TableCell
                                                    sx={{
                                                        py: (theme) =>
                                                            `${theme.spacing(0.5)} !important`,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "100",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontWeight: 500,
                                                                fontSize: "0.875rem !important",
                                                            }}
                                                        >
                                                            {row.id}
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell>{row.name}</TableCell>
                                                <TableCell>{row.email}</TableCell>
                                                <TableCell>{row.departement}</TableCell>
                                                <TableCell>{row.datedemande}</TableCell>
                                                <TableCell>{row.debut}</TableCell>
                                                <TableCell>{row.fin}</TableCell>
                                                <TableCell>{row.nbjours}</TableCell>
                                                <TableCell>
                                                    <div style={{ display: "flex" }}>
                                                        <span style={{ marginRight: "10px" }}>
                                                            {getIconForType(row.type)}
                                                        </span>
                                                        <span>{row.type}</span>
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <Badge1 status="green">Acceptée</Badge1>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                                {renderPagination2()}
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value={value1} index={1} dir={theme.direction}>
                            <TableContainer sx={{ minHeight: 600 }} aria-label="table in dashboard">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            color: "#334155",
                                            marginRight: "5px",
                                        }}
                                    ></FontAwesomeIcon>
                                    <input
                                        type="text"
                                        onChange={(e) => setSearch2(e.target.value)}
                                        className="form-control border-0 bg-transparent"
                                        placeholder="Search..."
                                        style={{ marginRight: "300px" }}
                                    />
                                </div>
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "#F8F8FF", width: "auto" }}>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Nom</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Département</TableCell>
                                        <TableCell>Date Demande</TableCell>
                                        <TableCell>Date début</TableCell>
                                        <TableCell>Date fin</TableCell>
                                        <TableCell>Nombre de jours</TableCell>
                                        <TableCell width="300">Type congés</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentRows3
                                        .filter((row) => {
                                            return search2.toLowerCase() === ""
                                                ? row
                                                : row.name.toLowerCase().includes(search2)
                                        })
                                        .map((row) => (
                                            <TableRow
                                                hover
                                                key={row.id}
                                                sx={{
                                                    "&:last-of-type td, &:last-of-type th": {
                                                        border: 0,
                                                    },
                                                }}
                                            >
                                                <TableCell
                                                    sx={{
                                                        py: (theme) =>
                                                            `${theme.spacing(0.5)} !important`,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "100",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontWeight: 500,
                                                                fontSize: "0.875rem !important",
                                                            }}
                                                        >
                                                            {row.id}
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell>{row.name}</TableCell>
                                                <TableCell>{row.email}</TableCell>
                                                <TableCell>{row.departement}</TableCell>
                                                <TableCell>{row.datedemande}</TableCell>
                                                <TableCell>{row.debut}</TableCell>
                                                <TableCell>{row.fin}</TableCell>
                                                <TableCell>{row.nbjours}</TableCell>
                                                <TableCell>
                                                    <div style={{ display: "flex" }}>
                                                        <span style={{ marginRight: "10px" }}>
                                                            {getIconForType(row.type)}
                                                        </span>
                                                        <span>{row.type}</span>
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <Badge1 status="red">Refusée</Badge1>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                                {renderPagination3()}
                            </TableContainer>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </Container>
            <br></br>
            <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: 500 }}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value2}
                    onChange={handleChange2}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: "divider" }}
                >
                    <Tab
                        label="Congés d'aujourd'hui (2)"
                        sx={{
                            "&.Mui-selected": { color: "#0f172a" },
                            fontFamily: "inherit",
                        }}
                    />
                    <Tab
                        label="Congés planifiés (1)"
                        sx={{
                            "&.Mui-selected": { color: "#0f172a" },
                            fontFamily: "inherit",
                        }}
                    />
                </Tabs>
                {/* cards mta3 le3bed eli en congés lyoum */}
                <TabPanel value={value2} index={0}>
                    <section class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-4">
                        <div class="sahdow-lg flex w-full flex-col overflow-hidden rounded-lg bg-white md:flex-row">
                            <div className="items-right flex gap-3">
                                <Avatar style={{ width: 80, height: 70, marginRight: "20px" }}>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </div>
                            <div class="w-full space-y-2 p-6 text-left md:w-3/5 md:p-4">
                                <p class="text-xl font-bold text-gray-700">John Dao</p>
                                <p class="text-base font-normal text-gray-400">Informatique</p>
                                <br></br>
                                <p>Est absent de 12 au 15 Octobre 2023.</p>
                                <br></br>
                                <b>Raison:</b>{" "}
                                <p style={{ backgroundColor: "purple", color: "white" }}>
                                    Congés payé
                                </p>
                                <br></br>
                                <p class="text-base font-normal text-gray-400">
                                    C'est 2 jours hors du bureau.
                                </p>
                                <div class="flex justify-start space-x-2">
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/*******personne2*******/}
                            <div className="items-right flex gap-3">
                                <Avatar style={{ width: 80, height: 70, marginRight: "20px" }}>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </div>
                            <div class="w-full space-y-2 p-6 text-left md:w-3/5 md:p-4">
                                <p class="text-xl font-bold text-gray-700">Foulen Fouleni</p>
                                <p class="text-base font-normal text-gray-400">Informatique</p>
                                <br></br>
                                <p>Est absent de 12 au 22 Octobre 2023.</p>
                                <br></br>
                                <b>Raison:</b>{" "}
                                <p style={{ backgroundColor: "green", color: "white" }}>
                                    Congés paternité
                                </p>
                                <br></br>
                                <p class="text-base font-normal text-gray-400">
                                    C'est 10 jours hors du bureau.
                                </p>
                                <div class="flex justify-start space-x-2">
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </TabPanel>
                <TabPanel value={value2} index={1}>
                    <section class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-4">
                        <div class="sahdow-lg flex w-full flex-col overflow-hidden rounded-lg bg-white md:flex-row">
                            <div className="items-right flex gap-3">
                                <Avatar style={{ width: 80, height: 70, marginRight: "20px" }}>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </div>
                            <div class="w-full space-y-2 p-6 text-left md:w-3/5 md:p-4">
                                <p class="text-xl font-bold text-gray-700">François charlot</p>
                                <p class="text-base font-normal text-gray-400">Informatique</p>
                                <br></br>
                                <p>Est absent de 14 au 19 Octobre 2023.</p>
                                <br></br>
                                <b>Raison:</b>{" "}
                                <p style={{ backgroundColor: "red", color: "white" }}>
                                    Congés maladie
                                </p>
                                <br></br>
                                <p class="text-base font-normal text-gray-400">
                                    C'est 5 jours hors du bureau.
                                </p>
                                <div class="flex justify-start space-x-2">
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-600">
                                        <svg
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </TabPanel>
            </Box>
        </div>
    )
}

export default App
