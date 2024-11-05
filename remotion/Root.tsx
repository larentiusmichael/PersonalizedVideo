// import { Composition } from "remotion";
// import { Main } from "./MyComp/Main";
// import {
//   COMP_NAME,
//   defaultMyCompProps,
//   DURATION_IN_FRAMES,
//   VIDEO_FPS,
//   VIDEO_HEIGHT,
//   VIDEO_WIDTH,
// } from "../types/constants";
// import { NextLogo } from "./MyComp/NextLogo";

// export const RemotionRoot: React.FC = () => {
//   return (
//     <>
//       <Composition
//         id={COMP_NAME}
//         component={Main}
//         durationInFrames={DURATION_IN_FRAMES}
//         fps={VIDEO_FPS}
//         width={VIDEO_WIDTH}
//         height={VIDEO_HEIGHT}
//         defaultProps={defaultMyCompProps}
//       />
//       <Composition
//         id="NextLogo"
//         component={NextLogo}
//         durationInFrames={300}
//         fps={30}
//         width={140}
//         height={140}
//         defaultProps={{
//           outProgress: 0,
//         }}
//       />
//     </>
//   );
// };

"use client";

import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "../remotion/HelloWorld";
import React from "react";

// Function to get a query parameter from the URL
function getQueryParam(key: string, defaultValue: string): string {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key) || defaultValue;
  }
  return defaultValue;
}

// Store the query parameters in memory
const queryParams = {
  username: getQueryParam("username", "new user"),
  monthYear: getQueryParam("monthYear", "January 2024"),
  totalAmount: getQueryParam("totalAmount", "0.00"),
  dueDate: getQueryParam("dueDate", "December 31, 2023"),
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          titleText1: queryParams.username,
          titleText2: queryParams.monthYear,
          titleText3: queryParams.totalAmount,
          titleText4: queryParams.dueDate,
          titleColor: "#ffffff",
        }}
      />
    </>
  );
};
