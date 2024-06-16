import React from "react";

interface CallIconProps extends React.SVGProps<SVGSVGElement> {
  containerClassName?: string;
  svgClassName?: string;
}

export const CallIcon: React.FC<CallIconProps> = ({
  containerClassName,
  svgClassName,
  ...svgProps
}) => {
  const containerClasses = `rounded-full border-2 border-cyan-600 bg-blue-900 ${
    containerClassName || ""
  }`;

  return (
    <div className={containerClasses}>
      <svg
        width='32'
        height='32'
        viewBox='0 0 100 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...svgProps}
        className={`${svgProps.className} ${svgClassName}`}
      >
        <path
          className='stroke1 fill1'
          d='M25.7071 25.1213L35.6066 35.0208C35.9971 35.4113 35.9971 36.0445 35.6066 36.435L32.7782 39.2635C32.3877 39.654 31.7545 39.654 31.364 39.2635L21.4645 29.364C21.0739 28.9734 21.0739 28.3403 21.4645 27.9497L24.2929 25.1213C24.6834 24.7308 25.3166 24.7308 25.7071 25.1213Z'
          fill='rgba(255,255,255,0)'
          stroke='rgba(255,255,255,1)'
          strokeWidth='3.0px'
          // className="line-phone2"
          // style="animation-duration: 1.6s;"
        ></path>
        <path
          className='stroke1 fill1'
          d='M65.3051 64.7193L75.2046 74.6188C75.5951 75.0094 75.5951 75.6425 75.2046 76.0331L72.3762 78.8615C71.9857 79.252 71.3525 79.252 70.962 78.8615L61.0625 68.962C60.672 68.5715 60.672 67.9383 61.0625 67.5478L63.8909 64.7193C64.2814 64.3288 64.9146 64.3288 65.3051 64.7193Z'
          fill='rgba(255,255,255,0)'
          stroke='rgba(255,255,255,1)'
          strokeWidth='3.0px'
          // className="line-phone2"
          // style="animation-duration: 1.6s;"
        ></path>
        <path
          className='stroke1 fill1'
          d='M18.9896 30.4246L21.1109 28.3033C21.5014 27.9128 22.1346 27.9128 22.5251 28.3033L32.4246 38.2028C32.8151 38.5933 32.8151 39.2265 32.4246 39.617L31.0104 41.0312C29.0578 42.9839 29.0578 46.1497 31.0104 48.1023L52.2236 69.3155C54.1762 71.2681 57.342 71.2681 59.2947 69.3155L60.7089 67.9013C61.0994 67.5108 61.7326 67.5108 62.1231 67.9013L72.0226 77.8008C72.4131 78.1913 72.4131 78.8245 72.0226 79.215L69.9013 81.3363C64.8244 86.4132 56.5933 86.4132 51.5165 81.3363L18.9896 48.8094C13.9128 43.7326 13.9128 35.5015 18.9896 30.4246Z'
          fill='rgba(255,255,255,0)'
          stroke='rgba(255,255,255,1)'
          strokeWidth='3.0px'
          // className="line-phone2"
          // style="animation-duration: 1.6s;"
        ></path>
        <g
          id='arrow'
          // animate={{ x: [-3, 3, -3] }}
          // transition={{
          //   duration: 1.6,
          //   repeat: Infinity,
          //   type: 'keyframes',
          // }}
        >
          <path
            className='stroke2'
            d='M49.5388 36.0562H82.172M82.172 36.0562L69.174 23M82.172 36.0562L69.174 48.8346'
            stroke='rgba(255,255,255,1)'
            strokeWidth='3.0px'
            strokeLinecap='round'
          ></path>
        </g>
      </svg>
    </div>
  );
};
