import axios from "axios";
import { useState } from "react";
import { IncomingResult } from "../utils";

axios.defaults.baseURL = "http://localhost:4000";

const useRequest = () => {
  const [response, setResponse] = useState<IncomingResult>({});
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState<boolean>(false);

  const postData = async (incomingData: any) => {
    try {
      setIsloading(true);
      const { data } = await axios.post<IncomingResult>("", {
        ...incomingData,
      });
      setResponse(data);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsloading(false);
    }
  };

  return { postData, response, error, isLoading };
};

export default useRequest;
