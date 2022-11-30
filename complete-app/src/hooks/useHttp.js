import axios from 'axios'
import { useCallback, useState } from 'react';
axios.defaults.baseURL = "http://localhost:3001";

const useHttp = () => {
  const [isLoading,setIsLoading] = useState(true);

  const sendRequest = useCallback(async (axiosParams,callback) => {

    try {
      const resp = await axios.request(axiosParams);
      setIsLoading(false);
      callback(resp)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }

    return {isLoading,sendRequest}

  },[]);
}

export default useHttp