import axios from "axios";
import { useEffect, useState } from "react";

const endpoint = "http://localhost:8000/main/";

export function useRequest() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getTest();
      setData(result);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return { isLoading, data };
}

async function getTest() {
  try {
    const resp = await axios.get(endpoint);
    console.log("Response:", resp.data);
    return resp.data; // Return the response data
  } catch (error) {
    console.error("Error:", error);
    throw error; // Propagate the error
  }
}
