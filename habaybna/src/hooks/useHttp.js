import { useCallback,useState } from "react";
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3001";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const sendRequest = useCallback (async (axiosParams,callback)=> {
    try {
      const resp = await axios.request(axiosParams)
      setIsLoading(false)
      callback(resp.data)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    } 
  },[])


  return {isLoading,sendRequest}

};

export default useHttp;
