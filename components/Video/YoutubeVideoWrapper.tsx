import { KeyTextField } from "@prismicio/client";
import React, { ReactNode, useState } from "react";

interface IYoutubeVideoWrapper {
  videoId: KeyTextField
}

export default function YoutubeVideoWrapper({videoId}: IYoutubeVideoWrapper) {
  return <div className="w-full">
    <iframe
      width='100%'
      height={400}
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={"Youtube video"}
      className="aspect-[16/9] h-full w-full p-0"
    /> 
  </div>;
}
