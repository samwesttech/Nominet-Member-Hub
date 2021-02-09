import React from "react";
import CalendarImage from "../assets/Mask_Group_9.png";

const Register = () => (
  <svg width={"100%"} height={"auto"} viewBox="0 0 1920 318">
    <defs>
      <style>
        {
          ".a9,.c9,.e9{fill:#fff;}.b9{fill:url(#a9);}.c9{font-size:36px;}.c9,.e9{font-family:Helvetica;}.d9,.h9{fill:none;}.d9{stroke:#fff;stroke-width:3px;}.e9{font-size:16px;letter-spacing:0.08em;}.f9{clip-path:url(#b9);}.g9{stroke:none;}"
        }
      </style>
      <linearGradient
        id="a9"
        y1={0.5}
        x2={1}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#006272" />
        <stop offset={1} stopColor="#51e5ca" />
      </linearGradient>
      <clipPath id="b9">
        <rect
          className="a9"
          width={555}
          height={298}
          transform="translate(100 3760)"
        />
      </clipPath>
    </defs>
    <g transform="translate(0 -3740)">
      <g transform="translate(0 1744)">
        <g transform="translate(0 -21)">
          <rect
            className="b9"
            width={1920}
            height={318}
            transform="translate(0 2017)"
          />
          <text className="c9" transform="translate(701 2169)">
            <tspan x={0} y={0}>
              {"Register for updates to receive"}
            </tspan>
            <tspan x={0} y={43}>
              {"information about upcoming events"}
            </tspan>
          </text>
          <g transform="translate(1397 2152)">
            <g className="d9">
              <rect className="g9" width={290} height={48} />
              <rect className="h9" x={1.5} y={1.5} width={287} height={45} />
            </g>
            <text className="e9" transform="translate(145 30)">
              <tspan x={-111.582} y={0}>
                {"REGISTER FOR UPDATES"}
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g className="f9">
        <image
          width={536}
          height={398.25}
          transform="translate(105 3765)"
          xlinkHref={CalendarImage}
        />
      </g>
    </g>
  </svg>
);

export default Register;
