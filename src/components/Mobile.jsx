import React, { useState } from "react";
import phone from "../assets/phone-bg.png";
import zen from "../assets/zen.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Icon() {
  const [screen, setScreen] = useState(1);
const [loading, setLoading] = useState(false);
const [value, setValue] = useState(0);
const price = 0.2;

const Authenticate = () => {
  if (screen === 1) {
    setValue(0);
  }

  if (screen === 2) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScreen(screen + 1);
    }, 2000);
  } else {
    setScreen(screen + 1);
  }
};

const deleteValue = () => {
  setValue(0);
};

const valueDown = () => {
  setValue(Math.max(0, value - 1)); // clamp to a minimum value of 0
};

const valueUp = () => {
  if (value === 5) {
    return;
  }
  setValue(value + 1);
};

  return (
    <div className="h-[700px] relative">
      <div
        className="absolute w-24 h-8 bg-transparent right-10 top-[400px] flex rounded-xl opacity-0  overflow-hidden items-center"
        style={{ transform: "rotate(-27deg)" }}
      >
        <div
          className="w-1/2 h-full bg-green-400  focus:outline-none  cursor-pointer focus:bg-transparent"
          onClick={valueDown}
        ></div>
        <div
          className="w-1/2 h-full bg-green-600  focus:outline-none  cursor-pointer focus:bg-transparent"
          onClick={valueUp}
        ></div>
      </div>
      <LazyLoadImage
        src={zen}
        loading="lazy" 
        className="absolute w-[30%] left-[35%] top-[138px]"
        alt=""
      />
      {screen === 1 ? (
        <div className="absolute  top-48  flex left-[20%]  rounded-lg w-3/5 pb-2  h-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="13"
            viewBox="0 0 20 13"
            className="absolute left-3"
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g fill="#3D3F3F" transform="translate(-480 -240)">
                <g transform="translate(430.77 100.65)">
                  <g transform="translate(29.9 132.6)">
                    <path d="M22.1 16.9h-2.6v-6.127l12.025-.001V10.4a3.575 3.575 0 117.15 0v5.2a3.575 3.575 0 11-7.15 0v-.928H22.1V16.9zm13-8.125c-.897 0-1.625.728-1.625 1.625v5.2a1.625 1.625 0 003.25 0v-5.2c0-.897-.728-1.625-1.625-1.625z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <LazyLoadImage   src={phone} loading="lazy" className="absolute w-3/5 left-[20%] top-4" alt="" />
          <button className="mt-auto text-xs text-gray-800 text-center mx-auto">
            METAMASK LOGIN
          </button>
        </div>
      ) : screen === 2 ? (
        <div className="absolute  top-48  flex flex-col left-[20%]  rounded-lg w-3/5 pb-2  h-36">
          <button className="py-1 text-xs font-black text-center mx-auto text-gray-800">
            3350/5000
          </button>
          <button className="py-1 text-xs font-black text-center mx-auto text-gray-800">
            0 MINTED
          </button>
          <button className="py-1 text-xs font-black text-center mx-auto text-gray-800">
            QTY {value}/5
          </button>
          <button className="py-1 text-xs font-black text-center mx-auto text-gray-800">
            COST {(price * value).toFixed(1)} ETH
          </button>
          <button className="mt-auto text-xs font-black text-center mx-auto text-gray-800 mt-6">
            {loading ? " PENDING" : "MINT"}
          </button>
        </div>
      ) : (
        <div className="absolute  top-48  flex flex-col left-[20%]  rounded-lg w-3/5 pb-2  h-36">
          <button className="py-1 text-xs font-black text-center mx-auto text-gray-800">
            3350/5000
          </button>
          <button className="mt-auto text-xs font-black text-center mx-auto text-gray-800">
            {" "}
            MINTED
          </button>
          <button className="py-1 text-xs font-black text-center mx-auto text-gray-800">
            LETS EAT
          </button>
          <a
            href="#"
            target="_blank"
            className="mt-auto text-xs font-black text-center mx-auto text-gray-800 mt-6"
          >
            ETHERSCAN
          </a>
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 219 520"
        className="h-full"
      >
        <defs>
          <filter id="ix" width="113.7%" height="105.8%" x="-6.9%" y="-2.9%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="10"
            ></feGaussianBlur>
            <feOffset
              dy="-10"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            ></feColorMatrix>
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadInner2"
            ></feMorphology>
            <feGaussianBlur
              in="shadowSpreadInner2"
              result="shadowBlurInner2"
              stdDeviation="2.5"
            ></feGaussianBlur>
            <feOffset
              dy="-3"
              in="shadowBlurInner2"
              result="shadowOffsetInner2"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.329002491 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner3"
              stdDeviation="1.5"
            ></feGaussianBlur>
            <feOffset
              dx="4"
              dy="1"
              in="shadowBlurInner3"
              result="shadowOffsetInner3"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner3"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner3"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner3"
              result="shadowMatrixInner3"
              values="0 0 0 0 0.411764706 0 0 0 0 0.42745098 0 0 0 0 0.458823529 0 0 0 1 0"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              <feMergeNode in="shadowMatrixInner2"></feMergeNode>
              <feMergeNode in="shadowMatrixInner3"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="iw" width="104.9%" height="103%" x="-1.9%" y="-1.2%">
            <feOffset
              dx="1"
              dy="1"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="1.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="it" width="105.8%" height="103.5%" x="-2.4%" y="-1.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="2.5"
            ></feGaussianBlur>
            <feOffset
              dy="1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.746864371 0 0 0 0 0.746864371 0 0 0 0 0.746864371 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="im" width="109.1%" height="105.9%" x="-4.5%" y="-2.9%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-8"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner2"
              stdDeviation="2"
            ></feGaussianBlur>
            <feOffset
              in="shadowBlurInner2"
              result="shadowOffsetInner2"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="il" width="156.6%" height="159.2%" x="-28.3%" y="-29.6%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="ik" width="156.6%" height="159.2%" x="-28.3%" y="-29.6%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="ii" width="103.2%" height="116.8%" x="-1.6%" y="-8.4%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="2"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.268115942 0"
            ></feColorMatrix>
          </filter>
          <filter id="ih" width="124.1%" height="103.9%" x="-11.4%" y="-1.8%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="hk" width="126.4%" height="104.2%" x="-11.9%" y="-1.8%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="hj" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="hi" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="hh" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="hf" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="he" width="115.4%" height="128.2%" x="-7.7%" y="-14.1%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="hd" width="113.2%" height="124.9%" x="-6.6%" y="-12.5%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="hc" width="119.8%" height="137.4%" x="-9.9%" y="-18.7%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="ha" width="133%" height="162.3%" x="-16.5%" y="-31.1%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gz" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="gy" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="gx" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="gv" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="if" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="ie" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="id" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="ib" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="ia" width="115.2%" height="127.7%" x="-7.6%" y="-13.8%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="hz" width="113.2%" height="124.9%" x="-6.6%" y="-12.5%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="hy" width="119.8%" height="137.4%" x="-9.9%" y="-18.7%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="hw" width="133%" height="162.3%" x="-16.5%" y="-31.1%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="hv" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="hu" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="ht" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="hr" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="hq" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="hp" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="ho" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="hm" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="hl" width="115.2%" height="127.7%" x="-7.6%" y="-13.8%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="gg" width="113.2%" height="124.9%" x="-6.6%" y="-12.5%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="gf" width="119.8%" height="137.4%" x="-9.9%" y="-18.7%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="gd" width="133%" height="162.3%" x="-16.5%" y="-31.1%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gc" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="gb" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="ga" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="fy" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="fx" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="fw" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="fv" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="ft" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="fs" width="115.2%" height="127.7%" x="-7.6%" y="-13.8%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="fr" width="113.2%" height="124.9%" x="-6.6%" y="-12.5%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="fq" width="119.8%" height="137.4%" x="-9.9%" y="-18.7%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="fo" width="133%" height="162.3%" x="-16.5%" y="-31.1%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="fn" width="116.8%" height="127.8%" x="-8.4%" y="-13.9%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="fm" width="115.3%" height="125.2%" x="-7.6%" y="-12.6%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="fl" width="122.9%" height="137.8%" x="-11.5%" y="-18.9%">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 0 0.233046344 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="gt" width="138.2%" height="163%" x="-19.1%" y="-31.5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0.378667092 0 0 0 0 0.372787771 0 0 0 0 0.372787771 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gs" width="119.9%" height="160.7%" x="-9.9%" y="-30.4%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gr" width="114%" height="154.9%" x="-7%" y="-27.5%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gq" width="116.5%" height="153.7%" x="-8.2%" y="-26.8%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gp" width="151.3%" height="151.3%" x="-25.6%" y="-25.6%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="go" width="128.8%" height="137.2%" x="-14.4%" y="-18.6%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gn" width="121%" height="137.2%" x="-10.5%" y="-18.6%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gm" width="116.1%" height="169.9%" x="-8.1%" y="-35%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gl" width="120.5%" height="146.2%" x="-10.2%" y="-23.1%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="gk" width="139%" height="133.9%" x="-19.5%" y="-17%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="gi" width="162.2%" height="133.9%" x="-31.1%" y="-17%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="gh" width="146.7%" height="135.5%" x="-23.4%" y="-17.8%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="es" width="142%" height="134.4%" x="-21%" y="-17.2%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="er" width="138.5%" height="135%" x="-19.2%" y="-17.5%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="eq" width="132.1%" height="131.3%" x="-16.1%" y="-15.7%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="ep" width="148.1%" height="138.5%" x="-24%" y="-19.2%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="eo" width="139.8%" height="136.1%" x="-19.9%" y="-18%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="en" width="139.8%" height="142%" x="-19.9%" y="-21%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="em" width="143.7%" height="135.5%" x="-21.9%" y="-17.8%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="el" width="142.4%" height="135.5%" x="-21.2%" y="-17.8%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="ek" width="133%" height="129.8%" x="-16.5%" y="-14.9%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 0 0.756590136 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="ej" width="247.4%" height="128.9%" x="-73.7%" y="-14.4%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="ei" width="132.4%" height="145.2%" x="-16.2%" y="-22.6%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="eh" width="119.2%" height="143.4%" x="-9.6%" y="-21.7%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0 0.909438776 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="fk" width="155.9%" height="109.9%" x="-28%" y="-5%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="1.5"
            ></feGaussianBlur>
            <feOffset
              dx="-5"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="fj" width="148.1%" height="196.2%" x="-24%" y="-48.1%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="2"
            ></feGaussianBlur>
            <feOffset
              dx="-1"
              dy="-1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.317595109 0"
            ></feColorMatrix>
          </filter>
          <filter id="ff" width="113.3%" height="121.6%" x="-6.9%" y="-10.8%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feOffset
              dx="1"
              dy="2"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0.82745098 0 0 0 0 0.831372549 0 0 0 0 0.784313725 0 0 0 1 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner2"
              stdDeviation="2"
            ></feGaussianBlur>
            <feOffset
              dy="1"
              in="shadowBlurInner2"
              result="shadowOffsetInner2"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 0.933753189 0 0 0 0 0.933753189 0 0 0 0 0.933753189 0 0 0 1 0"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="fd" width="150%" height="125%" x="-25%" y="-12.5%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="ez" width="104.7%" height="118.3%" x="-2.5%" y="-8.8%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="1.5"
            ></feGaussianBlur>
            <feOffset
              dy="3"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0.957828444 0 0 0 0 0.957828444 0 0 0 0 0.957828444 0 0 0 1 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner2"
              stdDeviation="1.5"
            ></feGaussianBlur>
            <feOffset
              dx="3"
              in="shadowBlurInner2"
              result="shadowOffsetInner2"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 0.50390625 0 0 0 0 0.50390625 0 0 0 0 0.50390625 0 0 0 1 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner3"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feOffset
              dx="-3"
              in="shadowBlurInner3"
              result="shadowOffsetInner3"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner3"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner3"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner3"
              result="shadowMatrixInner3"
              values="0 0 0 0 0.956862745 0 0 0 0 0.956862745 0 0 0 0 0.956862745 0 0 0 0.5 0"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              <feMergeNode in="shadowMatrixInner2"></feMergeNode>
              <feMergeNode in="shadowMatrixInner3"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="ex" width="130.4%" height="131.2%" x="-15.2%" y="-15.6%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            ></feColorMatrix>
          </filter>
          <filter id="ew" width="136.4%" height="137.5%" x="-18.2%" y="-18.8%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="et" width="107.4%" height="126.3%" x="-3.7%" y="-13.2%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feOffset
              dx="1"
              dy="2"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0.82745098 0 0 0 0 0.831372549 0 0 0 0 0.784313725 0 0 0 1 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner2"
              stdDeviation="2"
            ></feGaussianBlur>
            <feOffset
              dy="1"
              in="shadowBlurInner2"
              result="shadowOffsetInner2"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 0.933753189 0 0 0 0 0.933753189 0 0 0 0 0.933753189 0 0 0 1 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner3"
              stdDeviation="1.5"
            ></feGaussianBlur>
            <feOffset
              dy="1"
              in="shadowBlurInner3"
              result="shadowOffsetInner3"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner3"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner3"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner3"
              result="shadowMatrixInner3"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              <feMergeNode in="shadowMatrixInner2"></feMergeNode>
              <feMergeNode in="shadowMatrixInner3"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="ef" width="124.9%" height="148.7%" x="-12.4%" y="-24.3%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="ee" width="101.8%" height="103.5%" x="-.9%" y="-1.7%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="ed" width="122.9%" height="140.1%" x="-11.5%" y="-20.8%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.3"
            ></feGaussianBlur>
          </filter>
          <filter id="ec" width="101.7%" height="102.2%" x="-.8%" y="-1.5%">
            <feGaussianBlur in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter id="eb" width="103.8%" height="106.9%" x="-1.9%" y="-1.7%">
            <feOffset
              dy="3"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            ></feComposite>
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.4 0 0 0 0 0.419607843 0 0 0 0 0.443137255 0 0 0 1 0"
            ></feColorMatrix>
          </filter>
          <filter id="dy" width="104.4%" height="107.8%" x="-2.2%" y="-2.2%">
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadInner1"
            ></feMorphology>
            <feGaussianBlur
              in="shadowSpreadInner1"
              result="shadowBlurInner1"
              stdDeviation="2"
            ></feGaussianBlur>
            <feOffset
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.310943161 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner2"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feOffset
              dy="-3"
              in="shadowBlurInner2"
              result="shadowOffsetInner2"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 0.62745098 0 0 0 0 0.650980392 0 0 0 0 0.580392157 0 0 0 0.584012681 0"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="dx" width="105.7%" height="132.1%" x="-2.8%" y="-16%">
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="2"
            ></feGaussianBlur>
            <feOffset
              dy="1"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            ></feColorMatrix>
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner2"
              stdDeviation="0.5"
            ></feGaussianBlur>
            <feOffset
              in="shadowBlurInner2"
              result="shadowOffsetInner2"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            ></feComposite>
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
          </filter>
          <path
            id="c"
            d="M150.947 1.3c34.301 0 53.185 15.307 56.652 45.921 8.714 73.107 12.179 125.932 10.394 158.476-4.617 130.205-8.082 209.022-10.394 236.45l-5.2 46.41c-5.002 19.105-17.74 28.658-38.216 28.658l-51.309.863v.058l-1.766-.028-1.634.028v-.054l-55.209-.867c-20.475 0-33.213-9.553-38.215-28.659l-5.2-46.409C8.537 414.72 5.073 335.902.455 205.697c-1.784-32.544 1.68-85.37 10.395-158.476C14.316 16.607 33.2 1.3 67.5 1.3h83.446z"
          ></path>
          <path
            id="t"
            d="M173.08 6.23c15.426 2.433 24.373 16.048 26.84 40.845 11.429 82.789 14.706 143.58 9.833 182.37-11.474 68.644-44.31 105.57-98.51 110.79-12.517-.34-22.768-1.882-30.753-4.625-25.067-10.916-42.952-28.209-53.655-51.88-10.403-23.45-16.174-44.625-17.314-63.525-5.8-52.46-3.237-107.11 7.688-163.94l2.014-9.19c3.626-25 14.361-38.615 32.206-40.844 33.124-6.573 73.674-6.573 121.65 0zm-7.206 6.038c-35.777-7.69-73.272-7.69-112.48 0l-5.62 1.413c-8.983 3.044-14.318 12.069-16.003 27.073-12.896 69.602-14.415 133.96-4.556 193.08 3.445 19.224 13.517 33.96 30.215 44.21 28.998-8.737 63.835-8.737 104.51 0 17.203-13.097 27.364-29.999 30.484-50.705 7.458-45.171 5.966-107.37-4.476-186.59-1.765-16.881-9.122-26.377-22.07-28.485z"
          ></path>
          <path
            id="ao"
            d="M109.19 309.63c58.963-3.982 84.2-37.86 90.547-84.938 3.392-25.163 3.061-54.905 3.061-87.542 0-35.102-8.044-66.04-12.516-96.022C184.778 4.225 151.55 7.8 108.548 7.8s-74.224 0-80.378 35.059c-5.054 28.798-12.572 58.859-12.572 94.291 0 35.538-.576 67.645 3.716 94.145 7.024 43.364 32.925 74.542 89.876 78.335z"
          ></path>
          <path
            id="s"
            d="M165.87 12.268c12.948 2.108 20.305 11.604 22.07 28.486 10.442 79.221 11.934 141.42 4.476 186.59-3.12 20.705-13.281 37.607-30.484 50.704-40.675-8.737-75.512-8.737-104.51 0-16.698-10.25-26.77-24.986-30.215-44.21-9.859-59.12-8.34-123.48 4.556-193.08 1.685-15.004 7.02-24.029 16.004-27.073l5.619-1.413c39.212-7.69 76.707-7.69 112.48 0zm-52.359 120.33c-25.43 0-50.862.752-76.293 2.255a6.5 6.5 0 00-6.099 5.987l-.164 2.212a410.19 410.19 0 00-.601 48.679 567.1 567.1 0 004.41 48.713 6.5 6.5 0 006.011 5.62l3.73.24a1010.3 1010.3 0 0063.409 1.994c23.494 0 46.989-.75 70.483-2.25a6.5 6.5 0 006.027-5.626l.377-2.873a570.1 570.1 0 004.04-45.974c.792-16.837.888-33.673.29-50.51a6.5 6.5 0 00-6.085-6.255l-3.864-.239a1094.5 1094.5 0 00-65.67-1.973z"
          ></path>
          <path
            id="ak"
            d="M161.93 278.05c-40.675-8.737-75.512-8.737-104.51 0-12.239-7.512-20.917-17.434-26.037-29.767h154.9c-5.243 11.476-13.36 21.398-24.353 29.767z"
          ></path>
          <path
            id="n"
            d="M19.972 26.537c10.313 2.175 23.1 1.549 24.361-3.833 1.262-5.354-9.242-15.01-19.555-17.676-10.312-2.759-18.139-.287-19.4 5.56-1.264 5.872 4.28 13.682 14.593 15.949z"
          ></path>
          <path
            id="m"
            d="M88.456 34.63c12.564 0 22.75-8.956 22.75-14.34 0-5.385-10.186-9.75-22.75-9.75-12.565 0-22.75 4.365-22.75 9.75 0 5.384 10.185 14.34 22.75 14.34z"
          ></path>
          <path
            id="l"
            d="M148.67 26.174c10.313 2.175 23.1 1.55 24.361-3.832 1.262-5.354-9.242-15.01-19.555-17.677-10.312-2.758-18.139-.286-19.4 5.56-1.263 5.874 4.281 13.683 14.594 15.95z"
          ></path>
          <path
            id="r"
            d="M21.272 62.937c10.313 2.175 23.1 1.549 24.361-3.833 1.262-5.354-9.242-15.01-19.555-17.676-10.312-2.759-18.139-.287-19.4 5.56-1.263 5.873 4.281 13.683 14.594 15.949z"
          ></path>
          <path
            id="q"
            d="M89.05 73.49c12.564 0 22.75-8.955 22.75-14.34s-10.186-9.75-22.75-9.75-22.75 4.365-22.75 9.75 10.186 14.34 22.75 14.34z"
          ></path>
          <path
            id="p"
            d="M146.07 62.937c10.313 2.175 23.1 1.549 24.361-3.833 1.262-5.354-9.242-15.01-19.555-17.676-10.312-2.759-18.139-.287-19.4 5.56-1.263 5.873 4.281 13.683 14.594 15.949z"
          ></path>
          <path
            id="o"
            d="M23.872 99.337c10.313 2.175 23.1 1.549 24.361-3.833 1.262-5.354-9.242-15.01-19.555-17.676-10.312-2.759-18.139-.287-19.4 5.56-1.263 5.873 4.281 13.683 14.594 15.949z"
          ></path>
          <path
            id="j"
            d="M89.05 109.89c12.564 0 22.75-8.955 22.75-14.34s-10.186-9.75-22.75-9.75-22.75 4.365-22.75 9.75 10.186 14.34 22.75 14.34z"
          ></path>
          <path
            id="i"
            d="M144.77 99.337c10.313 2.175 23.1 1.549 24.361-3.833 1.262-5.354-9.242-15.01-19.555-17.676-10.312-2.759-18.139-.287-19.4 5.56-1.263 5.873 4.281 13.683 14.594 15.949z"
          ></path>
          <path
            id="h"
            d="M26.472 135.74c10.313 2.175 23.1 1.549 24.361-3.833 1.262-5.354-9.242-15.01-19.555-17.676-10.312-2.759-18.139-.287-19.4 5.56-1.263 5.873 4.281 13.683 14.594 15.949z"
          ></path>
          <path
            id="g"
            d="M89.05 146.29c12.564 0 22.75-8.955 22.75-14.34s-10.186-9.75-22.75-9.75-22.75 4.365-22.75 9.75 10.186 14.34 22.75 14.34z"
          ></path>
          <path
            id="k"
            d="M142.17 137.04c10.313 2.175 23.1 1.549 24.361-3.833 1.262-5.354-9.242-15.01-19.555-17.676-10.312-2.759-18.139-.287-19.4 5.56-1.263 5.873 4.281 13.683 14.594 15.949z"
          ></path>
          <path
            id="du"
            d="M75.26 89.97v-.799h.944v-1.088h1.145v1.088h1.258v.799H77.35v1.644c0 .188.043.337.128.446.086.11.256.165.51.165.102 0 .214-.01.334-.028a.795.795 0 00.286-.09v.79a1.73 1.73 0 01-.443.099 4.513 4.513 0 01-.462.027 2.82 2.82 0 01-.75-.082 1.02 1.02 0 01-.457-.25.882.882 0 01-.229-.42 2.426 2.426 0 01-.062-.579V89.97h-.944zm8.966 2.96h-1.087v-.604h-.02a1.417 1.417 0 01-.495.49c-.223.138-.525.207-.906.207-.305 0-.564-.04-.777-.121a1.4 1.4 0 01-.52-.329 1.21 1.21 0 01-.286-.474 1.8 1.8 0 01-.086-.556v-2.372h1.144v1.903c0 .104.007.22.02.348.012.128.045.248.1.36a.712.712 0 00.247.282c.112.076.269.114.472.114a1.3 1.3 0 00.482-.079.919.919 0 00.324-.211.795.795 0 00.186-.305 1.14 1.14 0 00.057-.36V89.17h1.145v3.758zm1.222-3.759h1.25l1.22 2.63h.019l1.23-2.63h1.173l-1.802 3.758h-1.22l-1.87-3.758z"
          ></path>
          <path
            id="dt"
            d="M122.734 85.166h1.13l.904 2.548h.017l.843-2.548h1.13l.903 2.548h.018l.869-2.548h1.051l-1.416 3.64h-1.034l-.99-2.487h-.018l-.878 2.487h-1.078l-1.45-3.64zm9.056 1.684l-1.442-1.684h1.268l.835 1.092.903-1.092h1.19l-1.424 1.684 1.677 1.956h-1.269l-1.086-1.304-1.095 1.304h-1.234l1.677-1.956zm3.52-1.684h1.148l1.164 2.525h.018l1.042-2.525h1.087l-1.973 4.421a2.647 2.647 0 01-.248.451 1.265 1.265 0 01-.747.523 2.39 2.39 0 01-.595.065c-.272 0-.539-.03-.8-.09l.13-.82c.082.025.167.047.257.065.09.017.181.026.274.026.127 0 .234-.01.321-.03a.626.626 0 00.222-.095.536.536 0 00.152-.167c.04-.068.084-.15.13-.246l.2-.433-1.781-3.67zm5.277 2.798l2.233-2.055v-.015h-2.129v-.728h3.389v.827l-2.26 2.085h2.364v.728h-3.597v-.842z"
          ></path>
          <path
            id="ds"
            d="M12.826 83.788h.955v.559h.017c.145-.228.34-.393.587-.497a2.03 2.03 0 01.796-.155c.307 0 .584.05.83.151.246.101.455.24.628.416.174.176.305.383.394.62.09.239.134.495.134.77 0 .274-.047.53-.142.768a1.835 1.835 0 01-1.014 1.036c-.24.101-.503.152-.788.152a2.09 2.09 0 01-.503-.055 1.817 1.817 0 01-.386-.14 1.55 1.55 0 01-.284-.182 1.373 1.373 0 01-.193-.19h-.025v2.244h-1.006v-5.497zm3.336 1.863c0-.145-.027-.284-.08-.419a1.041 1.041 0 00-.235-.357 1.17 1.17 0 00-.373-.249 1.247 1.247 0 00-.494-.093c-.185 0-.35.031-.495.093a1.17 1.17 0 00-.373.249 1.041 1.041 0 00-.234.357 1.133 1.133 0 000 .839c.053.134.131.253.234.357a1.187 1.187 0 00.868.341c.184 0 .35-.03.494-.093a1.17 1.17 0 00.373-.248c.104-.104.182-.223.235-.357a1.14 1.14 0 00.08-.42zm6.564 3.634H21.72V87.04h-.025a1.34 1.34 0 01-.193.19 1.55 1.55 0 01-.285.183 1.85 1.85 0 01-.386.14 2.09 2.09 0 01-.502.054c-.285 0-.548-.05-.788-.152a1.835 1.835 0 01-1.015-1.036 2.055 2.055 0 01-.142-.769c0-.274.045-.53.134-.768.09-.238.22-.445.394-.621a1.87 1.87 0 01.624-.416c.244-.1.522-.151.834-.151.285 0 .55.052.797.155.246.104.441.27.586.497h.017v-.56h.956v5.498zM19.39 85.65c0 .145.026.285.08.42.052.134.13.253.234.357.103.103.228.186.373.248s.31.093.495.093c.184 0 .349-.03.494-.093a1.17 1.17 0 00.373-.248c.103-.104.182-.223.235-.357a1.133 1.133 0 000-.839 1.041 1.041 0 00-.235-.357 1.17 1.17 0 00-.373-.249 1.247 1.247 0 00-.494-.093c-.185 0-.35.031-.495.093a1.17 1.17 0 00-.373.249 1.041 1.041 0 00-.235.357c-.053.135-.08.274-.08.42zm4.954-1.863h1.006v.59h.017c.112-.217.271-.386.478-.505a1.402 1.402 0 011.073-.124v.9a3.012 3.012 0 00-.248-.05 1.513 1.513 0 00-.239-.02c-.234 0-.423.041-.565.121a.989.989 0 00-.327.276.885.885 0 00-.151.31 1.09 1.09 0 00-.038.233v1.996h-1.006v-3.727zm5.886 1.033a.944.944 0 00-.788-.38.896.896 0 00-.394.092.314.314 0 00-.193.303.26.26 0 00.16.249c.105.051.24.095.402.132.162.036.336.073.523.112.188.039.362.098.524.179.162.08.296.19.403.33.106.14.159.33.159.574a.98.98 0 01-.155.563 1.178 1.178 0 01-.403.369 1.88 1.88 0 01-.557.202 3.151 3.151 0 01-.62.062c-.313 0-.6-.042-.863-.124a1.649 1.649 0 01-.705-.45l.671-.583c.129.135.267.245.415.33.148.085.328.128.54.128.073 0 .149-.008.227-.023a.771.771 0 00.218-.078.507.507 0 00.163-.136.303.303 0 00.063-.19.31.31 0 00-.16-.287 1.484 1.484 0 00-.402-.152 9.367 9.367 0 00-.523-.108 2.143 2.143 0 01-.524-.163 1.084 1.084 0 01-.403-.315c-.106-.134-.159-.32-.159-.559 0-.207.046-.387.138-.54a1.16 1.16 0 01.365-.376c.15-.098.324-.17.52-.217a2.56 2.56 0 011.391.058c.263.085.475.232.637.439l-.67.559z"
          ></path>
          <path
            id="dr"
            d="M24.246 121.38v-2.375h1.101v2.375h2.374v1.101h-2.374v2.374h-1.101v-2.374h-2.375v-1.101z"
          ></path>
          <path
            id="dq"
            d="M79.594 53.28v4.12c0 .242-.018.468-.055.675a1.348 1.348 0 01-.214.543 1.053 1.053 0 01-.452.36c-.195.086-.448.13-.759.13a2.74 2.74 0 01-.301-.017 1.863 1.863 0 01-.293-.057l.083-.841.173.028c.055.008.113.012.174.012a.552.552 0 00.315-.077.437.437 0 00.164-.198.83.83 0 00.06-.267c.006-.097.009-.191.009-.283V53.28h1.096zm-1.251-1.318a.53.53 0 01.196-.409.723.723 0 01.498-.174c.201 0 .37.055.507.166.137.11.206.25.206.417a.514.514 0 01-.206.416.782.782 0 01-.507.166.723.723 0 01-.498-.174.53.53 0 01-.196-.408zm3.034-.915h1.097v3.844l1.69-1.61h1.407l-1.882 1.764 2 2.12h-1.452l-1.745-1.983h-.018v1.983h-1.097v-6.118zm5.447 0h1.096v6.118h-1.096v-6.118z"
          ></path>
          <path
            id="dp"
            d="M14.921 46.353v3.537c0 .35-.051.667-.154.95a1.785 1.785 0 01-.478.72 2.21 2.21 0 01-.816.458 3.755 3.755 0 01-1.168.162c-.431 0-.84-.046-1.226-.138a2.922 2.922 0 01-1.072-.502l.695-.793c.232.178.473.316.724.413.251.097.541.146.87.146.276 0 .51-.033.7-.097.189-.065.34-.154.453-.267a.968.968 0 00.241-.41c.049-.158.073-.335.073-.53v-.282h-.02c-.167.188-.389.33-.666.425-.277.094-.56.141-.85.141a2.7 2.7 0 01-.945-.158 2.311 2.311 0 01-.73-.425 1.835 1.835 0 01-.467-.63 1.869 1.869 0 01-.165-.778c0-.286.052-.553.155-.8a1.8 1.8 0 01.454-.648c.2-.184.439-.328.719-.433.28-.105.6-.158.96-.158.329 0 .634.054.917.162.284.108.509.28.676.518h.02v-.583h1.1zm-2.471.777c-.206 0-.393.028-.56.085a1.32 1.32 0 00-.43.235 1.06 1.06 0 00-.381.837c0 .157.034.302.101.437.068.135.163.254.285.356.122.103.267.184.434.243.168.06.348.09.541.09.212 0 .404-.03.574-.09.171-.06.316-.139.435-.239.119-.1.21-.22.275-.36.064-.14.097-.291.097-.453 0-.34-.123-.615-.367-.825-.245-.21-.58-.316-1.004-.316zm5.494-.235h.02c.09-.161.249-.308.477-.44.229-.133.523-.199.884-.199.309 0 .57.043.786.13.216.086.391.2.527.34.135.14.231.302.29.485.057.183.086.375.086.575v2.452h-1.158V48.27c0-.108-.007-.228-.02-.36a1.12 1.12 0 00-.101-.372.72.72 0 00-.256-.292c-.116-.078-.273-.117-.473-.117-.193 0-.356.027-.487.081a.929.929 0 00-.329.219.825.825 0 00-.188.315 1.196 1.196 0 00-.058.372v2.12h-1.158V44.12h1.158v2.775zm4.954-.542h1.158v3.885h-1.158v-3.885zm-.164-1.319a.52.52 0 01.207-.408.791.791 0 01.526-.174.86.86 0 01.536.165c.145.111.217.25.217.417a.505.505 0 01-.217.417.857.857 0 01-.536.166.791.791 0 01-.526-.174.52.52 0 01-.207-.409z"
          ></path>
          <path
            id="do"
            d="M125.88 47.052h1.028v.638h.018c.097-.193.251-.364.465-.515.213-.15.5-.225.861-.225.68 0 1.13.252 1.353.757.156-.26.352-.452.586-.574.235-.122.514-.183.839-.183.289 0 .532.045.73.136.199.09.36.215.483.374.123.16.212.345.266.558.054.213.081.441.081.685v2.434h-1.082v-2.315c0-.125-.012-.245-.036-.362a.837.837 0 00-.126-.306.629.629 0 00-.244-.209.889.889 0 00-.397-.076.937.937 0 00-.428.09.824.824 0 00-.289.238.954.954 0 00-.162.34c-.033.128-.05.257-.05.387v2.213h-1.082v-2.434c0-.255-.057-.458-.171-.609-.114-.15-.304-.225-.568-.225-.18 0-.333.028-.456.085a.869.869 0 00-.482.562 1.403 1.403 0 00-.054.391v2.23h-1.083v-4.085zm8.407 0h1.028v.655h.018c.102-.204.259-.381.47-.532.21-.15.495-.225.856-.225.288 0 .533.045.735.136.201.09.365.21.491.357.127.148.217.318.271.511.054.193.081.394.081.604v2.58h-1.082v-2.069c0-.113-.006-.24-.018-.379a1.296 1.296 0 00-.095-.391.738.738 0 00-.239-.307c-.108-.082-.255-.123-.442-.123-.18 0-.332.028-.455.085a.869.869 0 00-.483.562 1.403 1.403 0 00-.054.391v2.23h-1.082v-4.085zm5.476 2.043c0-.324.061-.618.184-.881.124-.264.29-.49.501-.677.21-.187.46-.332.749-.434.288-.102.595-.153.92-.153.324 0 .63.05.92.153.288.102.537.247.748.434a2.056 2.056 0 01.685 1.558 2.04 2.04 0 01-.685 1.557c-.21.188-.46.332-.749.434a2.737 2.737 0 01-.92.154c-.324 0-.63-.051-.92-.154a2.232 2.232 0 01-.748-.434 2.064 2.064 0 01-.5-.676 2.056 2.056 0 01-.185-.881zm1.082 0c0 .158.028.312.085.46.058.147.142.277.253.39a1.258 1.258 0 00.933.375 1.258 1.258 0 00.933-.375c.112-.113.196-.243.253-.39a1.262 1.262 0 000-.92 1.144 1.144 0 00-.252-.392 1.258 1.258 0 00-.934-.374 1.258 1.258 0 00-.933.375 1.144 1.144 0 00-.253.391c-.057.148-.085.3-.085.46z"
          ></path>
          <path
            id="dn"
            d="M76.656 17.887h-.028a1.37 1.37 0 01-.6.504c-.243.104-.51.156-.8.156a2.27 2.27 0 01-.588-.076 1.643 1.643 0 01-.51-.228 1.205 1.205 0 01-.359-.381 1.02 1.02 0 01-.136-.534c0-.22.042-.407.127-.562.085-.156.199-.285.341-.39.143-.104.308-.187.496-.25a3.72 3.72 0 01.587-.139 5.99 5.99 0 01.614-.06c.207-.008.4-.012.583-.012h.273v-.11c0-.254-.094-.444-.282-.571-.188-.127-.428-.19-.72-.19-.23 0-.445.037-.645.114-.2.076-.373.179-.519.308l-.573-.533a2.15 2.15 0 01.85-.5 3.4 3.4 0 011.006-.151c.31 0 .57.032.783.097.212.065.388.148.528.25.139.101.247.218.323.35.075.133.13.267.163.403.034.135.053.266.06.393.006.127.009.239.009.335v2.336h-.983v-.559zm-.064-1.261h-.227c-.152 0-.322.006-.51.017a2.859 2.859 0 00-.532.08 1.26 1.26 0 00-.423.187.397.397 0 00-.173.342.41.41 0 00.068.241.6.6 0 00.177.166.773.773 0 00.246.097c.091.02.182.03.273.03.376 0 .654-.084.833-.25.179-.167.268-.394.268-.682v-.228zm2.22-4.579h1.093V14.9h.027a1.65 1.65 0 01.519-.406c.12-.062.26-.113.418-.152.158-.04.34-.06.546-.06.31 0 .595.056.855.166a1.992 1.992 0 011.102 1.13c.103.26.154.538.154.837 0 .3-.048.579-.145.838a1.9 1.9 0 01-.428.677 2.02 2.02 0 01-.683.453 2.34 2.34 0 01-.9.165c-.31 0-.598-.056-.865-.17a1.373 1.373 0 01-.637-.54h-.018v.609h-1.037v-6.399zm3.622 4.367c0-.158-.029-.31-.086-.457a1.136 1.136 0 00-.255-.389 1.27 1.27 0 00-.405-.27 1.35 1.35 0 00-.537-.102c-.2 0-.379.033-.537.101a1.27 1.27 0 00-.405.271 1.136 1.136 0 00-.254.39 1.239 1.239 0 000 .913c.057.147.142.277.254.39.113.113.248.203.405.27.158.068.337.102.537.102s.38-.034.537-.101a1.27 1.27 0 00.405-.271c.112-.113.197-.243.255-.39.057-.146.086-.299.086-.457zm5.096-.812a1.729 1.729 0 00-.4-.296.91.91 0 00-.428-.11c-.2 0-.379.033-.537.101a1.27 1.27 0 00-.405.271 1.136 1.136 0 00-.254.39 1.239 1.239 0 000 .913c.057.147.142.277.254.39.113.113.248.203.405.27.158.068.337.102.537.102.17 0 .328-.032.473-.097.146-.065.27-.16.374-.284l.727.728c-.109.102-.235.19-.377.263a2.802 2.802 0 01-1.197.305c-.327 0-.637-.052-.928-.153a2.26 2.26 0 01-.755-.432 2.02 2.02 0 01-.692-1.549 2.02 2.02 0 01.692-1.548 2.26 2.26 0 01.755-.432c.291-.102.6-.152.928-.152.28 0 .56.049.842.148.282.098.53.255.742.47l-.756.702z"
          ></path>
          <path
            id="ag"
            d="M149.148 2.618l-2.444-.402c.203-.715.593-1.264 1.17-1.645.578-.38 1.396-.571 2.454-.571 1.215 0 2.093.208 2.634.624.542.416.813.939.813 1.569 0 .369-.11.703-.33 1.002-.22.3-.552.562-.997.788.36.081.635.177.826.285.308.175.549.406.72.691.171.286.257.627.257 1.024 0 .497-.142.975-.425 1.431-.284.457-.692.809-1.225 1.056-.534.247-1.234.37-2.101.37-.847 0-1.514-.091-2.003-.274a2.994 2.994 0 01-1.206-.802c-.315-.352-.558-.794-.727-1.326l2.584-.315c.101.478.259.81.472.994.214.185.486.277.816.277.347 0 .636-.117.867-.35.23-.233.346-.544.346-.933 0-.396-.112-.704-.334-.921-.222-.218-.523-.327-.904-.327-.203 0-.483.047-.838.14l.133-1.697c.144.02.256.03.337.03.338 0 .62-.1.847-.298.226-.198.34-.433.34-.706 0-.26-.085-.468-.254-.623-.17-.156-.402-.234-.699-.234-.304 0-.552.085-.742.254-.19.169-.32.465-.387.89z"
          ></path>
          <path
            id="dm"
            d="M2.951 4.02L1.105 5.581 0 4.358l3.003-2.435h1.82v8.84H2.951z"
          ></path>
          <path
            id="dl"
            d="M63.544 16.558l3.575-2.899c.182-.148.364-.317.546-.504a.915.915 0 00.273-.658.77.77 0 00-.338-.663c-.225-.16-.49-.24-.793-.24-.364 0-.648.101-.852.305a1.172 1.172 0 00-.344.751l-1.95-.13a2.64 2.64 0 01.299-1.12 2.41 2.41 0 01.689-.792 3.02 3.02 0 011.007-.475 4.736 4.736 0 011.255-.159c.416 0 .806.053 1.17.159.364.105.68.262.949.469.269.207.479.468.63.78.152.313.228.677.228 1.092 0 .266-.03.507-.091.722a2.28 2.28 0 01-.254.587 2.701 2.701 0 01-.383.487 6.028 6.028 0 01-.481.434l-2.795 2.171h4.082v1.55h-6.422v-1.867z"
          ></path>
          <path
            id="ct"
            d="M71.319 50.683h-3.947L67.329 52c.216-.064.51-.096.885-.096.506 0 .97.064 1.391.193.422.13.784.317 1.089.563.304.246.54.544.71.895.168.35.252.744.252 1.18 0 .483-.096.915-.288 1.294-.192.379-.456.7-.794.962a3.595 3.595 0 01-1.2.598 5.304 5.304 0 01-1.51.206c-.862 0-1.583-.181-2.164-.544-.58-.363-.979-.912-1.194-1.646l2.205-.435c.057.306.206.554.45.744.243.19.548.284.913.284.45 0 .808-.12 1.075-.363.266-.242.4-.548.4-.92 0-.281-.068-.513-.204-.695a1.464 1.464 0 00-.534-.435 2.47 2.47 0 00-.737-.224 5.54 5.54 0 00-.815-.06c-.346 0-.695.028-1.046.084a8.3 8.3 0 00-1.019.23l.113-4.73h6.012v1.597z"
          ></path>
          <path
            id="cr"
            d="M64.476 126.418c0-.491.057-.99.17-1.497a3.82 3.82 0 01.609-1.381c.291-.413.69-.75 1.193-1.012.505-.261 1.147-.392 1.928-.392.781 0 1.424.13 1.928.392.504.261.902.599 1.194 1.012.291.413.494.874.608 1.38a6.83 6.83 0 01.17 1.498c0 .492-.057.99-.17 1.498a3.82 3.82 0 01-.608 1.38c-.292.414-.69.751-1.194 1.012-.504.262-1.147.392-1.928.392-.78 0-1.423-.13-1.928-.392a3.266 3.266 0 01-1.193-1.012 3.82 3.82 0 01-.608-1.38 6.83 6.83 0 01-.17-1.498zm2.224 0c0 .219.013.48.038.784.024.304.091.597.2.878.108.28.274.518.496.713.223.195.537.293.942.293.396 0 .707-.098.934-.293.228-.195.396-.433.505-.713.108-.281.175-.574.2-.878.024-.304.037-.565.037-.784 0-.218-.013-.48-.037-.784a3.115 3.115 0 00-.2-.877 1.766 1.766 0 00-.505-.714c-.227-.195-.538-.292-.934-.292-.405 0-.72.097-.942.292a1.798 1.798 0 00-.496.714c-.109.28-.176.573-.2.877a9.884 9.884 0 00-.038.784z"
          ></path>
          <path
            id="cp"
            d="M143.197 113.93l.564-2.73h1.51l-.563 2.73h1.71v1.238h-1.965l-.346 1.638h1.784v1.238h-2.039l-.564 2.73h-1.51l.564-2.73h-2.02l-.565 2.73h-1.456l.565-2.73h-1.784v-1.238h2.038l.346-1.638h-1.838v-1.238h2.093l.564-2.73h1.456l-.564 2.73h2.02zm-2.62 2.876h2.02l.345-1.638h-2.02l-.346 1.638z"
          ></path>
          <path
            id="cn"
            d="M5.806 75.864H1.59v-1.521h6.24v1.454l-3.409 6.346H2.313z"
          ></path>
          <path
            id="cl"
            d="M64.939 88.21c0-.371.093-.695.28-.972.186-.276.444-.507.772-.693a3.945 3.945 0 011.143-.415 6.85 6.85 0 011.393-.136c.494 0 .959.045 1.393.136.434.091.812.23 1.135.415.323.186.58.417.773.693.191.277.287.6.287.972 0 .44-.159.815-.477 1.125-.318.311-.764.53-1.34.66v.022c.646.13 1.14.362 1.484.7.343.337.515.755.515 1.255 0 .387-.104.728-.31 1.023-.207.296-.485.54-.833.733-.348.194-.75.34-1.204.438a6.698 6.698 0 01-1.423.148c-.495 0-.97-.05-1.423-.148a4.383 4.383 0 01-1.204-.438 2.442 2.442 0 01-.833-.733 1.739 1.739 0 01-.31-1.023c0-.5.171-.918.515-1.256.343-.337.837-.57 1.483-.699v-.022c-.575-.13-1.022-.349-1.34-.66a1.516 1.516 0 01-.476-1.125zm2.27.239c0 .25.122.462.364.636.242.175.56.262.954.262.394 0 .712-.087.954-.262.242-.174.363-.386.363-.636 0-.243-.121-.451-.363-.625-.242-.175-.56-.262-.954-.262-.394 0-.712.087-.954.262-.242.174-.363.382-.363.625zm-.181 3.285c0 .28.136.519.409.716.272.197.636.295 1.09.295.454 0 .817-.098 1.09-.295.273-.197.409-.436.409-.716 0-.288-.136-.53-.409-.728-.273-.197-.636-.295-1.09-.295-.454 0-.818.098-1.09.295-.273.197-.409.44-.409.728z"
          ></path>
          <path
            id="bu"
            d="M147.775 78.151c-.114.02-.229.037-.343.05a4.439 4.439 0 01-1.657-.159 3.252 3.252 0 01-1-.486 2.227 2.227 0 01-.642-.73 1.86 1.86 0 01-.228-.9c0-.363.097-.693.293-.987.195-.295.461-.548.8-.76a4.152 4.152 0 011.192-.491 6.032 6.032 0 011.485-.174c.523 0 1.016.058 1.478.174.462.115.861.28 1.2.491.337.212.604.465.8.76.194.294.292.624.292.988 0 .252-.034.482-.1.69a2.884 2.884 0 01-.264.591 3.55 3.55 0 01-.386.531 39.95 39.95 0 01-.464.522l-2.213 2.403h-2.614l2.37-2.513zm-1.728-2.164c0 .317.15.58.45.789.3.209.692.313 1.178.313.485 0 .878-.104 1.178-.313.3-.209.45-.472.45-.79 0-.317-.15-.58-.45-.789-.3-.209-.693-.313-1.178-.313-.486 0-.878.104-1.178.313-.3.209-.45.472-.45.79z"
          ></path>
          <path
            id="bo"
            d="M148.213 38.617a4.37 4.37 0 01.312-.059 3.185 3.185 0 011.508.188c.355.14.659.333.91.575.251.243.446.53.585.863.139.332.208.686.208 1.062 0 .43-.089.82-.266 1.168a2.77 2.77 0 01-.728.897c-.308.25-.672.444-1.093.581a4.31 4.31 0 01-1.345.206 4.3 4.3 0 01-1.352-.206 3.37 3.37 0 01-1.085-.58 2.77 2.77 0 01-.728-.898 2.532 2.532 0 01-.267-1.168c0-.297.03-.57.091-.816.06-.246.14-.48.24-.698.1-.22.217-.428.351-.628.135-.2.276-.405.423-.616l2.015-2.84h2.379l-2.158 2.969zm1.573 2.558c0-.375-.136-.686-.41-.933-.273-.246-.63-.37-1.072-.37-.442 0-.8.124-1.072.37-.274.247-.41.558-.41.933 0 .376.136.687.41.933.273.247.63.37 1.072.37.442 0 .8-.123 1.072-.37.274-.246.41-.557.41-.933z"
          ></path>
          <path
            id="bi"
            d="M4.836 43.778H.819v-1.504l3.757-5.251h2.132v5.251h1.183v1.504H6.708v1.695H4.836v-1.695zm0-4.416H4.81l-2.041 2.912h2.067v-2.912z"
          ></path>
          <path
            id="bc"
            d="M13.972 118.149l-.772 1.287-3.051-2.021v3.681H8.721v-3.681l-3.089 2.046-.76-1.312 3.244-2.111-3.244-2.111.76-1.287 3.089 2.059v-3.668h1.428v3.642l3.051-2.033.772 1.287-3.192 2.111z"
          ></path>
          <path
            id="ax"
            d="M81.074 132.76h1.053v-8.845h-1.053v-.772h2.036v10.389h-2.036z"
          ></path>
          <path
            id="at"
            d="M127.28 118.825l4.683 3.406-.67.923-.639-.465v2.778h-6.773l-.001-2.685-.491.368-.682-.915 4.573-3.41zm.008 1.416l-2.316 1.727.049.001v2.358h4.493l-.001-2.468-2.225-1.618z"
          ></path>
          <path
            id="aq"
            d="M13.061 15.843a3.454 3.454 0 112.575-1.152h3.542a3.454 3.454 0 112.575 1.152H13.06zm0-5.757a2.303 2.303 0 100 4.606 2.303 2.303 0 000-4.606zm8.692 0a2.303 2.303 0 100 4.606 2.303 2.303 0 000-4.606z"
          ></path>
          <path
            id="f"
            d="M9.42 22.816a393.34 393.34 0 0014.773-3.429c5.344-1.357 10.66-3.21 15.948-5.556a3.9 3.9 0 015.423 2.89l3.148 17.939a5.2 5.2 0 01-4.428 6.053c-7.978 1.07-13.615 1.687-16.91 1.848-11.722.574-19.584-1.195-21.907-2.376-3.294-1.675-2.873-6.762 1.262-15.263a3.9 3.9 0 012.69-2.105z"
          ></path>
          <path id="df" d="M26.835 25.893v2a4 4 0 100 8v2a6 6 0 110-12z"></path>
          <path
            id="e"
            d="M103.67 23.78c7.583 1.868 15.214 2.68 22.892 2.436a119.81 119.81 0 0025.095-3.481 5.198 5.198 0 015.562 2.14l5.92 8.792a3.895 3.895 0 01-.995 5.367c-8.74 6.143-19.423 10.574-32.047 13.291-9.778 2.105-21.533 2.467-35.264 1.084a3.9 3.9 0 01-3.364-4.94l5.954-21.056a5.2 5.2 0 016.247-3.633z"
          ></path>
          <path
            id="cy"
            d="M117.538 50.399l-9.873.527 1.662-9.627.879 7.227z"
          ></path>
          <path
            id="cx"
            d="M139.27 24.032l8.232-2.227-.561 7.995-1.404-5.768z"
          ></path>
          <path
            id="u"
            d="M82.734 24.943c23.693 0 44.211-12.958 44.211-19.78 0-6.82-20.518-4.92-44.211-4.92s-44.923-1.9-44.923 4.92c0 6.822 21.23 19.78 44.923 19.78z"
          ></path>
          <path
            id="d"
            d="M7.318 2.255A1292.458 1292.458 0 0183.611 0c23.178 0 46.356.737 69.535 2.212a6.5 6.5 0 016.084 6.255c.6 16.837.503 33.673-.29 50.51a570.512 570.512 0 01-4.416 48.847 6.5 6.5 0 01-6.027 5.627 1105.935 1105.935 0 01-70.483 2.249c-22.38 0-44.76-.745-67.139-2.235a6.5 6.5 0 01-6.01-5.619A567.1 567.1 0 01.454 59.133a410.269 410.269 0 01.765-50.891 6.5 6.5 0 016.1-5.987z"
          ></path>
          <path id="ap" d="M0 0h88v15.6H0z"></path>
          <pattern
            id="jb"
            width="258"
            height="258"
            x="-258"
            y="-256.7"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#a"></use>
          </pattern>
          <pattern
            id="ja"
            width="258"
            height="258"
            x="-258"
            y="-256.7"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#b"></use>
          </pattern>
          <pattern
            id="iy"
            width="258"
            height="258"
            x="-258"
            y="-256.7"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#c"></use>
          </pattern>
          <pattern
            id="iu"
            width="512"
            height="512"
            x="-505.5"
            y="-510.7"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#d"></use>
          </pattern>
          <pattern
            id="ir"
            width="512"
            height="512"
            x="-496.426"
            y="-504.294"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#e"></use>
          </pattern>
          <pattern
            id="ip"
            width="258"
            height="258"
            x="-237.2"
            y="-251.5"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#f"></use>
          </pattern>
          <pattern
            id="in"
            width="258"
            height="258"
            x="-237.2"
            y="-251.5"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#g"></use>
          </pattern>
          <pattern
            id="ij"
            width="258"
            height="258"
            x="-226.615"
            y="-9.72"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#h"></use>
          </pattern>
          <pattern
            id="hg"
            width="512"
            height="512"
            x="-506.8"
            y="-508.1"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#i"></use>
          </pattern>
          <pattern
            id="hb"
            width="512"
            height="512"
            x="-446.294"
            y="-501.46"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#j"></use>
          </pattern>
          <pattern
            id="gw"
            width="512"
            height="512"
            x="-378.1"
            y="-508.462"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#k"></use>
          </pattern>
          <pattern
            id="ic"
            width="512"
            height="512"
            x="-505.5"
            y="-471.7"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#l"></use>
          </pattern>
          <pattern
            id="hx"
            width="512"
            height="512"
            x="-445.7"
            y="-462.6"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#m"></use>
          </pattern>
          <pattern
            id="hs"
            width="512"
            height="512"
            x="-380.7"
            y="-471.7"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#n"></use>
          </pattern>
          <pattern
            id="hn"
            width="512"
            height="512"
            x="-502.9"
            y="-435.3"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#o"></use>
          </pattern>
          <pattern
            id="ge"
            width="512"
            height="512"
            x="-445.7"
            y="-426.2"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#p"></use>
          </pattern>
          <pattern
            id="fz"
            width="512"
            height="512"
            x="-382"
            y="-435.3"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#q"></use>
          </pattern>
          <pattern
            id="fu"
            width="512"
            height="512"
            x="-500.3"
            y="-398.9"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#r"></use>
          </pattern>
          <pattern
            id="fp"
            width="512"
            height="512"
            x="-445.7"
            y="-389.8"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#s"></use>
          </pattern>
          <pattern
            id="gu"
            width="512"
            height="512"
            x="-384.6"
            y="-397.6"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#t"></use>
          </pattern>
          <pattern
            id="gj"
            width="258"
            height="258"
            x="-111.436"
            y="-258"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#u"></use>
          </pattern>
          <pattern
            id="eg"
            width="258"
            height="258"
            x="-258"
            y="-256.794"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#v"></use>
          </pattern>
          <pattern
            id="fb"
            width="512"
            height="512"
            x="-421.782"
            y="-489.601"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#w"></use>
          </pattern>
          <pattern
            id="dz"
            width="258"
            height="258"
            x="-258"
            y="-258"
            patternUnits="userSpaceOnUse"
          >
            <use xlinkHref="#x"></use>
          </pattern>
          <linearGradient
            id="dw"
            x1="60.047%"
            x2="45.987%"
            y1="-2.706%"
            y2="99.205%"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#474E55" stopOpacity="0.366"></stop>
          </linearGradient>
          <linearGradient
            id="iz"
            x1="56.149%"
            x2="47.674%"
            y1="61.633%"
            y2="92.414%"
          >
            <stop offset="0" stopColor="#5C6671"></stop>
            <stop offset="1" stopColor="#3B4149"></stop>
          </linearGradient>
          <linearGradient id="iv" x1="50%" x2="50%" y1="-43.015%" y2="100%">
            <stop offset="0" stopColor="#FFF" stopOpacity="0.5"></stop>
            <stop offset="1" stopColor="#B4B4AC"></stop>
          </linearGradient>
          <linearGradient id="is" x1="50%" x2="50%" y1="-96.738%" y2="100%">
            <stop offset="0" stopColor="#D2D3CE" stopOpacity="0.5"></stop>
            <stop offset="1" stopColor="#D2D3CE"></stop>
          </linearGradient>
          <linearGradient
            id="iq"
            x1="63.366%"
            x2="27.922%"
            y1="6.62%"
            y2="81.659%"
          >
            <stop offset="0" stopColor="#B7B8BB"></stop>
            <stop offset="1" stopColor="#454E55"></stop>
          </linearGradient>
          <linearGradient
            id="io"
            x1="117.54%"
            x2="35.658%"
            y1="166.47%"
            y2="4.081%"
          >
            <stop offset="0" stopColor="#FFF" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#515864"></stop>
          </linearGradient>
          <linearGradient
            id="dv"
            x1="-735.67%"
            x2="377.56%"
            y1="-561.8%"
            y2="400.96%"
          >
            <stop offset="0" stopColor="#545D64" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#2A2D35"></stop>
          </linearGradient>
          <linearGradient
            id="ah"
            x1="60.746%"
            x2="8.255%"
            y1="35.891%"
            y2="57.64%"
          >
            <stop offset="0" stopOpacity="0.58"></stop>
            <stop offset="1" stopColor="#6D7884"></stop>
          </linearGradient>
          <linearGradient
            id="a"
            x1="55.965%"
            x2="55.965%"
            y1="11.635%"
            y2="100%"
          >
            <stop offset="0" stopColor="#FFF" stopOpacity="0.5"></stop>
            <stop offset="1" stopColor="#656565" stopOpacity="0.5"></stop>
          </linearGradient>
          <linearGradient
            id="y"
            x1="8.603%"
            x2="60.875%"
            y1="62.355%"
            y2="32.347%"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="0.412" stopColor="#2D2D2D"></stop>
            <stop offset="1" stopColor="#575353"></stop>
          </linearGradient>
          <linearGradient id="w" x1="51.875%" x2="51.875%" y2="100%">
            <stop offset="0" stopColor="#FFF" stopOpacity="0.8"></stop>
            <stop offset="1" stopColor="#656565"></stop>
          </linearGradient>
          <linearGradient
            id="v"
            x1="105.97%"
            x2="-18.077%"
            y1="74.721%"
            y2="31.839%"
          >
            <stop offset="0" stopColor="#7C848E" stopOpacity="0.496"></stop>
            <stop offset="0.491" stopColor="#8893A4"></stop>
            <stop offset="1" stopColor="#2D3135"></stop>
          </linearGradient>
          <linearGradient
            id="ig"
            x1="50%"
            x2="32.994%"
            y1="31.839%"
            y2="70.79%"
          >
            <stop offset="0" stopOpacity="0.58"></stop>
            <stop offset="1" stopColor="#A5A6A7"></stop>
          </linearGradient>
          <linearGradient
            id="fi"
            x1="89.701%"
            x2="13.807%"
            y1="59.266%"
            y2="38.35%"
          >
            <stop offset="0" stopColor="#A7A7A2"></stop>
            <stop offset="1" stopColor="#A7A7A7"></stop>
          </linearGradient>
          <linearGradient id="fh" x1="50%" x2="-23.422%" y1="55.197%" y2="50%">
            <stop offset="0" stopColor="#FFF" stopOpacity="0.05"></stop>
            <stop offset="1" stopOpacity="0.495"></stop>
          </linearGradient>
          <linearGradient
            id="fe"
            x1="74.693%"
            x2="50%"
            y1="29.644%"
            y2="70.356%"
          >
            <stop offset="0" stopColor="#777"></stop>
            <stop offset="1" stopColor="#424242"></stop>
          </linearGradient>
          <linearGradient
            id="fc"
            x1="86.8%"
            x2="20.281%"
            y1="47.085%"
            y2="52.871%"
          >
            <stop offset="0" stopColor="#FFF" stopOpacity="0.5"></stop>
            <stop offset="1" stopColor="#D0D2C9"></stop>
          </linearGradient>
          <linearGradient id="fa" x1="50%" x2="22.995%" y1="50%" y2="50%">
            <stop offset="0" stopColor="#B3B4AC" stopOpacity="0.286"></stop>
            <stop offset="1" stopColor="#ADAEA6" stopOpacity="0.373"></stop>
          </linearGradient>
          <linearGradient id="ey" x1="50%" x2="50%" y2="100%">
            <stop offset="0" stopColor="#807575"></stop>
            <stop offset="1" stopColor="#3F3939"></stop>
          </linearGradient>
          <linearGradient id="ev" x1="50%" x2="50%" y1="100%">
            <stop offset="0" stopColor="#A6A7A2"></stop>
            <stop offset="1" stopColor="#F3F3F1"></stop>
          </linearGradient>
          <linearGradient id="eu" x1="50%" x2="50%" y2="100%">
            <stop offset="0" stopColor="#FFF" stopOpacity="0.5"></stop>
            <stop offset="1" stopOpacity="0.03"></stop>
          </linearGradient>
          <linearGradient
            id="cv"
            x1="198.64%"
            x2="-22.694%"
            y1="-45.528%"
            y2="70.849%"
          >
            <stop offset="0" stopColor="#ECECEC"></stop>
            <stop offset="1" stopColor="#9D9D9D"></stop>
          </linearGradient>
          <linearGradient
            id="ea"
            x1="77.121%"
            x2="110.74%"
            y1="61.812%"
            y2="95.833%"
          >
            <stop offset="0" stopColor="#FFF" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#9B9F90" stopOpacity="0.477"></stop>
          </linearGradient>
          <radialGradient
            id="b"
            cx="16.034%"
            cy="30.415%"
            r="144.86%"
            gradientTransform="matrix(.53219 .48035 -.29146 .87708 .164 -.04)"
          >
            <stop offset="0" stopColor="#F2F2EB"></stop>
            <stop offset="1" stopColor="#8F928A"></stop>
          </radialGradient>
          <radialGradient
            id="x"
            cy="7.149%"
            r="159.76%"
            gradientTransform="matrix(0 1 -.52946 0 .538 -.429)"
          >
            <stop offset="0.038" stopColor="#F5F5F5"></stop>
            <stop offset="1" stopColor="#8F928A"></stop>
          </radialGradient>
          <radialGradient
            id="fg"
            cx="26.005%"
            cy="-95.519%"
            r="257.24%"
            gradientTransform="matrix(-.63101 .1482 -.09456 -.98896 .334 -1.938)"
          >
            <stop offset="0" stopOpacity="0.101"></stop>
            <stop offset="0.499" stopColor="#FFF" stopOpacity="0.5"></stop>
            <stop offset="1" stopOpacity="0"></stop>
          </radialGradient>
          <ellipse id="af" cx="7.15" cy="41.506" rx="7.15" ry="40.3"></ellipse>
          <ellipse id="dj" cx="7.15" cy="14.206" rx="5.2" ry="2.6"></ellipse>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#858682"
            fillRule="nonzero"
            d="M61.1 3.6A2.6 2.6 0 0163.7 1h90.141a2.6 2.6 0 012.6 2.6H61.1z"
          ></path>
          <g transform="translate(0 1)">
            <use fill="#393E46" xlinkHref="#c"></use>
            <use fill="url(#dw)" fillOpacity="0.2" xlinkHref="#c"></use>
            <use fill="url(#jb)" fillOpacity="0.02" xlinkHref="#c"></use>
            <use fill="url(#ja)" fillOpacity="0.02" xlinkHref="#c"></use>
            <use fill="url(#iz)" fillOpacity="0.54" xlinkHref="#c"></use>
            <use fill="url(#iy)" fillOpacity="0.02" xlinkHref="#c"></use>
            <use fill="#000" filter="url(#ix)" xlinkHref="#c"></use>
          </g>
          <g transform="translate(0 1)">
            <use fill="#000" filter="url(#iw)" xlinkHref="#t"></use>
            <use fill="#C4C5BF" xlinkHref="#t"></use>
            <use fill="url(#iv)" xlinkHref="#t"></use>
            <use fill="url(#iu)" fillOpacity="0.02" xlinkHref="#t"></use>
            <use fill="#000" filter="url(#it)" xlinkHref="#t"></use>
          </g>
          <g transform="translate(0 1)">
            <use fill="#D1D2CB" xlinkHref="#ao"></use>
            <use fill="url(#is)" xlinkHref="#ao"></use>
            <use fill="url(#ir)" fillOpacity="0.04" xlinkHref="#ao"></use>
          </g>
          <g transform="translate(0 1)">
            <use fill="url(#iq)" xlinkHref="#s"></use>
            <use fill="url(#ip)" fillOpacity="0.02" xlinkHref="#s"></use>
            <use fill="url(#io)" xlinkHref="#s"></use>
            <use fill="url(#in)" fillOpacity="0.03" xlinkHref="#s"></use>
            <use fill="#000" filter="url(#im)" xlinkHref="#s"></use>
          </g>
          <path
            fill="url(#dv)"
            d="M24.756 125.68l9.585 1.457 4.191 7.67c-3.408-.068-5.703 1.284-6.885 4.054-.025.06-2.322-4.335-6.891-13.181z"
            filter="url(#il)"
            opacity="0.703"
            transform="translate(0 1)"
          ></path>
          <path
            fill="url(#dv)"
            d="M181.597 125.68l9.586 1.457 4.19 7.67c-3.408-.068-5.703 1.284-6.885 4.054-.025.06-2.322-4.335-6.891-13.181z"
            filter="url(#ik)"
            opacity="0.5"
            transform="matrix(-1 0 0 1 376.97 1)"
          ></path>
          <g transform="translate(0 1)">
            <use fill="#4E545E" xlinkHref="#ak"></use>
            <use fill="url(#ij)" fillOpacity="0.03" xlinkHref="#ak"></use>
            <use fill="#000" filter="url(#ii)" xlinkHref="#ak"></use>
          </g>
          <path
            stroke="#FFF"
            strokeWidth="1.3"
            d="M171.6 504.64c13.18-4.052 20.598-13.773 22.254-29.163 1.657-15.39 6.194-78.549 13.61-189.48"
            filter="url(#ih)"
            opacity="0.12"
            transform="translate(0 1)"
          ></path>
          <path
            stroke="#000"
            strokeWidth="2.6"
            d="M7.8 507.24c13.18-4.052 20.598-13.773 22.254-29.163 1.657-15.39 6.194-78.549 13.61-189.48"
            filter="url(#hk)"
            opacity="0.154"
            transform="matrix(-1 0 0 1 51.465 1)"
          ></path>
          <path
            fill="url(#ah)"
            d="M17.725 26.648c12.017 2.534 27.721 2.742 29.192-3.528 1.47-6.24-11.575-18.428-23.592-21.536C11.31-1.63 2.188 1.251.718 8.064c-1.47 6.844 4.99 15.943 17.007 18.584z"
            filter="url(#hj)"
            transform="translate(20.8 337.7)"
          ></path>
          <g
            filter="url(#hi)"
            transform="translate(20.8 337.7)"
            onClick={() => setValue(1)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent focus:outline-none focus:bg-transparent"
          >
            <use fill="#000" filter="url(#hh)" xlinkHref="#n"></use>
            <use fill="url(#b)" xlinkHref="#n"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#n"></use>
            <use fill="url(#hg)" fillOpacity="0.012" xlinkHref="#n"></use>
            <use fill="#000" filter="url(#hf)" xlinkHref="#n"></use>
          </g>
          <path
            fill="#585E62"
            stroke="url(#y)"
            strokeWidth="0.65"
            d="M88.456 37.587c15.108 0 27.355-11.154 27.355-17.86 0-6.708-12.247-12.145-27.355-12.145S61.1 13.02 61.1 19.726s12.248 17.861 27.356 17.861z"
            filter="url(#he)"
            transform="translate(20.8 337.7)"
          ></path>
          <g
            filter="url(#hd)"
            transform="translate(20.8 337.7)"
            onClick={() => setValue(2)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent  focus:outline-none focus:bg-transparent"
          >
            <use fill="#000" filter="url(#hc)" xlinkHref="#m"></use>
            <use fill="url(#x)" xlinkHref="#m"></use>
            <use fill="url(#w)" fillOpacity="0.74" xlinkHref="#m"></use>
            <use fill="url(#hb)" fillOpacity="0.01" xlinkHref="#m"></use>
            <use fill="#000" filter="url(#ha)" xlinkHref="#m"></use>
          </g>
          <path
            fill="url(#v)"
            d="M147.07 27.948c12.017 2.534 27.721 2.742 29.192-3.528 1.47-6.24-11.575-18.428-23.592-21.536-12.017-3.214-21.137-.333-22.607 6.48-1.47 6.844 4.99 15.943 17.007 18.584z"
            filter="url(#gz)"
            transform="matrix(-1 0 0 1 327.04 337.7)"
          ></path>
          <g
            filter="url(#gy)"
            transform="matrix(-1 0 0 1 327.84 337.7)"
            onClick={() => setValue(3)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent  focus:outline-none focus:bg-transparent"
            style={{ outline: 'none' }}
          >
            <use fill="#000" filter="url(#gx)" xlinkHref="#l"></use>
            <use fill="url(#b)" xlinkHref="#l"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#l"></use>
            <use fill="url(#gw)" fillOpacity="0.012" xlinkHref="#l"></use>
            <use fill="#000" filter="url(#gv)" xlinkHref="#l"></use>
          </g>
          <path
            fill="url(#ig)"
            d="M19.025 64.348c12.017 2.534 27.721 2.742 29.192-3.528 1.47-6.24-11.575-18.428-23.592-21.536-12.016-3.214-21.137-.333-22.607 6.48-1.47 6.844 4.99 15.943 17.007 18.584z"
            filter="url(#if)"
            transform="translate(20.8 337.7)"
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
            onClick={() => setValue(4)}
          ></path>
          <g
            filter="url(#ie)"
            transform="translate(20.8 337.7)"
            onClick={() => setValue(4)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
          >
            <use fill="#000" filter="url(#id)" xlinkHref="#r"></use>
            <use fill="url(#b)" xlinkHref="#r"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#r"></use>
            <use fill="url(#ic)" fillOpacity="0.012" xlinkHref="#r"></use>
            <use fill="#000" filter="url(#ib)" xlinkHref="#r"></use>
          </g>
          <path
            fill="#585E62"
            stroke="url(#y)"
            strokeWidth="0.5"
            d="M88.456 76.587c15.108 0 27.355-11.154 27.355-17.86 0-6.708-12.247-12.145-27.355-12.145S61.1 52.02 61.1 58.726s12.248 17.861 27.356 17.861z"
            filter="url(#ia)"
            transform="translate(20.8 337.7)"
          ></path>
          <g
            filter="url(#hz)"
            transform="translate(20.8 337.7)"
            onClick={() => setValue(5)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
          >
            <use fill="#000" filter="url(#hy)" xlinkHref="#q"></use>
            <use fill="url(#x)" xlinkHref="#q"></use>
            <use fill="url(#w)" fillOpacity="0.74" xlinkHref="#q"></use>
            <use fill="url(#hx)" fillOpacity="0.01" xlinkHref="#q"></use>
            <use fill="#000" filter="url(#hw)" xlinkHref="#q"></use>
          </g>
          <path
            fill="url(#v)"
            d="M144.47 64.348c12.017 2.534 27.721 2.742 29.192-3.528 1.47-6.24-11.575-18.428-23.592-21.536-12.017-3.214-21.137-.333-22.607 6.48-1.47 6.844 4.99 15.943 17.007 18.584z"
            filter="url(#hv)"
            transform="matrix(-1 0 0 1 321.84 337.7)"
          ></path>
          <g filter="url(#hu)" transform="matrix(-1 0 0 1 322.64 337.7)">
            <use fill="#000" filter="url(#ht)" xlinkHref="#p"></use>
            <use fill="url(#b)" xlinkHref="#p"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#p"></use>
            <use fill="url(#hs)" fillOpacity="0.012" xlinkHref="#p"></use>
            <use fill="#000" filter="url(#hr)" xlinkHref="#p"></use>
          </g>
          <path
            fill="url(#ah)"
            d="M21.625 101.45c12.017 2.535 27.721 2.743 29.192-3.528 1.47-6.239-11.575-18.427-23.592-21.535-12.016-3.214-21.137-.333-22.607 6.48-1.47 6.843 4.99 15.943 17.007 18.583z"
            filter="url(#hq)"
            transform="translate(20.8 337.7)"
          ></path>
          <g filter="url(#hp)" transform="translate(20.8 337.7)">
            <use fill="#000" filter="url(#ho)" xlinkHref="#o"></use>
            <use fill="url(#b)" xlinkHref="#o"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#o"></use>
            <use fill="url(#hn)" fillOpacity="0.012" xlinkHref="#o"></use>
            <use fill="#000" filter="url(#hm)" xlinkHref="#o"></use>
          </g>
          <path
            fill="#585E62"
            stroke="url(#y)"
            strokeWidth="0.5"
            d="M88.456 112.07c15.108 0 27.355-11.155 27.355-17.862s-12.247-12.144-27.355-12.144S61.1 87.501 61.1 94.208s12.248 17.862 27.356 17.862z"
            filter="url(#hl)"
            transform="translate(20.8 337.7)"
          ></path>
          <g filter="url(#gg)" transform="translate(20.8 337.7)">
            <use fill="#000" filter="url(#gf)" xlinkHref="#j"></use>
            <use fill="url(#x)" xlinkHref="#j"></use>
            <use fill="url(#w)" fillOpacity="0.74" xlinkHref="#j"></use>
            <use fill="url(#ge)" fillOpacity="0.01" xlinkHref="#j"></use>
            <use fill="#000" filter="url(#gd)" xlinkHref="#j"></use>
          </g>
          <path
            fill="url(#v)"
            d="M143.17 101.45c12.017 2.535 27.721 2.743 29.192-3.528 1.47-6.239-11.575-18.427-23.592-21.535-12.017-3.214-21.137-.333-22.607 6.48-1.47 6.843 4.99 15.943 17.007 18.583z"
            filter="url(#gc)"
            transform="matrix(-1 0 0 1 319.24 337.7)"
          ></path>
          <g filter="url(#gb)" transform="matrix(-1 0 0 1 320.04 337.7)">
            <use fill="#000" filter="url(#ga)" xlinkHref="#i"></use>
            <use fill="url(#b)" xlinkHref="#i"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#i"></use>
            <use fill="url(#fz)" fillOpacity="0.012" xlinkHref="#i"></use>
            <use fill="#000" filter="url(#fy)" xlinkHref="#i"></use>
          </g>
          <path
            fill="url(#ah)"
            d="M24.225 137.85c12.017 2.535 27.721 2.743 29.192-3.528 1.47-6.239-11.575-18.427-23.592-21.535-12.016-3.214-21.137-.333-22.607 6.48-1.47 6.843 4.99 15.943 17.007 18.583z"
            filter="url(#fx)"
            transform="translate(20.8 337.7)"
          ></path>
          <g filter="url(#fw)" transform="translate(20.8 337.7)">
            <use fill="#000" filter="url(#fv)" xlinkHref="#h"></use>
            <use fill="url(#b)" xlinkHref="#h"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#h"></use>
            <use fill="url(#fu)" fillOpacity="0.012" xlinkHref="#h"></use>
            <use fill="#000" filter="url(#ft)" xlinkHref="#h"></use>
          </g>
          <path
            fill="#585E62"
            stroke="url(#y)"
            strokeWidth="0.5"
            d="M88.456 149.77c15.108 0 27.355-11.155 27.355-17.862s-12.247-12.144-27.355-12.144S61.1 125.201 61.1 131.908s12.248 17.862 27.356 17.862z"
            filter="url(#fs)"
            opacity="0.8"
            transform="translate(20.8 337.7)"
          ></path>
          <g filter="url(#fr)" transform="translate(20.8 337.7)">
            <use fill="#000" filter="url(#fq)" xlinkHref="#g"></use>
            <use fill="url(#x)" xlinkHref="#g"></use>
            <use fill="url(#w)" fillOpacity="0.74" xlinkHref="#g"></use>
            <use fill="url(#fp)" fillOpacity="0.01" xlinkHref="#g"></use>
            <use fill="#000" filter="url(#fo)" xlinkHref="#g"></use>
          </g>
          <path
            fill="url(#v)"
            d="M140.57 137.85c12.017 2.535 27.721 2.743 29.192-3.528 1.47-6.239-11.575-18.427-23.592-21.535-12.017-3.214-21.137-.333-22.607 6.48-1.47 6.843 4.99 15.943 17.007 18.583z"
            filter="url(#fn)"
            transform="matrix(-1 0 0 1 314.04 337.7)"
          ></path>
          <g filter="url(#fm)" transform="matrix(-1 0 0 1 314.84 337.7)">
            <use fill="#000" filter="url(#fl)" xlinkHref="#k"></use>
            <use fill="url(#b)" xlinkHref="#k"></use>
            <use fill="url(#a)" fillOpacity="0.51" xlinkHref="#k"></use>
            <use fill="url(#gu)" fillOpacity="0.012" xlinkHref="#k"></use>
            <use fill="#000" filter="url(#gt)" xlinkHref="#k"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#gs)" xlinkHref="#du"></use>
            <use fill="#3A3F43" xlinkHref="#du"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#gr)" xlinkHref="#dt"></use>
            <use fill="#3A3F43" xlinkHref="#dt"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#gq)" xlinkHref="#ds"></use>
            <use fill="#3A3F43" xlinkHref="#ds"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#gp)" xlinkHref="#dr"></use>
            <use fill="#3A3F43" xlinkHref="#dr"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#go)" xlinkHref="#dq"></use>
            <use fill="#3A3F43" xlinkHref="#dq"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#gn)" xlinkHref="#dp"></use>
            <use fill="#3A3F43" xlinkHref="#dp"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#gm)" xlinkHref="#do"></use>
            <use fill="#3A3F43" xlinkHref="#do"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#gl)" xlinkHref="#dn"></use>
            <use fill="#3A3F43" xlinkHref="#dn"></use>
          </g>
          <g
            transform="translate(33.293 344.77)"
            onClick={() => setValue(3)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
          >
            <use fill="#000" filter="url(#gk)" xlinkHref="#ag"></use>
            <use fill="#3A3E3D" xlinkHref="#ag"></use>
            <use fill="url(#gj)" fillOpacity="0.1" xlinkHref="#ag"></use>
          </g>
          <g
            transform="translate(33.293 344.77)"
            onClick={() => setValue(1)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
          >
            <use fill="#000" filter="url(#gi)" xlinkHref="#dm"></use>
            <use fill="#3A3E3D" xlinkHref="#dm"></use>
          </g>
          <g
            transform="translate(33.293 344.77)"
            onClick={() => setValue(2)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
          >
            <use fill="#000" filter="url(#gh)" xlinkHref="#dl"></use>
            <use fill="#3A3E3D" xlinkHref="#dl"></use>
          </g>
          <g
            transform="translate(33.293 344.77)"
            onClick={() => setValue(5)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
          >
            <use fill="#000" filter="url(#es)" xlinkHref="#ct"></use>
            <use fill="#3A3E3D" xlinkHref="#ct"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#er)" xlinkHref="#cr"></use>
            <use fill="#3A3E3D" xlinkHref="#cr"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#eq)" xlinkHref="#cp"></use>
            <use fill="#3A3E3D" xlinkHref="#cp"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#ep)" xlinkHref="#cn"></use>
            <use fill="#3A3E3D" xlinkHref="#cn"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#eo)" xlinkHref="#cl"></use>
            <use fill="#3A3E3D" xlinkHref="#cl"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#en)" xlinkHref="#bu"></use>
            <use fill="#3A3E3D" xlinkHref="#bu"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#em)" xlinkHref="#bo"></use>
            <use fill="#3A3E3D" xlinkHref="#bo"></use>
          </g>
          <g
            transform="translate(33.293 344.77)"
            onClick={() => setValue(4)}
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
          >
            <use fill="#000" filter="url(#el)" xlinkHref="#bi"></use>
            <use fill="#3A3E3D" xlinkHref="#bi"></use>
          </g>
          <g transform="rotate(90 -146.32 305.1)">
            <use fill="#000" filter="url(#ek)" xlinkHref="#bc"></use>
            <use fill="#3A3E3D" xlinkHref="#bc"></use>
          </g>
          <g transform="rotate(90 -73.648 317.37)">
            <use fill="#000" filter="url(#ej)" xlinkHref="#ax"></use>
            <use fill="#3A3F43" xlinkHref="#ax"></use>
          </g>
          <g fillRule="nonzero" transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#ei)" xlinkHref="#at"></use>
            <use fill="#3A3F43" xlinkHref="#at"></use>
          </g>
          <g transform="translate(33.293 344.77)">
            <use fill="#000" filter="url(#eh)" xlinkHref="#aq"></use>
            <use fill="#3A3F43" xlinkHref="#aq"></use>
          </g>
          <path
            fill="#383F46"
            d="M165.76 358.49h-1.16v-.56a1.81 1.81 0 01-.683.486c-.262.106-.526.16-.793.16a1.995 1.995 0 01-1.393-.53c-.386-.353-.58-.845-.58-1.476 0-.645.189-1.136.565-1.472.376-.336.851-.504 1.426-.504.527 0 .984.177 1.369.53v-1.893h1.248v5.258zm-3.333-1.988c0 .407.07.7.209.882.201.263.482.395.844.395.287 0 .531-.099.733-.296.201-.197.302-.492.302-.884 0-.438-.098-.753-.293-.945a1.025 1.025 0 00-.751-.289c-.296 0-.544.095-.744.285-.2.19-.3.474-.3.852zm7.556.775l1.244.168c-.16.369-.413.649-.758.841-.345.193-.777.29-1.295.29-.82 0-1.428-.217-1.822-.65-.31-.347-.466-.784-.466-1.313 0-.631.204-1.125.613-1.483.409-.357.926-.536 1.55-.536.703 0 1.257.187 1.662.561.406.374.6.948.582 1.72h-3.128c.01.299.11.532.302.698.193.166.433.249.72.249a.89.89 0 00.494-.13.787.787 0 00.302-.415zm.07-1.019c-.008-.292-.101-.513-.28-.665a.965.965 0 00-.648-.228.97.97 0 00-.675.24c-.178.16-.265.378-.262.653h1.866zm1.971-1.578h.694v-.287c0-.32.042-.56.126-.717.085-.158.24-.287.467-.386.226-.1.513-.149.86-.149.355 0 .703.043 1.044.13l-.169.702a3.028 3.028 0 00-.573-.057c-.18 0-.31.034-.389.102-.079.068-.118.2-.118.393v.269h.933v.793h-.933v3.016h-1.248v-3.016h-.694v-.793z"
          ></path>
          <g transform="translate(101.4 7.5)">
            <g opacity="0.212">
              <use fill="#ACACAC" xlinkHref="#af"></use>
              <use fill="url(#eg)" fillOpacity="0.52" xlinkHref="#af"></use>
              <use fill="#000" filter="url(#fk)" xlinkHref="#af"></use>
            </g>
            <use fill="#333441" xlinkHref="#dj"></use>
            <use fill="#000" filter="url(#fj)" xlinkHref="#dj"></use>
            <ellipse
              cx="7.15"
              cy="28.181"
              fill="#333441"
              rx="5.2"
              ry="1.95"
            ></ellipse>
            <ellipse
              cx="7.15"
              cy="41.831"
              fill="#333441"
              rx="5.2"
              ry="2.275"
            ></ellipse>
            <ellipse
              cx="7.15"
              cy="55.806"
              fill="#333441"
              rx="5.2"
              ry="2.275"
            ></ellipse>
            <ellipse
              cx="7.15"
              cy="69.781"
              fill="#333441"
              rx="5.2"
              ry="2.275"
            ></ellipse>
          </g>
          <g
            className=" focus:outline-none  cursor-pointer focus:bg-transparent"
            transform="rotate(48 -266.14 195.08)"
            onClick={deleteValue}
          >
            <use fill="url(#fi)" xlinkHref="#f"></use>
            <use fill="url(#fh)" xlinkHref="#f"></use>
            <use fill="url(#fg)" xlinkHref="#f"></use>
            <use fill="#000" filter="url(#ff)" xlinkHref="#f"></use>
            <use stroke="url(#fe)" strokeWidth="1.3" xlinkHref="#f"></use>
          </g>
          <g transform="translate(27.396 272.46)">
            <use fill="#000" filter="url(#fd)" xlinkHref="#df"></use>
            <use fill="#3E454C" xlinkHref="#df"></use>
          </g>

          <g transform="rotate(-25 755.9 112.76)" className="relative">
            <use fill="#BABDB2" xlinkHref="#e"></use>
            <use fill="url(#fc)" xlinkHref="#e"></use>
            <use fill="url(#fb)" fillOpacity="0.02" xlinkHref="#e"></use>
            <use fill="url(#fa)" xlinkHref="#e"></use>
            <use fill="#000" filter="url(#ez)" xlinkHref="#e"></use>
            <path
              stroke="url(#ey)"
              strokeLinejoin="square"
              strokeWidth="1.3"
              d="M151.813 23.366a4.545 4.545 0 014.866 1.873l5.92 8.791c.494.734.65 1.598.5 2.406a3.234 3.234 0 01-1.33 2.066c-8.676 6.098-19.28 10.49-31.81 13.188-9.722 2.093-21.41 2.447-35.063 1.072a3.24 3.24 0 01-2.191-1.176 3.24 3.24 0 01-.612-2.94l5.955-21.056a4.537 4.537 0 012.09-2.694 4.536 4.536 0 013.375-.485c7.642 1.883 15.331 2.7 23.069 2.455a120.46 120.46 0 0025.23-3.5z"
            ></path>
          </g>
          <g
            fillRule="nonzero"
            transform="rotate(2 -7678.2 967.09)"
            className=" "
            onClick={valueDown}
          >
            <use fill="#000" filter="url(#ex)" xlinkHref="#cy"></use>
            <use fill="#3E454C" xlinkHref="#cy"></use>
          </g>
          <g
            fillRule="nonzero"
            transform="translate(27.396 272.46)"
            className=""
            onClick={valueUp}
          >
            <use fill="#000" filter="url(#ew)" xlinkHref="#cx"></use>
            <use fill="#5C6161" xlinkHref="#cx"></use>
          </g>

          {screen === 1 ? (
            <>
              <g
                transform="translate(27.396 272.46)"
                className={loading ? "cursor-not-allowed" : " focus:outline-none  cursor-pointer focus:bg-transparent"}
                onClick={Authenticate}
              >
                <use fill="url(#ev)" xlinkHref="#u"></use>
                <use fill="url(#eu)" xlinkHref="#u"></use>
                <use fill="red" filter="url(#et)" xlinkHref="#u"></use>
                <use stroke="#424242" strokeWidth="1.56" xlinkHref="#u"></use>
              </g>
              <path
                className={loading ? "cursor-not-allowed" : " focus:outline-none  cursor-pointer focus:bg-transparent"}
                onClick={Authenticate}
                fill="#63AEC1"
                fillRule="nonzero"
                d="M91.39 283.699c-.847-.379-1.292-1.556-.993-2.63.298-1.073 1.226-1.637 2.073-1.258 4.285 1.917 10.491 2.76 17.304 2.76 6.122 0 11.96-.622 16.198-2.218.373-.14.732-.286 1.077-.435.85-.368 1.773.208 2.062 1.285.29 1.078-.164 2.25-1.013 2.617-.387.167-.787.329-1.201.485-4.56 1.717-10.705 2.388-17.123 2.388-7.156 0-13.719-.907-18.385-2.994z"
              ></path>

              <path
                stroke="url(#cv)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                d="M99.61 42.642c-.107-1.78.547-2.86 1.961-3.235 11.901-1.89 23.45-7.045 34.645-15.465"
                filter="url(#ef)"
                transform="translate(27.396 272.46)"
              ></path>
            </>
          ) : screen === 2 ? (
            <>
              <g
                transform="translate(27.396 272.46)"
                className={loading ? "cursor-not-allowed" : " focus:outline-none  cursor-pointer focus:bg-transparent"}
                onClick={Authenticate}
              >
                <use fill="url(#ev)" xlinkHref="#u"></use>
                <use fill="url(#eu)" xlinkHref="#u"></use>
                <use fill="red" filter="url(#et)" xlinkHref="#u"></use>
                <use stroke="#424242" strokeWidth="1.56" xlinkHref="#u"></use>
              </g>
              <path
                className={loading ? "cursor-not-allowed" : " focus:outline-none  cursor-pointer focus:bg-transparent"}
                onClick={Authenticate}
                fill="#63AEC1"
                fillRule="nonzero"
                d="M91.39 283.699c-.847-.379-1.292-1.556-.993-2.63.298-1.073 1.226-1.637 2.073-1.258 4.285 1.917 10.491 2.76 17.304 2.76 6.122 0 11.96-.622 16.198-2.218.373-.14.732-.286 1.077-.435.85-.368 1.773.208 2.062 1.285.29 1.078-.164 2.25-1.013 2.617-.387.167-.787.329-1.201.485-4.56 1.717-10.705 2.388-17.123 2.388-7.156 0-13.719-.907-18.385-2.994z"
              ></path>

              <path
                stroke="url(#cv)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                d="M99.61 42.642c-.107-1.78.547-2.86 1.961-3.235 11.901-1.89 23.45-7.045 34.645-15.465"
                filter="url(#ef)"
                transform="translate(27.396 272.46)"
              ></path>
            </>
          ) : (
            <a href="google.com">
              <g
                transform="translate(27.396 272.46)"
                className={loading ? "cursor-not-allowed" : " focus:outline-none  cursor-pointer focus:bg-transparent"}
                onClick={Authenticate}
              >
                <use fill="url(#ev)" xlinkHref="#u"></use>
                <use fill="url(#eu)" xlinkHref="#u"></use>
                <use fill="red" filter="url(#et)" xlinkHref="#u"></use>
                <use stroke="#424242" strokeWidth="1.56" xlinkHref="#u"></use>
              </g>
              <path
                className={loading ? "cursor-not-allowed" : " focus:outline-none  cursor-pointer focus:bg-transparent"}
                onClick={Authenticate}
                fill="#63AEC1"
                fillRule="nonzero"
                d="M91.39 283.699c-.847-.379-1.292-1.556-.993-2.63.298-1.073 1.226-1.637 2.073-1.258 4.285 1.917 10.491 2.76 17.304 2.76 6.122 0 11.96-.622 16.198-2.218.373-.14.732-.286 1.077-.435.85-.368 1.773.208 2.062 1.285.29 1.078-.164 2.25-1.013 2.617-.387.167-.787.329-1.201.485-4.56 1.717-10.705 2.388-17.123 2.388-7.156 0-13.719-.907-18.385-2.994z"
              ></path>

              <path
                stroke="url(#cv)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                d="M99.61 42.642c-.107-1.78.547-2.86 1.961-3.235 11.901-1.89 23.45-7.045 34.645-15.465"
                filter="url(#ef)"
                transform="translate(27.396 272.46)"
              ></path>
            </a>
          )}

          <path
            stroke="url(#cv)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.65"
            d="M99.61 42.642c-.107-1.78.547-2.86 1.961-3.235 11.901-1.89 23.45-7.045 34.645-15.465"
            filter="url(#ee)"
            opacity="0.22"
            transform="translate(27.396 272.46)"
          ></path>
          <path
            stroke="#979797"
            strokeWidth="1.3"
            d="M45.296 35.906c1.273-2.176 1.134-3.618-.419-4.326-11.082-4.704-19.823-10.195-26.225-16.473-1.396-1.17-2.952-1.39-4.668-.659-6.32 1.99-8.71 4.475-7.167 7.458 2.278 4.113 4.255 7.274 5.93 9.48"
            filter="url(#ed)"
            transform="translate(27.396 272.46)"
          ></path>
          <path
            stroke="#979797"
            strokeWidth="0.65"
            d="M45.296 35.906c1.273-2.176 1.134-3.618-.419-4.326-11.082-4.704-19.823-10.195-26.225-16.473-1.396-1.17-2.952-1.39-4.668-.659-6.32 1.99-8.71 4.475-7.167 7.458 2.278 4.113 4.255 7.274 5.93 9.48"
            filter="url(#ec)"
            opacity="0.197"
            transform="translate(27.396 272.46)"
          ></path>
          <g transform="translate(29.9 133.6)">
            <use fill="#000" filter="url(#eb)" xlinkHref="#d"></use>
            <use fill="#9ED0B2" xlinkHref="#d"></use>
            <use fill="url(#ea)" xlinkHref="#d"></use>
            <use fill="url(#dz)" fillOpacity="0.03" xlinkHref="#d"></use>
            <use fill="#000" filter="url(#dy)" xlinkHref="#d"></use>
            <path
              stroke="#4D555C"
              strokeLinejoin="square"
              strokeWidth="0.65"
              d="M83.611.325c21.884 0 43.768.658 65.651 1.973l3.863.239c1.584.1 3 .792 4.035 1.856a6.16 6.16 0 011.745 4.085 611.17 611.17 0 01-.29 50.484 569.767 569.767 0 01-4.036 45.947l-.377 2.872a6.164 6.164 0 01-1.907 3.697 6.163 6.163 0 01-3.818 1.648 1105.87 1105.87 0 01-70.463 2.249c-21.13 0-42.259-.664-63.388-1.992l-3.729-.242a6.164 6.164 0 01-3.807-1.65 6.164 6.164 0 01-1.903-3.688A566.775 566.775 0 01.778 59.117a409.862 409.862 0 01.6-48.639l.165-2.211a6.161 6.161 0 011.831-3.93A6.161 6.161 0 017.337 2.58 1292.223 1292.223 0 0183.611.325z"
            ></path>
          </g>
          <path
            fill="#423D40"
            d="M43.55 205.1v.65h3.591v3.679l-3.591 2.843v4.176h-1.3v-3.928l-3.9-2.957v-3.813h3.9v-.65h1.3zm-1.3 1.949l-2.6.001v1.867l2.6 1.971v-3.839zm3.591.001l-2.291-.001v3.564l2.291-1.813v-1.75z"
          ></path>
          <path
            stroke="#423D40"
            strokeWidth="1.3"
            d="M176.52 205.75l-.001 2.6h2.236v7.8h-5.2v-7.8h2.314v-2.6h.65z"
          ></path>
          <path
            fill="#423D40"
            d="M41.6 192.1v10.4H39v-10.4h2.6zm.65-16.9v14.3H39v-14.3h3.25zm.65-16.9v14.3H39v-14.3h3.9zm1.3-16.9v14.3H39v-14.3h5.2zm135.2 50.7v10.4h-2.6v-10.4h2.6zm0-16.9v14.3h-3.25v-14.3h3.25zm0-16.9v14.3h-3.9v-14.3h3.9z"
          ></path>
          <g
            xmlns="http://www.w3.org/2000/svg"
            transform="translate(65.85 98.5)"
          >
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#dj"
              fill="#414243"
            />
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#dj"
              fill="#000"
              filter="url(#dk)"
            />
          </g>
          {/* <text
             fill="white"
             
             fontFamily="NokiaKokia"
             fontSize="11"
             textAlign="center"
             letterSpacing="-0.209"
             transform="translate(65.85 98.5)"
                style={{fontWeight: '', letterSpacing:1,}}
          >
            <tspan x="14.325" y="11.5">
              ZKSNAKE
            </tspan>
          </text> */}
        </g>
      </svg>
    </div>
  );
}

export default Icon;
