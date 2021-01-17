import React from 'react';
import './Logo.scss';

interface Props {
  fill?: string;
  size?: number;
  className?: string;
}

const LogoIcon = ({ fill = '#61DAFB', size = 120, className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={(size * 595.3) / 841.9}
    fill={fill}
    viewBox="0 0 841.9 595.3"
  >
    <g
      transform="translate(0.000000,358.000000) scale(0.100000,-0.100000)"
      fill="#ffffff"
      stroke="blue"
    >
      <path
        d="M3342 1873 c3 -406 4 -430 23 -457 26 -40 72 -56 155 -56 l70 0 0 64
0 65 -37 3 -38 3 -3 403 -2 402 -86 0 -85 0 3 -427z"
      />
      <path
        d="M2281 2243 c-70 -21 -144 -90 -160 -148 -14 -52 -14 -153 0 -196 30
-90 94 -133 249 -168 52 -12 102 -27 111 -34 38 -29 50 -92 28 -141 -34 -74
-187 -74 -268 0 -21 19 -43 34 -48 34 -5 0 -33 -25 -63 -55 l-54 -55 28 -29
c132 -137 428 -143 540 -11 49 59 71 192 45 283 -13 49 -59 100 -112 125 -23
11 -87 30 -142 43 -120 27 -145 46 -145 112 0 66 23 89 94 95 63 5 131 -15
161 -48 10 -11 23 -20 29 -20 7 0 36 25 66 55 l54 55 -24 25 c-13 14 -52 39
-86 56 -52 26 -76 31 -155 35 -69 3 -108 -1 -148 -13z"
      />
      <path
        d="M1400 1800 l0 -440 90 0 90 0 0 165 0 166 62 -3 62 -3 65 -162 66
-163 98 0 c53 0 97 2 97 3 0 2 -34 80 -75 173 -66 150 -73 170 -58 179 86 53
124 128 124 248 0 132 -41 216 -124 256 -40 19 -60 21 -270 21 l-227 0 0 -440z
m421 261 c15 -18 19 -39 19 -93 0 -38 -4 -78 -10 -88 -15 -28 -64 -40 -161
-40 l-89 0 0 126 0 126 111 -4 c102 -3 112 -5 130 -27z"
      />
      <path
        d="M2938 2027 c-126 -36 -188 -147 -188 -337 0 -208 69 -314 224 -340
118 -21 214 15 267 99 36 56 36 74 2 88 -16 6 -45 18 -65 27 l-38 16 -14 -34
c-15 -36 -59 -66 -96 -66 -37 0 -77 28 -89 61 -6 18 -11 86 -11 153 0 147 14
186 71 200 51 13 86 1 109 -37 11 -17 21 -36 23 -41 2 -7 114 35 136 51 7 5
-23 66 -47 95 -55 65 -180 94 -284 65z"
      />
      <path
        d="M3797 2026 c-133 -37 -196 -166 -184 -376 9 -155 50 -234 146 -278
64 -30 178 -36 245 -13 55 19 110 72 137 134 21 46 24 67 24 187 0 86 -5 152
-14 183 -17 60 -78 130 -133 152 -57 23 -162 28 -221 11z m160 -150 c28 -24
28 -24 31 -169 3 -119 1 -151 -13 -177 -29 -56 -97 -66 -147 -21 l-33 29 -3
129 c-4 146 8 200 48 220 40 20 86 16 117 -11z"
      />
      <path
        d="M4535 2021 c-30 -13 -47 -31 -65 -65 -14 -25 -28 -46 -32 -46 -5 0
-8 25 -8 55 l0 55 -90 0 -90 0 0 -330 0 -330 90 0 90 0 0 238 c0 266 2 273 67
291 27 8 44 7 62 -2 47 -22 51 -45 51 -294 l0 -233 91 0 90 0 -3 268 c-3 264
-3 268 -28 317 -43 85 -137 116 -225 76z"
      />
      <path
        d="M5047 2026 c-27 -7 -61 -22 -75 -33 -43 -31 -90 -109 -103 -170 -16
-78 -7 -256 16 -308 56 -130 188 -194 341 -166 68 13 168 74 171 106 2 12 -14
38 -37 64 l-40 43 -39 -35 c-97 -87 -227 -47 -239 73 l-5 50 193 0 193 0 -6
88 c-9 145 -52 229 -141 272 -57 27 -164 35 -229 16z m142 -131 c31 -16 51
-59 51 -111 l0 -34 -100 0 -100 0 0 43 c1 93 72 142 149 102z"
      />
    </g>
  </svg>
);

export default LogoIcon;
