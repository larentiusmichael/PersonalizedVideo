"use client";

import { CityWithCar } from "./HelloWorld/CityWithCar";
import { HospitalWithAmbulance } from "./HelloWorld/HospitalWithAmbulance";
import { MountainWithBirds } from "./HelloWorld/MountainWithBirds";
import { LandmarksWithPlane } from "./HelloWorld/LandmarksWithPlane";
import { FlowersWithButterfly } from "./HelloWorld/FlowersWithButterfly";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { AbsoluteFill, Sequence, Audio } from "remotion";

// Updated paths to point to the public directory
const musicPath = "../assets/music2.mp3";

export const myCompSchema = z.object({
  titleText1: z.string(),
  titleText2: z.string(),
  titleText3: z.string(),
  titleText4: z.string(),
  titleColor: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
  titleText1: propOne,
  titleText2: propTwo,
  titleText3: propThree,
  titleText4: propFour,
  titleColor: propFive,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      <Audio
        src={musicPath} // Use the imported audio file
        startFrom={0} // Start playback from 550 milliseconds
        volume={0.3} // Set the volume
      />

      <Sequence from={5}>
        <CityWithCar
          titleText1="Hi, "
          titleText2={propOne}
          titleText3="here is your personal quote"
        />
      </Sequence>
      <Sequence from={155}>
        <HospitalWithAmbulance
          titleText1="This is your insurance premium for "
          titleText3={propTwo}
        />
      </Sequence>
      <Sequence from={305}>
        <MountainWithBirds
          titleText1="The amount is total "
          titleText3={propThree}
        />
      </Sequence>
      <Sequence from={455}>
        <LandmarksWithPlane
          titleText1="It is due until  "
          titleText3={propFour}
        />
      </Sequence>
      <Sequence from={605}>
        <FlowersWithButterfly titleText1="Thank You!" />
      </Sequence>
    </AbsoluteFill>
  );
};
