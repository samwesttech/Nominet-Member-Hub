import React from "react";
import SignUpImage from "../assets/Image_21.png";

const SignUp = () => (
  <svg width={"100%"} height={"auto"} viewBox="0 0 1920 327">
    <defs>
      <style>
        {
          ".a{fill:url(#a);}.b,.d{fill:#fff;font-family:Helvetica;}.b{font-size:36px;}.c,.f{fill:none;}.c{stroke:#fff;stroke-width:3px;}.d{font-size:16px;letter-spacing:0.08em;}.e{stroke:none;}.g{filter:url(#b);}"
        }
      </style>
      <linearGradient
        id="a"
        y1={0.475}
        x2={1}
        y2={0.462}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#006272" />
        <stop offset={1} stopColor="#51e5ca" />
      </linearGradient>
      <filter
        id="b"
        x={110}
        y={43}
        width={522}
        height={284}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} input="SourceAlpha" />
        <feGaussianBlur stdDeviation={4} result="c" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="c" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="translate(0 -1996)">
      <g transform="translate(0 -21)">
        <rect
          className="a"
          width={1920}
          height={318}
          transform="translate(0 2017)"
        />
        <text className="b" transform="translate(701 2169)">
          <tspan x={0} y={0}>
            {"Sign-up to the newsletter to get"}
          </tspan>
          <tspan x={0} y={43}>
            {"the latest news in your inbox"}
          </tspan>
        </text>
        <g transform="translate(1404 2152)">
          <g className="c">
            <rect className="e" width={276} height={48} />
            <rect className="f" x={1.5} y={1.5} width={273} height={45} />
          </g>
          <text className="d" transform="translate(138 30)">
            <tspan x={-101.11} y={0}>
              {"NEWSLETTER SIGN-UP"}
            </tspan>
          </text>
        </g>
      </g>
      <g className="g" transform="matrix(1, 0, 0, 1, 0, 1996)">
        <image
          width={498}
          height={260}
          transform="translate(122 58)"
          xlinkHref={SignUpImage}
        />
      </g>
    </g>
  </svg>
);

export default SignUp;
