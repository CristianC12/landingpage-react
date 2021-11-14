import React from "react";
import backgroundvid from './img/backgroundvid.mp4'

function FundoPagina() {
  return (
    <section>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={backgroundvid} type="video/mp4" />
      </video>
    </section>
  );
}
export default FundoPagina;
