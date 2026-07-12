import { useEffect, useState } from "react";

import { getAnalyses } from "../utils/storage";

function useAnalyses() {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    const data = getAnalyses();

    setAnalyses(data);
  }, []);

  return analyses;
}

export default useAnalyses;
