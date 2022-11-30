import axios from 'axios'
import { useCallback, useState } from 'react';
axios.defaults.baseURL = "http://localhost:4000/";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    const sendRequest = useCallback(async (axiosParams,callback) => {
        try {
            const resp = await axios.request(axiosParams);
            setIsLoading(false)
            callback(resp.data,null)
        } catch(exp) {
            console.log('error happened ::',exp);
            // setError(null,exp.message)
            callback(null,exp.message )
            setIsLoading(false)
        }
    },[]);


    return {isLoading,sendRequest}
}

export default useHttp;