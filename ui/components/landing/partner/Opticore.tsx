import clsx from "clsx";

interface OpticoreProps {
  className?: string;
}

const Opticore: React.FC<OpticoreProps> = ({ className }) => {
  return (
    <div className='cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='112'
        height='28'
        viewBox='0 0 112 28'
        fill='none'
        className={clsx(`${className}`)}
      >
        <path d='M16.4186 21.2896C14.1913 20.4624 11.9004 20.3351 9.80038 20.9078C8.33675 21.2896 6.93675 22.0533 5.66402 23.0078L4.7731 23.7715L4.51855 24.026L5.09128 24.5351C5.15491 24.5351 5.15492 24.5987 5.21856 24.6624C5.34583 24.7896 5.47311 24.8533 5.66402 24.9805L6.04582 25.2351L6.42765 24.9169C6.49128 24.8533 6.61855 24.726 6.74583 24.6624C7.89128 23.7078 9.16401 23.0715 10.5004 22.7533C12.2186 22.3078 14.064 22.3715 15.9095 23.0715C17.4367 23.6442 20.5549 24.3442 24.3095 22.7533L24.4367 22.6896L24.6276 22.4987C24.6276 22.4351 24.6913 22.4351 24.7549 22.3715C25.0731 21.9896 25.3913 21.6078 25.6458 21.1624L26.9186 19.1896L24.8822 20.3351C21.8913 21.9896 19.1549 22.3078 16.4186 21.2896Z' />
        <path d='M7.70018 14.4169C9.41836 13.9715 11.2638 14.0351 13.1093 14.7351C15.1456 15.4987 20.3638 16.5806 26.2184 11.2987L27.1729 10.3442L27.2366 10.2805L27.4911 10.026L27.3638 9.70782C27.3002 9.45328 27.1729 9.1351 27.0456 8.81692L26.7274 7.92599L26.0911 8.56236C26.0275 8.68963 25.9002 8.75327 25.7729 8.88054C22.9729 11.7442 18.6456 14.6715 13.682 12.8896C11.4547 12.0624 9.16382 11.9351 7.06382 12.5078C5.02745 13.0805 3.24563 14.1624 1.59109 15.6896V15.626L0.636541 16.6442C0.636541 16.7078 0.572916 16.7078 0.50928 16.7715L0.318359 16.9624L0.382 17.2169C0.445636 17.5351 0.572905 17.8533 0.636541 18.1715L1.01836 19.1896L1.65473 18.3624C1.71836 18.2351 1.84563 18.1715 1.90927 18.0442C3.24563 16.8351 5.09109 15.1169 7.70018 14.4169Z' />
        <path d='M1.52729 13.2715C2.99092 11.7442 4.64546 10.7896 6.42728 10.2805C8.14546 9.83509 9.99091 9.89872 11.8364 10.5987C17.5636 12.6987 22.5273 9.26236 24.6909 7.41691L25.5182 6.58964L25.8364 6.33508L25.5818 5.95328C25.3909 5.76237 25.2637 5.50782 25.0727 5.25327L24.6909 4.74417L24.2455 5.18963C24.1818 5.25327 24.0546 5.38054 23.9909 5.44418C21.3182 7.98963 17.1818 10.5987 12.4727 8.81691C10.2455 7.98964 7.95455 7.86236 5.85455 8.43509C4.51819 8.81691 3.24546 9.45327 1.97273 10.2805L0.636364 11.3624C0.509091 11.4896 0.445455 11.5533 0.318182 11.6806L0.190921 11.8078V11.9987C0.127284 12.4442 0.127277 12.8896 0.0636402 13.2715L0 14.8624L1.08183 13.7169C1.2091 13.5896 1.33638 13.3987 1.52729 13.2715Z' />
        <path d='M18.2633 25.6169L18.1361 25.9987L18.2633 25.6169C18.0724 25.5533 17.9452 25.4896 17.7543 25.426C15.527 24.5987 13.2361 24.4715 11.1361 25.0442C10.6906 25.1715 10.2452 25.2987 9.79972 25.4896L8.27243 26.1896L7.89062 26.3805L9.16335 26.826C9.54517 26.9533 9.92698 27.0806 10.3088 27.2078L10.4997 27.2715L10.6906 27.2078C10.8815 27.1442 11.0724 27.0169 11.2633 27.0169C11.3906 27.0169 11.5179 26.9533 11.6452 26.8897C13.1724 26.5078 14.827 26.5078 16.6088 27.0806C16.7997 27.1442 16.927 27.2078 17.1179 27.2715L17.4361 27.3987L17.627 27.3351C18.0724 27.2078 18.5815 27.0806 18.9633 26.8897L20.7452 26.2533L18.8997 25.8078C18.7088 25.7442 18.4543 25.6806 18.2633 25.6169Z' />
        <path d='M27.9996 12.4442L27.0451 13.3987C26.9178 13.526 26.7905 13.6533 26.6632 13.7806C24.0542 16.2624 19.8542 18.9351 15.1451 17.1533C12.9178 16.326 10.6269 16.1987 8.52689 16.7715C6.55416 17.3442 4.77233 18.3624 3.18142 19.8896L2.35415 20.7806L2.09961 21.0987L2.35415 21.4806C2.54506 21.7351 2.67234 21.926 2.79961 22.1806L3.18142 22.7533L3.62688 22.1806C3.69051 22.1169 3.81778 21.9896 3.88142 21.926C5.40869 20.2715 7.06324 19.2533 8.97233 18.7442C10.6905 18.2987 12.536 18.3624 14.3814 19.0624C15.9723 19.6351 17.6269 19.826 19.2814 19.6351C22.2087 19.3169 25.136 17.6624 27.2996 15.8169C27.4269 15.6896 27.5541 15.626 27.6814 15.4987L27.8723 15.3078V15.1169C27.8723 14.7351 27.936 14.2896 27.936 13.9078L27.9996 12.4442Z' />
        <path d='M3.81839 6.58966L3.62749 6.20784L3.81839 6.58966C4.20021 6.39875 4.64568 6.27147 5.02749 6.1442C6.74568 5.69874 8.59113 5.76238 10.4366 6.46238C11.6457 6.90783 12.8548 7.09874 14.1911 7.09874C16.8639 7.09874 19.5366 6.1442 22.0184 4.29874L22.9729 3.5351L23.2911 3.28056L22.7184 2.8351C22.5275 2.64419 22.2729 2.45329 22.0184 2.32601L21.6366 2.07147L21.3184 2.32601C21.1911 2.38965 21.1275 2.51692 21.0002 2.58056C17.6275 5.12601 14.2548 5.82602 11.0729 4.61693C8.78204 3.78965 6.49112 3.59874 4.20021 4.29874C4.0093 4.36238 3.81839 4.42601 3.56385 4.48965L3.43658 4.55329L3.24566 4.74419C3.24566 4.80782 3.18204 4.80783 3.1184 4.87147C2.86386 5.25329 2.54566 5.57148 2.29112 5.95329L1.08203 7.79874L3.05476 6.78056C3.37294 6.78056 3.62748 6.65329 3.81839 6.58966Z' />
        <path d='M9.03637 2.26237L9.22727 2.32601C10.0545 2.64419 11.3273 2.96237 12.9182 2.96237C14.5727 2.96237 16.1637 2.58055 17.7546 1.94418L19.7273 0.989638L18.3909 0.544195C18.0091 0.416922 17.6273 0.28965 17.1818 0.226013H16.9909L16.8 0.289634C16.6091 0.35327 16.4182 0.480559 16.2273 0.544195C14.3182 1.24419 12.4091 1.37147 10.5636 0.862377C10.3727 0.79874 10.1818 0.735092 9.99092 0.671456L9.80002 0.607816L9.60909 0.671456C9.22728 0.798729 8.84547 0.926009 8.46365 1.11692L7 1.75328L8.52729 2.19872C8.65456 2.13509 8.84546 2.19873 9.03637 2.26237Z' />
        <path d='M49.5975 14.2244C49.5975 15.5564 49.3275 16.7384 48.7875 17.7704C48.2475 18.7904 47.4975 19.5884 46.5375 20.1644C45.5775 20.7404 44.4675 21.0284 43.2075 21.0284C41.9595 21.0284 40.8555 20.7404 39.8955 20.1644C38.9355 19.5884 38.1855 18.7904 37.6455 17.7704C37.1175 16.7504 36.8535 15.5744 36.8535 14.2424C36.8535 12.8984 37.1235 11.7164 37.6635 10.6964C38.2035 9.66438 38.9475 8.86038 39.8955 8.28438C40.8555 7.70838 41.9655 7.42038 43.2255 7.42038C44.4855 7.42038 45.5895 7.70838 46.5375 8.28438C47.4975 8.86038 48.2475 9.65838 48.7875 10.6784C49.3275 11.6984 49.5975 12.8804 49.5975 14.2244ZM47.1855 14.2244C47.1855 13.2884 47.0235 12.4784 46.6995 11.7944C46.3755 11.1104 45.9195 10.5824 45.3315 10.2104C44.7435 9.82638 44.0415 9.63438 43.2255 9.63438C42.4215 9.63438 41.7195 9.82638 41.1195 10.2104C40.5315 10.5824 40.0755 11.1104 39.7515 11.7944C39.4275 12.4784 39.2655 13.2884 39.2655 14.2244C39.2655 15.1604 39.4275 15.9764 39.7515 16.6724C40.0755 17.3564 40.5315 17.8844 41.1195 18.2564C41.7195 18.6284 42.4215 18.8144 43.2255 18.8144C44.0415 18.8144 44.7435 18.6284 45.3315 18.2564C45.9195 17.8724 46.3755 17.3384 46.6995 16.6544C47.0235 15.9584 47.1855 15.1484 47.1855 14.2244ZM51.2559 24.9344V11.9204H53.2899L53.4339 13.2704C53.6979 12.7544 54.1059 12.3584 54.6579 12.0824C55.2099 11.7944 55.8159 11.6504 56.4759 11.6504C57.3279 11.6504 58.0599 11.8424 58.6719 12.2264C59.2959 12.6104 59.7819 13.1444 60.1299 13.8284C60.4779 14.5124 60.6519 15.3224 60.6519 16.2584C60.6519 17.1824 60.4899 18.0044 60.1659 18.7244C59.8419 19.4444 59.3679 20.0144 58.7439 20.4344C58.1319 20.8424 57.3819 21.0464 56.4939 21.0464C55.8339 21.0464 55.2279 20.9204 54.6759 20.6684C54.1359 20.4164 53.7279 20.0684 53.4519 19.6244V24.9344H51.2559ZM53.4699 16.3664C53.4699 16.8944 53.5719 17.3624 53.7759 17.7704C53.9799 18.1784 54.2679 18.5024 54.6399 18.7424C55.0239 18.9704 55.4679 19.0844 55.9719 19.0844C56.4879 19.0844 56.9319 18.9704 57.3039 18.7424C57.6759 18.5024 57.9579 18.1784 58.1499 17.7704C58.3419 17.3624 58.4379 16.8944 58.4379 16.3664C58.4379 15.8384 58.3419 15.3704 58.1499 14.9624C57.9579 14.5544 57.6759 14.2364 57.3039 14.0084C56.9319 13.7684 56.4879 13.6484 55.9719 13.6484C55.4679 13.6484 55.0239 13.7624 54.6399 13.9904C54.2679 14.2184 53.9799 14.5364 53.7759 14.9444C53.5719 15.3524 53.4699 15.8264 53.4699 16.3664ZM61.2505 11.9204H66.8665V13.7564H61.2505V11.9204ZM65.1565 20.8124H62.9605V9.14838H65.1565V20.8124ZM68.0697 20.8124V11.9204H70.2657V20.8124H68.0697ZM69.1497 10.1384C68.7777 10.1384 68.4597 10.0124 68.1957 9.76038C67.9437 9.49638 67.8177 9.17838 67.8177 8.80638C67.8177 8.43438 67.9437 8.12238 68.1957 7.87038C68.4597 7.61838 68.7777 7.49238 69.1497 7.49238C69.5217 7.49238 69.8337 7.61838 70.0857 7.87038C70.3497 8.12238 70.4817 8.43438 70.4817 8.80638C70.4817 9.17838 70.3497 9.49638 70.0857 9.76038C69.8337 10.0124 69.5217 10.1384 69.1497 10.1384ZM78.2405 21.0284C76.9565 21.0284 75.8405 20.7524 74.8925 20.2004C73.9565 19.6364 73.2245 18.8504 72.6965 17.8424C72.1805 16.8224 71.9225 15.6224 71.9225 14.2424C71.9225 12.8744 72.1865 11.6804 72.7145 10.6604C73.2545 9.64038 74.0105 8.84838 74.9825 8.28438C75.9545 7.72038 77.0765 7.43838 78.3485 7.43838C79.3925 7.43838 80.3285 7.63038 81.1565 8.01438C81.9845 8.39838 82.6685 8.93838 83.2085 9.63438C83.7485 10.3184 84.0905 11.1344 84.2345 12.0824H81.8045C81.5765 11.3144 81.1505 10.7204 80.5265 10.3004C79.9145 9.86838 79.1645 9.65238 78.2765 9.65238C77.4845 9.65238 76.7885 9.83838 76.1885 10.2104C75.6005 10.5824 75.1445 11.1104 74.8205 11.7944C74.4965 12.4784 74.3345 13.2944 74.3345 14.2424C74.3345 15.1544 74.4965 15.9584 74.8205 16.6544C75.1445 17.3384 75.6005 17.8724 76.1885 18.2564C76.7885 18.6284 77.4845 18.8144 78.2765 18.8144C79.1765 18.8144 79.9445 18.5984 80.5805 18.1664C81.2285 17.7344 81.6605 17.1524 81.8765 16.4204H84.2705C84.1025 17.3324 83.7365 18.1364 83.1725 18.8324C82.6205 19.5284 81.9185 20.0684 81.0665 20.4524C80.2265 20.8364 79.2845 21.0284 78.2405 21.0284ZM85.3107 16.3484C85.3107 15.4244 85.5147 14.6144 85.9227 13.9184C86.3307 13.2104 86.8947 12.6584 87.6147 12.2624C88.3347 11.8664 89.1507 11.6684 90.0627 11.6684C90.9867 11.6684 91.8027 11.8664 92.5107 12.2624C93.2307 12.6584 93.7947 13.2104 94.2027 13.9184C94.6107 14.6144 94.8148 15.4244 94.8148 16.3484C94.8148 17.2724 94.6107 18.0884 94.2027 18.7964C93.7947 19.4924 93.2307 20.0384 92.5107 20.4344C91.8027 20.8304 90.9867 21.0284 90.0627 21.0284C89.1507 21.0284 88.3347 20.8304 87.6147 20.4344C86.8947 20.0384 86.3307 19.4924 85.9227 18.7964C85.5147 18.0884 85.3107 17.2724 85.3107 16.3484ZM87.5067 16.3484C87.5067 16.8884 87.6147 17.3624 87.8307 17.7704C88.0587 18.1784 88.3587 18.4964 88.7307 18.7244C89.1147 18.9524 89.5587 19.0664 90.0627 19.0664C90.5667 19.0664 91.0107 18.9524 91.3947 18.7244C91.7787 18.4964 92.0787 18.1784 92.2947 17.7704C92.5107 17.3624 92.6188 16.8884 92.6188 16.3484C92.6188 15.7964 92.5107 15.3224 92.2947 14.9264C92.0787 14.5184 91.7787 14.2004 91.3947 13.9724C91.0107 13.7444 90.5667 13.6304 90.0627 13.6304C89.5587 13.6304 89.1147 13.7444 88.7307 13.9724C88.3587 14.2004 88.0587 14.5184 87.8307 14.9264C87.6147 15.3224 87.5067 15.7964 87.5067 16.3484ZM101.955 11.8844V13.9184H101.145C100.341 13.9184 99.7114 14.1344 99.2554 14.5664C98.7994 14.9864 98.5714 15.6284 98.5714 16.4924V20.8124H96.3754V11.9384H98.4454L98.6254 13.7744H98.4094C98.5294 13.1864 98.8114 12.7064 99.2554 12.3344C99.6994 11.9624 100.275 11.7764 100.983 11.7764C101.139 11.7764 101.295 11.7824 101.451 11.7944C101.607 11.8064 101.775 11.8364 101.955 11.8844ZM106.941 21.0464C106.065 21.0464 105.285 20.8484 104.601 20.4524C103.929 20.0444 103.401 19.4924 103.017 18.7964C102.633 18.0884 102.441 17.2784 102.441 16.3664C102.441 15.4424 102.627 14.6264 102.999 13.9184C103.371 13.2104 103.893 12.6584 104.565 12.2624C105.237 11.8544 106.005 11.6504 106.869 11.6504C107.769 11.6504 108.543 11.8424 109.191 12.2264C109.839 12.5984 110.337 13.1204 110.685 13.7924C111.045 14.4644 111.225 15.2684 111.225 16.2044V16.8704L103.593 16.8884L103.629 15.4844H109.047C109.047 14.8724 108.849 14.3804 108.453 14.0084C108.069 13.6364 107.547 13.4504 106.887 13.4504C106.371 13.4504 105.933 13.5584 105.573 13.7744C105.225 13.9904 104.961 14.3144 104.781 14.7464C104.601 15.1784 104.511 15.7064 104.511 16.3304C104.511 17.2904 104.715 18.0164 105.123 18.5084C105.543 19.0004 106.161 19.2464 106.977 19.2464C107.577 19.2464 108.069 19.1324 108.453 18.9044C108.849 18.6764 109.107 18.3524 109.227 17.9324H111.261C111.069 18.9044 110.589 19.6664 109.821 20.2184C109.065 20.7704 108.105 21.0464 106.941 21.0464Z' />
      </svg>
    </div>
  );
};

export default Opticore;
