import React from "react";
import "./Icon.css";

function PythonIcon() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
        fill="#306998"
      />
      <path
        d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
        fill="url(#b)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="19.075"
          y1="18.782"
          x2="34.898"
          y2="34.658"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="28.809"
          y1="28.882"
          x2="45.803"
          y2="45.163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE052" />
          <stop offset="1" stopColor="#FFC331" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GitIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30pt"
      height="30pt"
      viewBox="0 0 92 92"
      className={`${className}`}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 .113h91.887V92H0Zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "#FFFFFF",
            fillOpacity: 1,
            color: "white",
          }}
          d="M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"
        />
      </g>
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg
      className={`${className}`}
      style={{
        height: "25pt",
        verticalAlign: "middle",
        fill: "#FFFFFF",
        overflow: "hidden",
      }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76.43 361.726h185.949v597.36H76.429v-597.36zM169.46 64.76c59.45 0 107.652 48.27 107.652 107.624 0 59.416-48.202 107.679-107.651 107.679-59.662 0-107.772-48.263-107.772-107.679C61.688 113.03 109.798 64.76 169.461 64.76M378.943 361.726h178.074v81.644h2.526c24.76-47.003 85.404-96.498 175.787-96.498 187.963 0 222.73 123.667 222.73 284.553v327.66h-185.6V668.653c0-69.336-1.374-158.46-96.56-158.46-96.684 0-111.423 75.456-111.423 153.333v295.56H378.943v-597.36z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export { PythonIcon, GitIcon, LinkedInIcon };
