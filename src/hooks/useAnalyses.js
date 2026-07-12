import { useEffect, useState } from "react";

import { getAnalyses } from "../utils/storage";

function useAnalyses() {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    setAnalyses(getAnalyses());
  }, []);

  return analyses;
}

export default useAnalyses;
