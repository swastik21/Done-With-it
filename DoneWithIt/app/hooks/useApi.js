import { useState } from "react"

export default useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading,setLoading] = useState(false)

    const request = async () => {
        setLoading(true)
        const response = await apiFunc()
        if (!response.ok) {
            setError(true);
            console.log(response.problem)
        }
        else {
            setError(false);
            setLoading(false)
            setData(response.data)
        }
        console.log(error)
    }

    return { data, error, loading, request }
}