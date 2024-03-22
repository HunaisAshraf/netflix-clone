import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../utils/constants";

const Video = () => {
  const [videoId, setVideoId] = useState("");
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setVideoId(response?.data?.results[0]?.key);
        // console.log(response.data)
        // navigate(`/video/${response?.data?.key}`);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-4 md:px-14 md:py-24">
      <iframe
        width="1400"
        height="720"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
