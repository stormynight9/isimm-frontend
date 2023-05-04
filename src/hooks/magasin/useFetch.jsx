import fetchData from "@/lib/magasin/fetchData";
import { useEffect, useState } from "react";

export default async function useFetch({url, method, body, headers, onError, onSuccess}) {
    const [data, setData] = useState();
    useEffect(() => {
        fetchData({url, method, body, headers, onSuccess, onError});
    }, [url, method, body, headers, onError, onSuccess]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return data;
}   