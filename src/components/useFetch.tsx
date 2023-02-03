import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); // set loading to true
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    // Function to call when button is clicked
    const refetch = () => {
        setLoading(true); // set loading to true
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    // axios.get('https://www.metaweather.com/api/location/2459115/').then(res => console.log(res.data));

    return { data, loading, error, refetch };
}

// function getMethod(url: any) {
//     const [data, setData] = useState<any>(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         setLoading(true); // set loading to true
//         axios
//             .get(url)
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, [url]);

//     console.log("fonction dataGet APi");
//     console.log(data);

//     return { data, loading, error };
// }

export default useFetch;