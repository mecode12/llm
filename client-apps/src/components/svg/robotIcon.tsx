import * as React from "react";
const RobotIcon = (
   props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      viewBox="0 0 512 512"
      className={props.className}
      {...props}
   >
      <path
         d="M0 0 C11.55 0 23.1 0 35 0 C36.26810968 3.80432903 37.36452529 7.26719613 38.22094727 11.1315918 C38.43779678 12.10247238 38.6546463 13.07335297 38.87806702 14.07365417 C39.21879494 15.62080864 39.21879494 15.62080864 39.56640625 17.19921875 C39.80536118 18.27122025 40.0443161 19.34322174 40.29051208 20.44770813 C41.05080919 23.86032007 41.80692889 27.27383886 42.5625 30.6875 C43.32218945 34.11174676 44.08278673 37.53578544 44.84519958 40.95942688 C45.31880865 43.08696518 45.79075522 45.21487438 46.26087952 47.34318542 C46.47457687 48.30460953 46.68827423 49.26603363 46.90844727 50.2565918 C47.18918846 51.52517281 47.18918846 51.52517281 47.4756012 52.81938171 C48.00502652 55.15782139 48.00502652 55.15782139 49 58 C50.24007812 57.74605469 51.48015625 57.49210937 52.7578125 57.23046875 C98.55174705 48.18192241 145.30143167 48.55339144 191 58 C192.04435329 53.56312885 193.08548149 49.125506 194.125 44.6875 C194.3595993 43.68681992 194.3595993 43.68681992 194.59893799 42.66592407 C196.36387167 35.13028636 198.10532257 27.59070325 199.765625 20.03125 C200.03745605 18.79415283 200.30928711 17.55705566 200.58935547 16.2824707 C201.10740762 13.91195548 201.62213303 11.54071044 202.13330078 9.16870117 C202.3651709 8.10627197 202.59704102 7.04384277 202.8359375 5.94921875 C203.03751465 5.01424561 203.2390918 4.07927246 203.44677734 3.1159668 C204 1 204 1 205 0 C216.55 0 228.1 0 240 0 C240 24.09 240 48.18 240 73 C243.3 73.99 246.6 74.98 250 76 C253.31572476 77.08500436 256.56172686 78.29729176 259.8125 79.5625 C261.04129883 79.98885742 261.04129883 79.98885742 262.29492188 80.42382812 C266.93318128 82.26035351 269.45532153 84.00328524 271.8046875 88.46875 C274.37606009 94.47970049 276.37708169 100.69788765 278.3125 106.9375 C278.85100586 108.62069336 278.85100586 108.62069336 279.40039062 110.33789062 C282 118.58236607 282 118.58236607 282 122 C282.56203125 122.13535156 283.1240625 122.27070313 283.703125 122.41015625 C290.30664446 124.1015485 296.78747737 126.15220822 303.25 128.3125 C304.10110352 128.58392822 304.95220703 128.85535645 305.82910156 129.13500977 C313.32301957 131.69374789 318.61885526 135.12217824 322.66088867 142.07495117 C326.3258038 149.69418039 325.69968779 157.93875018 325.62890625 166.1953125 C325.62973642 167.95547634 325.63220136 169.7156401 325.63621521 171.47579956 C325.63906088 175.14898251 325.62449037 178.82155153 325.59692383 182.49462891 C325.56279246 187.18641811 325.56888764 191.87711433 325.5875864 196.56895638 C325.59818702 200.1979981 325.58919172 203.82678835 325.57420158 207.45580673 C325.56904515 209.18524299 325.56947051 210.91470578 325.57574654 212.64413834 C325.58123819 215.06557401 325.56070202 217.48547759 325.53344727 219.90673828 C325.54323608 220.96211792 325.54323608 220.96211792 325.55322266 222.03881836 C325.41245723 229.44719077 322.02904299 235.67513095 317 241 C308.38468387 246.88146796 292.49513357 254 282 254 C281.85304688 254.87615967 281.85304688 254.87615967 281.703125 255.77001953 C280.43561269 262.72904456 278.37821672 269.22288657 276 275.875 C275.46632813 277.40253906 275.46632813 277.40253906 274.921875 278.9609375 C270.89100322 290.39176791 270.89100322 290.39176791 268.33374023 292.13745117 C267.66544189 292.43627197 266.99714355 292.73509277 266.30859375 293.04296875 C265.54200439 293.3898877 264.77541504 293.73680664 263.9855957 294.09423828 C263.14472412 294.45501465 262.30385254 294.81579102 261.4375 295.1875 C260.55344482 295.57405762 259.66938965 295.96061523 258.75854492 296.35888672 C215.1819409 315.06320708 168.5146505 325.20978054 121.0625 325.25 C120.33311218 325.25067474 119.60372437 325.25134949 118.85223389 325.25204468 C75.61676436 325.18949302 33.17307368 316.80039699 -7.09277344 301.11474609 C-9.97499079 300.00958952 -12.87792691 298.98311976 -15.7890625 297.95703125 C-29.18191991 292.96776789 -29.18191991 292.96776789 -32.35546875 287.765625 C-33.69413725 284.5583267 -34.66384762 281.58042758 -35.44921875 278.21386719 C-36.06655559 275.73247957 -36.84360058 273.33834513 -37.65625 270.9140625 C-38.7657952 267.59167082 -39.86274217 264.26812898 -40.8984375 260.921875 C-41.21820557 259.89465332 -41.21820557 259.89465332 -41.54443359 258.84667969 C-42 257 -42 257 -42 254 C-42.51304688 253.85304688 -43.02609375 253.70609375 -43.5546875 253.5546875 C-46.37767622 252.72775141 -49.18865455 251.86577766 -52 251 C-52.6914209 250.79068848 -53.3828418 250.58137695 -54.09521484 250.36572266 C-77.16529731 243.3235912 -77.16529731 243.3235912 -83.125 232.83203125 C-85.10134969 228.69404908 -85.16639327 224.95925832 -85.19287109 220.47436523 C-85.20513733 219.32737404 -85.20513733 219.32737404 -85.21765137 218.1572113 C-85.24247778 215.62434665 -85.25901888 213.09153817 -85.2734375 210.55859375 C-85.27876118 209.69122149 -85.28408485 208.82384922 -85.28956985 207.93019295 C-85.31629604 203.33457448 -85.33566818 198.73898305 -85.35009766 194.14331055 C-85.36340802 190.35172241 -85.39120728 186.56067614 -85.43212891 182.76928711 C-85.48164015 178.18161929 -85.50624186 173.59444096 -85.51332474 169.00651741 C-85.52000845 167.2647168 -85.53515486 165.52292586 -85.55921555 163.78127861 C-85.70568249 152.5327483 -85.19994442 143.30447576 -77.11328125 134.7109375 C-71.62842544 130.48770255 -64.69128025 128.73403435 -58.1875 126.625 C-56.83871276 126.17199945 -55.49040021 125.71758293 -54.14257812 125.26171875 C-44.40258647 122 -44.40258647 122 -42 122 C-41.90130615 121.41516846 -41.8026123 120.83033691 -41.70092773 120.2277832 C-40.43525059 113.30018799 -38.41325864 106.8170707 -36.0625 100.1875 C-35.71509766 99.17751953 -35.36769531 98.16753906 -35.00976562 97.12695312 C-30.75741467 84.99453939 -30.75741467 84.99453939 -26.21264648 82.42260742 C-25.10993408 81.98795166 -24.00722168 81.5532959 -22.87109375 81.10546875 C-21.07188477 80.38520508 -21.07188477 80.38520508 -19.23632812 79.65039062 C-17.97007015 79.16271351 -16.7037939 78.67508384 -15.4375 78.1875 C-14.16675138 77.68175921 -12.89656171 77.17461157 -11.62695312 76.66601562 C-2.35467687 73 -2.35467687 73 0 73 C0 48.91 0 24.82 0 0 Z M18 103 C16.99356445 103.32226562 15.98712891 103.64453125 14.95019531 103.9765625 C12.13526366 104.89587639 9.34839077 105.87153413 6.5625 106.875 C5.74579834 107.1416748 4.92909668 107.40834961 4.08764648 107.68310547 C0.6731672 108.99340226 -1.40261039 110.01047039 -3.32666016 113.19750977 C-4.38905488 115.77067415 -5.22903218 118.32596561 -6 121 C-6.23130615 121.70157227 -6.4626123 122.40314453 -6.70092773 123.12597656 C-7.35333101 125.13497229 -7.93784549 127.15148556 -8.5 129.1875 C-8.7072168 129.93580078 -8.91443359 130.68410156 -9.12792969 131.45507812 C-19.74097691 171.40434318 -17.98546268 212.38635561 -7 252 C-6.73558105 253.07572266 -6.47116211 254.15144531 -6.19873047 255.25976562 C-4.76310127 260.83902973 -4.76310127 260.83902973 -1.51879883 265.45043945 C0.61070801 266.59575227 2.68673532 267.28626901 5 268 C6.12728516 268.40718262 7.25457031 268.81436523 8.41601562 269.23388672 C12.50367621 270.70824305 16.62243784 272.07955232 20.75 273.4375 C21.48742432 273.68122345 22.22484863 273.9249469 22.98461914 274.17605591 C85.95151606 294.92976899 152.7286651 295.1806362 216 275 C217.76077881 274.44070801 217.76077881 274.44070801 219.55712891 273.87011719 C223.16239021 272.69424735 226.73816603 271.45399041 230.3125 270.1875 C231.42238281 269.82180908 232.53226563 269.45611816 233.67578125 269.0793457 C239.35243947 267.01452659 239.35243947 267.01452659 243.50317383 262.83447266 C244.58907409 260.24397478 245.32870114 257.7264348 246 255 C246.26353271 254.11852295 246.52706543 253.2370459 246.79858398 252.32885742 C247.61522454 249.56555336 248.34975144 246.79181724 249.0625 244 C249.31926514 243.00323242 249.57603027 242.00646484 249.84057617 240.97949219 C259.3101196 203.31783393 258.12565434 164.29257235 247.80517578 126.92773438 C247.24467255 124.88966441 246.7363318 122.83683047 246.26904297 120.77539062 C244.7732066 114.88719913 244.7732066 114.88719913 241.01196289 110.30932617 C238.38982186 108.93536397 235.80426817 107.94912978 233 107 C231.41445313 106.40276123 231.41445313 106.40276123 229.796875 105.79345703 C226.21878583 104.47771277 222.62017351 103.25744511 219 102.0625 C218.34760345 101.84656189 217.69520691 101.63062378 217.02304077 101.40814209 C151.50659147 79.839881 83.26559912 81.53832825 18 103 Z "
         fill="currentColor"
         transform="translate(136,51)"
      />
      <path
         d="M0 0 C0.71084747 0.10682098 1.42169495 0.21364197 2.15408325 0.32369995 C13.62413277 2.06206638 13.62413277 2.06206638 16 3.25 C16 14.8 16 26.35 16 38.25 C9.40890883 37.65080989 2.97425628 37.03207426 -3.5390625 36.015625 C-5.16166808 35.77047271 -6.78439558 35.52612642 -8.40722656 35.2824707 C-9.25418091 35.15490387 -10.10113525 35.02733704 -10.97375488 34.89590454 C-51.10667029 28.90294548 -91.48761438 25.36713203 -132 23.25 C-132.71236816 23.21239563 -133.42473633 23.17479126 -134.15869141 23.13604736 C-143.76970296 22.6371039 -153.37722689 22.36894958 -163 22.25 C-163.88524353 22.23904297 -164.77048706 22.22808594 -165.68255615 22.21679688 C-237.09731549 21.39386843 -307.96404747 25.81816166 -378.56030273 36.72631836 C-379.56597542 36.88011459 -379.56597542 36.88011459 -380.59196472 37.03701782 C-382.38244043 37.311606 -384.17220826 37.59079904 -385.96191406 37.87036133 C-389 38.25 -389 38.25 -394 38.25 C-394 26.7 -394 15.15 -394 3.25 C-388.1927194 1.9594932 -382.5203661 0.77769404 -376.65625 -0.08203125 C-375.47837418 -0.25724808 -375.47837418 -0.25724808 -374.27670288 -0.43600464 C-371.68533147 -0.81775186 -369.09295304 -1.19165174 -366.5 -1.5625 C-365.59106995 -1.69250397 -364.68213989 -1.82250793 -363.7456665 -1.95645142 C-324.66301674 -7.49689883 -285.41046975 -10.73519783 -246 -12.75 C-245.28805481 -12.78760437 -244.57610962 -12.82520874 -243.84259033 -12.86395264 C-162.60304334 -17.15478262 -80.38976574 -12.09915257 0 0 Z "
         fill="currentColor"
         transform="translate(445,422.75)"
      />
      <path
         d="M0 0 C4.88938661 3.33367269 7.8818767 7.29937794 9.75 12.875 C10.01742554 15.32063293 10.01742554 15.32063293 10.04052734 17.90551758 C10.05328705 18.88035599 10.06604675 19.8551944 10.07919312 20.85957336 C10.08141876 21.90235947 10.08364441 22.94514557 10.0859375 24.01953125 C10.0925943 25.10328537 10.0992511 26.18703949 10.10610962 27.30363464 C10.11622282 29.59408881 10.12092705 31.88457236 10.12060547 34.17504883 C10.1249715 37.66472411 10.16128726 41.15312704 10.19921875 44.64257812 C10.20508871 46.87239153 10.2090569 49.10221091 10.2109375 51.33203125 C10.22530853 52.36874466 10.23967957 53.40545807 10.25448608 54.47358704 C10.20679019 62.10317403 8.86861222 67.75638778 3.375 73.25 C-1.99609696 76.57496478 -6.4908427 77.38765241 -12.7109375 76.6171875 C-17.70661372 75.15691291 -21.65542281 71.50940243 -24.33145142 67.08833313 C-25.42876312 64.44425268 -25.51706205 62.4353458 -25.54052734 59.57495117 C-25.55328705 58.51672653 -25.56604675 57.45850189 -25.57919312 56.36820984 C-25.58141876 55.22963028 -25.58364441 54.09105072 -25.5859375 52.91796875 C-25.5925943 51.74164383 -25.5992511 50.56531891 -25.60610962 49.35334778 C-25.6162346 46.86440596 -25.62092669 44.375437 -25.62060547 41.88647461 C-25.62497153 38.08726976 -25.66127558 34.28923316 -25.69921875 30.49023438 C-25.70508837 28.07031647 -25.70905679 25.65039305 -25.7109375 23.23046875 C-25.72530853 22.09796188 -25.73967957 20.96545502 -25.75448608 19.79862976 C-25.71682894 13.26456145 -25.2178819 9.15222022 -21.25 3.875 C-14.61880517 -1.26755925 -7.9950467 -2.76751616 0 0 Z "
         fill="currentColor"
         transform="translate(332.25,184.125)"
      />
      <path
         d="M0 0 C4.39967377 2.62276496 6.78578492 5.78253367 8.75 10.5 C9.43924086 14.63819023 9.42843222 18.69505612 9.37890625 22.8828125 C9.38131821 24.0558493 9.38373016 25.22888611 9.38621521 26.43746948 C9.38523935 28.90675248 9.37190877 31.37605806 9.34692383 33.84521484 C9.31254351 37.62022212 9.32629969 41.39289593 9.34570312 45.16796875 C9.33880619 47.5729266 9.3291352 49.97787844 9.31640625 52.3828125 C9.32136612 53.50793243 9.32632599 54.63305237 9.33143616 55.79226685 C9.20727668 64.06243322 7.75168203 67.28391212 2.125 73.3125 C-1.88162728 76.43888341 -6.29610499 76.75267162 -11.25 76.5 C-15.78294533 75.67224477 -19.05498011 74.08884169 -22.125 70.625 C-25.10261103 66.24616025 -26.49315971 62.76949504 -26.54052734 57.46948242 C-26.55328705 56.49464401 -26.56604675 55.5198056 -26.57919312 54.51542664 C-26.58141876 53.47264053 -26.58364441 52.42985443 -26.5859375 51.35546875 C-26.5925943 50.27171463 -26.5992511 49.18796051 -26.60610962 48.07136536 C-26.61622282 45.78091119 -26.62092705 43.49042764 -26.62060547 41.19995117 C-26.6249715 37.71027589 -26.66128726 34.22187296 -26.69921875 30.73242188 C-26.70508871 28.50260847 -26.7090569 26.27278909 -26.7109375 24.04296875 C-26.72530853 23.00625534 -26.73967957 21.96954193 -26.75448608 20.90141296 C-26.71084407 13.92029847 -25.72619509 8.1482914 -20.7671814 2.94377136 C-14.71208058 -2.35080093 -7.35832425 -3.16952487 0 0 Z "
         fill="currentColor"
         transform="translate(196.25,184.5)"
      />
      <path
         d="M0 0 C23.1 0 46.2 0 70 0 C70 8.91 70 17.82 70 27 C46.9 27 23.8 27 0 27 C0 18.09 0 9.18 0 0 Z "
         fill="currentColor"
         transform="translate(221,281)"
      />
   </svg>
);
export default RobotIcon;