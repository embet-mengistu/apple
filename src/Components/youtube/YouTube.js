import React, { useState, useEffect } from "react";
import "./youtube.css";

function YouTube() {
  const [YoutubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&key=AIzaSyBulvboKZVOzV7Jc_0Zixih_UObHBke6yU
  `
    )
      .then((res) => res.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      });
  }, []);

  console.log(YoutubeVideos);
  return (
    <div>
      <div className="">
        <div className="">
          <div>
            <div className="title">
              <h2>Latest Videos</h2>
            </div>

            <div className="videoWrapper">
              {YoutubeVideos?.map((singleVideos) => {
                let vidId = singleVideos.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                let videoWrapper = (
                  <div key={vidId} className="">
                    <div className="videoLink">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideos.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideos.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideos.snippet.description}
                    </div>
                  </div>
                );
                return videoWrapper;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTube;
