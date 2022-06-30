import axios from "axios";
import { useEffect, useState } from "react"


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoadig] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetch = async () => {
            await axios
              .get("http://localhost:21262/listar")
              .then((response) => {
                setLoadig(false);
                setData(response.data);
              })
              .catch((err) => {
                setLoadig(false);
                setError(err);
              });
        }

        fetch()

    }, [url])

    return { data, loading, error }
}

export { useFetch }