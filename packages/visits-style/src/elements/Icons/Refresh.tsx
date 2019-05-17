/* tslint:disable max-line-length */
import React, { SVGAttributes } from "react";

export default function Refresh(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        d="M24.065,9A15.069,15.069,0,0,0,9.142,22.105a1.256,1.256,0,1,0,2.478.406c0-.027.008-.055.01-.082a12.52,12.52,0,0,1,21.3-7.226l-2.584,2.584,7.532,1.255-1.255-7.532-1.92,1.92A15,15,0,0,0,24.065,9Zm13.7,15.589A1.255,1.255,0,0,0,36.5,25.7a12.512,12.512,0,0,1-21.893,6.569l1.927-1.927L9,29.086l1.255,7.532,2.572-2.572a15.02,15.02,0,0,0,26.16-8.023A1.256,1.256,0,0,0,37.923,24.6,1.273,1.273,0,0,0,37.763,24.589Z"
        transform="translate(-9 -9)"
        fill="currentColor"
      />
    </svg>
  );
}
