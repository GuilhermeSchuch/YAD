// Hooks
import { useState, useEffect } from "react";


export const useVideoFetch = (id) => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);




  console.log(video);

  return { video, loading, error };
};