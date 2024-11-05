// "use client";

// import { Player } from "@remotion/player";
// import type { NextPage } from "next";
// import React, { useMemo, useState } from "react";
// import { Main } from "../remotion/MyComp/Main";
// import {
//   CompositionProps,
//   defaultMyCompProps,
//   DURATION_IN_FRAMES,
//   VIDEO_FPS,
//   VIDEO_HEIGHT,
//   VIDEO_WIDTH,
// } from "../types/constants";
// import { z } from "zod";
// import { RenderControls } from "../components/RenderControls";
// import { Tips } from "../components/Tips/Tips";
// import { Spacing } from "../components/Spacing";

// const container: React.CSSProperties = {
//   maxWidth: 768,
//   margin: "auto",
//   marginBottom: 20,
// };

// const outer: React.CSSProperties = {
//   borderRadius: "var(--geist-border-radius)",
//   overflow: "hidden",
//   boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
//   marginBottom: 40,
//   marginTop: 60,
// };

// const player: React.CSSProperties = {
//   width: "100%",
// };

// const Home: NextPage = () => {
//   const [text, setText] = useState<string>(defaultMyCompProps.title);

//   const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
//     return {
//       title: text,
//     };
//   }, [text]);

//   return (
//     <div>
//       <div style={container}>
//         <div className="cinematics" style={outer}>
//           <Player
//             component={Main}
//             inputProps={inputProps}
//             durationInFrames={DURATION_IN_FRAMES}
//             fps={VIDEO_FPS}
//             compositionHeight={VIDEO_HEIGHT}
//             compositionWidth={VIDEO_WIDTH}
//             style={player}
//             controls
//             autoPlay
//             loop
//           />
//         </div>
//         <RenderControls
//           text={text}
//           setText={setText}
//           inputProps={inputProps}
//         ></RenderControls>
//         <Spacing></Spacing>
//         <Spacing></Spacing>
//         <Spacing></Spacing>
//         <Spacing></Spacing>
//         <Tips></Tips>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { HelloWorld, myCompSchema } from "../remotion/HelloWorld";
import { Player } from "@remotion/player";
import React from "react";

function getQueryParam(key: string, defaultValue: string): string {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key) || defaultValue;
  }
  return defaultValue;
}

const queryParams = {
  username: getQueryParam("username", "new user"),
  monthYear: getQueryParam("monthYear", "January 2024"),
  totalAmount: getQueryParam("totalAmount", "0.00"),
  dueDate: getQueryParam("dueDate", "December 31, 2023"),
};

const RemotionRoot: React.FC = () => {
  return (
    <>
      <Player
        component={HelloWorld}
        durationInFrames={750}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        inputProps={{
          titleText1: queryParams.username,
          titleText2: queryParams.monthYear,
          titleText3: queryParams.totalAmount,
          titleText4: queryParams.dueDate,
          titleColor: "#ffffff",
        }}
        controls
        allowFullscreen
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default RemotionRoot;
