import React from "react";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave, faFileArrowUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


export const Process = () => {
  return (
    <>
      {/* vertical timeline   */}
      <h1 className="text-6xl text-center font-bold leading-tight bg-gradient-to-r from-[#140152] to-[#3220ff] bg-clip-text text-transparent">Lets Get Started</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #22007c, #0d00a4",}}
          contentArrowStyle={{ borderRight: "7px solid  #0d00a4" }}
        
          iconStyle={{ background: "#0d00a4", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faFileArrowUp} />}
        >
          <span className="text-4xl text-amber-50">01/ Upload License</span>
          <p className="text-2xl text-amber-50">
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #22007c, #0d00a4",}}
          contentArrowStyle={{ borderRight: "7px solid  #0d00a4" }}
          iconStyle={{ background: "#0d00a4", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faThumbsUp} />}
        >
          <span className="text-4xl text-amber-50">02/ Get Valuation</span>
          
          <p className="text-2xl text-amber-50">
            Our smart system analyzes your license details and instantly provides a fair market valuation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #22007c, #0d00a4",}}
          contentArrowStyle={{ borderRight: "7px solid  #0d00a4" }}
          iconStyle={{ background: "#0d00a4", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faMoneyBillWave} />}
        >
          <span className="text-4xl text-amber-50">03/ Get Paid</span>
        
          <p className="text-2xl text-amber-50">
            Accept the quote, and receive secure payment directly to your account — fast and hassle-free.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
   
 
    </>
  );
};
