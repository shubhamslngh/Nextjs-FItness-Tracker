import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  const [activePath, setActivePath] = useState(router.pathname);

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  return (
    <div className="bg-[#242424] text-white p-4 fixed bottom-0 w-full text-[50%] flex justify-around mt-1 text-justify">
      <Link href="/" passHref>
        <div
          className="p-2 rounded cursor-pointer flex flex-col items-center"
          onClick={() => handleLinkClick('/')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3411 10.615C13.1059 10.2571 12.8195 9.94684 12.5536 9.63661C11.8684 8.9207 11.0911 8.40764 10.4366 7.65593C8.91272 5.91389 8.57522 3.03832 9.54681 0.830933C8.57522 1.10536 7.72636 1.72582 7.00022 2.40593C4.35135 4.88775 3.30817 9.26673 4.5559 13.0253C4.59681 13.1446 4.63772 13.2639 4.63772 13.419C4.63772 13.6815 4.48431 13.9201 4.27976 14.0156C4.04453 14.1349 3.79908 14.0633 3.60476 13.8724C3.5434 13.8128 3.50249 13.7531 3.46158 13.6696C2.3059 11.9633 2.12181 9.5173 2.89908 7.56048C1.19112 9.18321 0.26044 11.9275 0.393395 14.5167C0.454758 15.1133 0.516122 15.7099 0.689986 16.3065C0.833168 17.0224 1.1093 17.7383 1.41612 18.3707C2.52067 20.4349 4.43317 21.9145 6.48885 22.2127C8.67749 22.5349 11.0195 22.0696 12.6968 20.3037C14.5684 18.323 15.223 15.1491 14.2616 12.4287L14.1286 12.1184C13.9139 11.5696 13.3411 10.615 13.3411 10.615ZM10.1093 18.1321C9.82295 18.4184 9.35249 18.7287 8.98431 18.848C7.83886 19.3253 6.6934 18.6571 6.0184 17.8696C7.23545 17.5355 7.96158 16.4855 8.17636 15.4235C8.35022 14.469 8.02295 13.6815 7.88999 12.7628C7.76726 11.8798 7.78772 11.1281 8.06386 10.3048C8.25817 10.7582 8.46272 11.2116 8.70817 11.5696C9.49568 12.7628 10.7332 13.2878 10.9991 14.9105C11.04 15.0775 11.0604 15.2446 11.0604 15.4235C11.0911 16.402 10.7229 17.4758 10.1093 18.1321Z"
              fill={activePath === '/' ? "#D15439" : "#B5B5B5"}
            />
          </svg>
          <span className={activePath === '/' ? "text-[#D15439]" : "text-[#B5B5B5]"}>Page1</span>
        </div>
      </Link>
      <Link href="/page2" passHref>
        <div
          className="p-2 rounded cursor-pointer flex flex-col items-center"
          onClick={() => handleLinkClick('/page2')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.4497 12.6398L20.9122 11.2621L19.4497 9.88439L15.7986 13.3239L7.03378 5.06719L10.6849 1.62772L9.22242 0.25L7.75992 1.62772L6.29742 0.25L4.10878 2.31176L2.64628 0.934042L1.18378 2.31176L2.64628 3.68948L0.457642 5.75124L1.92014 7.12895L0.457642 8.50667L1.92014 9.88439L5.57128 6.44491L14.3361 14.7016L10.6849 18.1411L12.1474 19.5188L13.6099 18.1411L15.0724 19.5188L17.2611 17.457L18.7236 18.8347L20.1861 17.457L18.7236 16.0793L20.9122 14.0175L19.4497 12.6398Z"
              fill={activePath === '/page2' ? "#D15439" : "#B5B5B5"}
            />
          </svg>
          <span className={activePath === '/page2' ? "text-[#D15439]" : "text-[#B5B5B5]"}>Page2</span>
        </div>
      </Link>
      <Link href="/page3" passHref>
        <div
          className="p-2 rounded cursor-pointer flex flex-col items-center"
          onClick={() => handleLinkClick('/page3')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.56632 0.400613C1.32763 0.400613 1.09871 0.489937 0.929925 0.648935C0.761142 0.807934 0.666321 1.02358 0.666321 1.24844V4.63974V5.91148C0.666321 7.3443 1.59332 8.56517 2.91632 9.06539V14.3897C2.91632 14.727 3.05855 15.0505 3.31173 15.289C3.5649 15.5275 3.90828 15.6615 4.26632 15.6615C4.62436 15.6615 4.96774 15.5275 5.22091 15.289C5.47409 15.0505 5.61632 14.727 5.61632 14.3897V9.06539C6.93932 8.56517 7.86632 7.3443 7.86632 5.91148V4.63974V1.24844C7.86632 1.02358 7.7715 0.807934 7.60272 0.648935C7.43393 0.489937 7.20502 0.400613 6.96632 0.400613C6.72763 0.400613 6.49871 0.489937 6.32992 0.648935C6.16114 0.807934 6.06632 1.02358 6.06632 1.24844V4.63974C6.06632 4.75217 6.01891 4.85999 5.93452 4.93949C5.85013 5.01899 5.73567 5.06365 5.61632 5.06365C5.49697 5.06365 5.38251 5.01899 5.29812 4.93949C5.21373 4.85999 5.16632 4.75217 5.16632 4.63974V1.24844C5.16632 1.02358 5.0715 0.807934 4.90272 0.648935C4.73393 0.489937 4.50502 0.400613 4.26632 0.400613C4.02763 0.400613 3.79871 0.489937 3.62992 0.648935C3.46114 0.807934 3.36632 1.02358 3.36632 1.24844V4.63974C3.36632 4.75217 3.31891 4.85999 3.23452 4.93949C3.15013 5.01899 3.03567 5.06365 2.91632 5.06365C2.79697 5.06365 2.68251 5.01899 2.59812 4.93949C2.51373 4.85999 2.46632 4.75217 2.46632 4.63974V1.24844C2.46632 1.02358 2.3715 0.807934 2.20272 0.648935C2.03393 0.489937 1.80502 0.400613 1.56632 0.400613ZM16.7583 0.400613C16.6413 0.400613 16.5243 0.476918 16.4163 0.536265L13.2663 2.30822V5.48757H9.66632V7.18322H10.5663L11.4663 15.6615H16.8663L17.7663 7.18322H18.6663V5.48757H15.0663V3.23235L17.3163 1.96061C17.7663 1.72322 17.8833 1.24844 17.6223 0.824526C17.4333 0.519309 17.1003 0.358222 16.7583 0.400613Z"
              fill={activePath === '/page3' ? "#D15439" : "#B5B5B5"}
            />
          </svg>
          <span className={activePath === '/page3' ? "text-[#D15439]" : "text-[#B5B5B5]"}>Page3</span>
        </div>
      </Link>
      <Link href="/page4" passHref>
        <div
          className="p-2 rounded cursor-pointer flex flex-col items-center"
          onClick={() => handleLinkClick('/page4')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.79546 7.70751L3.30682 7.77495L7.98069 3.37204C7.7966 2.7458 7.97046 2.03286 8.51251 1.53187C9.31023 0.770751 10.5989 0.770751 11.3966 1.53187C11.9386 2.03286 12.1125 2.7458 11.9284 3.37204L14.5568 5.84807L15.0682 5.78063C15.2523 5.78063 15.4261 5.78063 15.5796 5.84807L19.2307 2.4086C19.1591 2.26408 19.1591 2.1003 19.1591 1.92688C19.1591 1.41584 19.3746 0.925729 19.7582 0.564369C20.1418 0.20301 20.6621 0 21.2046 0C21.7471 0 22.2673 0.20301 22.6509 0.564369C23.0345 0.925729 23.25 1.41584 23.25 1.92688C23.25 2.43792 23.0345 2.92803 22.6509 3.28939C22.2673 3.65074 21.7471 3.85375 21.2046 3.85375C21.0205 3.85375 20.8466 3.85376 20.6932 3.78631L17.0421 7.22579C17.1137 7.37031 17.1137 7.53409 17.1137 7.70751C17.1137 8.21855 16.8981 8.70866 16.5146 9.07002C16.131 9.43138 15.6107 9.63439 15.0682 9.63439C14.5257 9.63439 14.0054 9.43138 13.6218 9.07002C13.2382 8.70866 13.0227 8.21855 13.0227 7.70751L13.0943 7.22579L10.4659 4.74975C10.1386 4.81719 9.77046 4.81719 9.44319 4.74975L4.76932 9.15267L4.84091 9.63439C4.84091 10.1454 4.62541 10.6355 4.24181 10.9969C3.85821 11.3583 3.33794 11.5613 2.79546 11.5613C2.25297 11.5613 1.7327 11.3583 1.3491 10.9969C0.965503 10.6355 0.75 10.1454 0.75 9.63439C0.75 9.12335 0.965503 8.63324 1.3491 8.27188C1.7327 7.91052 2.25297 7.70751 2.79546 7.70751Z"
              fill={activePath === '/page4' ? "#D15439" : "#B5B5B5"}
            />
          </svg>
          <span className={activePath === '/page4' ? "text-[#D15439]" : "text-[#B5B5B5]"}>Page4</span>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
