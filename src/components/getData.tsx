import React, { useEffect, useState } from "react";
import axios from "axios";


function useData(url: any) {
    const [temp, setTemp] = useState<any>(null);
    // const [data, setData] = useState<[]>;
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
    }, [url]);
    console.log("bonjour");
    console.log(data);

    return { data, error };
}


export default useData;