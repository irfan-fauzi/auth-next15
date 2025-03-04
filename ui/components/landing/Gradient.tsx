import clsx from "clsx";

const Gradient = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <div className={clsx(`${className}`)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 2595 2238'
        fill='none'
        className='relative'
      >
        <g filter='url(#filter0_f_2614_38)'>
          <circle cx='1580.31' cy='1256.8' r='560.804' fill='#F33EE7' />
        </g>
        <g filter='url(#filter1_f_2614_38)'>
          <ellipse cx='1423.3' cy='800' rx='366' ry='377' fill='#FFD8FC' />
        </g>
        <g filter='url(#filter2_f_2614_38)'>
          <circle cx='1901.3' cy='1433.78' r='273' fill='#FF3333' />
        </g>
        <g filter='url(#filter3_f_2614_38)'>
          <path
            d='M927.799 1343.5C927.799 1577.95 258.259 1709 456.799 1709C561.633 1709 847.31 1763.2 1023.3 1709C1180.61 1660.55 1235.3 1510.4 1235.3 1399.75C1235.3 1165.3 984.339 951.748 785.799 951.748C587.259 951.748 927.799 1109.06 927.799 1343.5Z'
            fill='#26C2FA'
          />
        </g>
        <defs>
          <filter
            id='filter0_f_2614_38'
            x='599.507'
            y='276'
            width='1961.61'
            height='1961.61'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='210'
              result='effect1_foregroundBlur_2614_38'
            />
          </filter>
          <filter
            id='filter1_f_2614_38'
            x='437.299'
            y='-197'
            width='1972'
            height='1994'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='310'
              result='effect1_foregroundBlur_2614_38'
            />
          </filter>
          <filter
            id='filter2_f_2614_38'
            x='1208.3'
            y='740.784'
            width='1386'
            height='1386'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='210'
              result='effect1_foregroundBlur_2614_38'
            />
          </filter>
          <filter
            id='filter3_f_2614_38'
            x='0'
            y='531.748'
            width='1655.3'
            height='1621.34'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='210'
              result='effect1_foregroundBlur_2614_38'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Gradient;
