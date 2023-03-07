import axios from "axios";
import { useEffect, useState } from "react";

function useApi({ url }) {

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios({ method: "get", url: `https://api.themoviedb.org/3/${url}` })
      setData(response.data.results);
    };
    getData();
  }, [url]);


  return data
}

export default useApi