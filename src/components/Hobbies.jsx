import React from "react";
import Card from "./Card";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Musician",
      text: `I play the "Bass Guitar" in a band I'm currently in and I sometimes play the electric guitar. Me and my buddy Jasfel were in a band for a long time. We even compose songs but we haven't publish any of it due to lack of financial reasons.`,
      image:
        "https://www.careergirls.org/wp-content/uploads/2015/06/Musicians_1920x1080.jpg",
    },
    {
      title: "Collection",
      text: "I like knives and guns",
      image:
        "https://dz2cdn1.dzone.com/storage/temp/12808952-model-car-collection.jpeg",
    },
    {
      title: "Video Games",
      text: "I play a lot of games more likely First Person Shooter games",
      image:
        "https://i.ytimg.com/vi/EA0YC9m6D4s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPEDlv0VGPIr2CC_juaUkgVRDJDQ",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center p-10 mb-5">
      <h2 className=" text-4xl font-bold m-5">Hobbies</h2>
      <div className="flex justify-evenly gap-10 flex-wrap">
        {hobbies.map((hobby, index) => (
          <Card
            key={index}
            title={hobby.title}
            text={hobby.text}
            image={hobby.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
