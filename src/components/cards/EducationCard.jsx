import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.image}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        gap: "12px",
        background: "#2d4059",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backdropFilter: "blur(3px) saturate(106%)",
        // backgroundColor: "rgba(17, 25, 40, 0.83)",
        backgroundColor: "#2d4059",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={education.date}
    >
      <div className="flex flex-col gap-3 bg-black text-white  rounded-lg p-12">
        <div className="flex gap-3">
          <img 
            src={education.image}
            alt={education.school}
            className="h-12 w-12 rounded-full object-cover" 
          />
          {console.log(education.image)}

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">{education.school}</h3>
            <p className="text-base font-medium text-gray-400">
              {education.degree}
            </p>
            <p className="text-sm font-normal text-gray-500">
              {education.date}
            </p>
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-400">
            <b>Grade:</b> {education.grade}
          </p>
        </div>
        <div className="text-xl font-semibold text-gray-400 ">{education.desc}</div>
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
