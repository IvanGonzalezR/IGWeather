import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={55}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "#053152",
    }}
    viewBox="98.138 33.32 303.724 83.36"
    {...props}
  >
    <defs>
      <filter
        id="editing-crystal"
        width="300%"
        height="300%"
        x="-100%"
        y="-100%"
      >
        <feMorphology
          in="SourceGraphic"
          operator="dilate"
          radius={2}
          result="border"
        />
        <feFlood floodColor="#fff" result="black" />
        <feMorphology
          in="SourceGraphic"
          operator="dilate"
          radius={2}
          result="erode"
        />
        <feGaussianBlur in="erode" result="blur" stdDeviation={0} />
        <feOffset dx={2} dy={2} in="blur" result="offset" />
        <feComposite in="offset" in2="black" operator="atop" result="merge" />
        <feComposite
          in="merge"
          in2="SourceGraphic"
          operator="in"
          result="inner-shadow"
        />
        <feGaussianBlur
          in="SourceGraphic"
          result="shadow1"
          stdDeviation={0}
        />
        <feOffset dy={5} in="shadow1" result="shadow" />
        <feSpecularLighting
          in="SourceGraphic"
          lightingColor="#fff"
          result="specular"
          specularConstant={100}
          specularExponent={5}
          surfaceScale={1.5}
        >
          <fePointLight x={250} y={-300} z={-400} />
        </feSpecularLighting>
        <feGaussianBlur in="specular" result="specular2" stdDeviation={1} />
        <feComposite
          in="specular2"
          in2="SourceAlpha"
          operator="in"
          result="specular3"
        />
        <feMerge result="merge">
          <feMergeNode in="border" />
          <feMergeNode in="inner-shadow" />
          <feMergeNode in="specular3" />
        </feMerge>
        <feComponentTransfer in="merge" result="final">
          <feFuncA slope={0.9} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="final" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#editing-crystal)">
      <path
        fill="#fff"
        stroke="#053152"
        strokeWidth={3}
        d="M155.538 89.8h-8.72l5.08-26.4h8.8l-5.16 26.4Zm22.24-12.88 8.08-.72q-2.88 6.32-2.88 13.64-1.08.76-2.66.76t-2.58-.74q-1-.74-1.2-1.5-1 1.04-2.62 1.64-1.62.6-3.34.6-1.72 0-3.22-.56-1.5-.56-2.66-1.8-2.56-2.72-2.56-7.88 0-8 4.28-12.8 4.4-4.96 12.2-4.96 5.4 0 7.32 2.8.6.88.6 1.94t-.46 1.96q-.46.9-1.18 1.62-1.72 1.6-3.84 1.6-.84 0-1.64-.28.16-1.2.16-2.6 0-1.4-.1-2.04-.1-.64-.34-1.16-.52-1.08-1.66-1.08t-2.4 1.22q-1.26 1.22-2.26 3.22-2.2 4.48-2.2 9.88 0 2.48.96 4.24 1.04 1.92 2.88 1.92.64 0 1.22-.32t.82-.56l1.28-8.04ZM188.818 65q.56-1.12 1.78-1.74 1.22-.62 2.9-.62 2.64 0 4.22 1.9 1.58 1.9 1.58 6.06v14.28l9.16-21.44h4.72l1.08 20.24-.12 1.16 9.52-21.4h5.48l-12.8 26.36h-8.52l-.8-12.16-5.28 12.16h-9.64l-1.2-19.2q-.12-2.16-.7-3.58t-1.38-2.02Zm54.12 18.04q1 .68 1 2.18t-.76 2.46q-.76.96-2 1.6-2.56 1.32-5.32 1.32-2.76 0-4.38-.6t-2.7-1.72q-2.12-2.12-2.12-6 0-6.04 3.28-9.72 3.52-3.96 9.64-3.96 3.8 0 5.68 1.6 1.4 1.2 1.4 3.16 0 7.04-12.16 7.04-.16 1.04-.16 1.92 0 1.84.82 2.54t2.34.7q1.52 0 3.14-.7t2.3-1.82Zm-8.16-4.36q2.84 0 4.48-1.76 1.64-1.68 1.64-4.36 0-.92-.34-1.42-.34-.5-1.02-.5-.68 0-1.26.26t-1.18 1.14q-1.48 2-2.32 6.64Zm14.98 9.92q-.94-1.04-1.36-2.68-.42-1.64-.42-4.32 0-2.68.92-5.12t2.6-4.2q3.44-3.68 9.12-3.68 2.04 0 3.52.68l6.84-.68-2.96 15.6q-.12.48-.12 1.36 0 .88.54 1.44.54.56 1.34.64-.4 1.36-1.86 2.16t-3.1.8q-1.64 0-2.74-.62-1.1-.62-1.42-1.66-.64 1-2 1.64-1.36.64-3.18.64t-3.3-.48q-1.48-.48-2.42-1.52Zm8.44-16.24q-.46.72-.86 1.94-.4 1.22-1.06 4.48-.66 3.26-.66 5.58 0 2.32.36 3 .36.68 1 .68 1.28 0 2.22-1.22.94-1.22 1.3-3.38l2.12-11.72q-.84-.72-1.82-.72-.98 0-1.56.32-.58.32-1.04 1.04Zm15.58 13.44q0-1.08.56-3.8l2.12-10.8h-2.36l.16-1.2q4.8-1.44 9.44-4.96h1.92l-.96 4.36h3.12l-.36 1.8h-3.08l-2.04 10.8q-.52 2.48-.52 3.32 0 1.92 1.68 2.32-.4 1.36-1.84 2.16t-3.48.8q-2.04 0-3.2-1.28-1.16-1.28-1.16-3.52Zm33.92-.44q0 1.76 1.8 2.28-.44 1.48-2.16 2.28-1.44.68-3.02.68t-2.4-.42q-.82-.42-1.26-1.1-.72-1.04-.72-3 0-1.16.64-4.36l.56-3.04q.68-3.48.68-4.76 0-2.24-1.24-2.24-1.56 0-2.56 2.28-.4.88-.68 2.2l-2.72 13.64-8.04.8 5.64-28.8 8.04-.8-.32 1.6q-1.12 6.16-2.08 8.24 2.24-2.24 6.36-2.24 4.36 0 5.16 2.88.28.92.28 1.72 0 .8-.06 1.42-.06.62-.26 1.74l-.52 2.88-.92 4.52q-.2.92-.2 1.6Zm21.24-2.32q1 .68 1 2.18t-.76 2.46q-.76.96-2 1.6-2.56 1.32-5.32 1.32-2.76 0-4.38-.6t-2.7-1.72q-2.12-2.12-2.12-6 0-6.04 3.28-9.72 3.52-3.96 9.64-3.96 3.8 0 5.68 1.6 1.4 1.2 1.4 3.16 0 7.04-12.16 7.04-.16 1.04-.16 1.92 0 1.84.82 2.54t2.34.7q1.52 0 3.14-.7t2.3-1.82Zm-8.16-4.36q2.84 0 4.48-1.76 1.64-1.68 1.64-4.36 0-.92-.34-1.42-.34-.5-1.02-.5-.68 0-1.26.26t-1.18 1.14q-1.48 2-2.32 6.64Zm25.76-.12q1.44-2.56 1.44-5.16 0-1.72-1.24-1.72-.96 0-1.96 1.64-1.04 1.64-1.36 3.76l-2.08 12.72-8.28.8 4.08-21.2 6.6-.8-.72 4.04q1.96-4.04 6.36-4.04 2.32 0 3.58 1.2 1.26 1.2 1.26 3.66t-1.62 4.02q-1.62 1.56-4.38 1.56-1.2 0-1.68-.48Z"
      />
    </g>
    <style />
  </svg>
)
export default SvgComponent
