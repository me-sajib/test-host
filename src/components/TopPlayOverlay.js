import React from "react";

export default function() {
  return (
    <div
      className={`absolute h-full w-full rounded-lg flex justify-center items-center `}
    >
      <div className="play-icon ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64"
          height="64"
          viewBox="0 0 172 172"
          style={{ fill: "#000000" }}
        >
          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: `normal` }}
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g>
              <path
                d="M169.34609,86c0,-46.02344 -37.32266,-83.34609 -83.34609,-83.34609c-46.02344,0 -83.34609,37.32266 -83.34609,83.34609c0,46.02344 37.32266,83.34609 83.34609,83.34609c46.02344,0 83.34609,-37.32266 83.34609,-83.34609z"
                fill="#ec2f98"
              ></path>
              <path
                d="M127.21953,81.7l-58.75547,-36.11328c-1.6125,-0.97422 -3.72891,-1.04141 -5.375,-0.10078c-1.67969,0.94063 -2.72109,2.72109 -2.72109,4.63594v71.89063c0,1.91484 1.04141,3.69531 2.6875,4.63594c0.80625,0.43672 1.67969,0.67188 2.58672,0.67188c0.97422,0 1.91484,-0.26875 2.75469,-0.77266l58.75547,-35.81094c1.57891,-0.94063 2.55312,-2.6875 2.55312,-4.50156c0.06719,-1.84766 -0.90703,-3.59453 -2.48594,-4.53516z"
                fill="#ffffff"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className=" absolute h-full w-full top-play-overlay" />
    </div>
  );
}
