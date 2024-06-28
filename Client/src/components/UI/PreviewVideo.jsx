/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/display-name
const PreviewVideo = React.forwardRef(({ src }, ref) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-all">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div
        ref={ref}
        className="relative z-10"
        style={{
          width: "100%",
          maxWidth: "90vw",
          minWidth: "400px",
          height: "80vh",
        }}
      >
        <iframe
          className="w-full h-full shadow-2xl"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
});

export default PreviewVideo;
