// CSS
import "./Downloader.css";

// Hooks
import { useState, useEffect } from "react";
import { useVideoFetch } from "../hooks/useVideoFetch";


const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  // console.log(videoUrl);

  const handleDownload = () => {
    let url = videoUrl;

    let parseToId = url.split("v=");
    parseToId = parseToId[1].split("&");

    let videoId = parseToId[0];
    setVideoUrl(videoId);

    let $iframe = document.createElement("iframe");
    let $download_div = document.querySelector(".download");
    let $convert_button = document.querySelector("#convert");
    let $tip = document.querySelector(".tip");

    {/* <iframe src="//ytmp3.mobi/button-api/#${videoUrl}|mp3|8E00E5|F3DBEE" id="download"></iframe> */}
    $iframe.src = `//ytmp3.mobi/button-api/#${videoId}|mp3|8E00E5|F3DBEE`;
    $download_div.appendChild($iframe);

    $convert_button.classList.add("hide");
    $tip.classList.remove("hide");
  }

  const handleReaload = () => {
    window.location.reload(false);
  }

  return (
    <div className="downloader_container">
        <div className="downloader">
            <input type="text" placeholder="Youtube URL..." onChange={(e) => setVideoUrl(e.target.value)}/>
      
            <div className="download">
              <button id="convert" onClick={() => handleDownload()}>Convert</button>
            </div>
        </div>

        <div className="tip hide">
          <p>Tip: Left click, wait, middle click</p>
          <span onClick={handleReaload}>Convert another</span>
        </div>
    </div>
  )
}

export default Downloader