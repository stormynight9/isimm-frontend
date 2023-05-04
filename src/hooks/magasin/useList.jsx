import { useState } from "react";
import useFetch from "./useFetch";

export default function useList({prefix, name}) {
    const [list, setList] = useState([]);
    useFetch({ url: `localhost:3000/${prefix}/${name}`, method: 'GET', onSuccess: setList });
    return list;
}