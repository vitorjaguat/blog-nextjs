import headerImg from '../../public/assets/img/header.svg';

export default function Header() {
  return (
    <div className='w-full bg-amber-100'>
      <div className='flex justify-between pt-[100px] overflow-hidden max-w-[1240px] mx-auto'>
        <div>
          <h1 className='sm:text-5xl lg:text-6xl ml-[10%] mt-[30%] sm:mt-[15%]'>
            notes on technology
          </h1>
          <p className='text-end text-lg lg:text-xl mt-[35%] sm:mt-[25%] lg:mt-[15%] ml-[30%] lg:ml-[70%] w-[70%] lg:w-[50%] lg:'>
            exploring new technologies from a humanized point of view.
          </p>
        </div>
        <svg
          className='translate-y-1 self-end'
          width='585'
          height='400'
          viewBox='0 0 585 635'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M242.092 470.982C242.092 470.982 265.447 426.65 239.692 401.846C213.937 377.042 223.669 361.045 264.494 360.87C305.319 360.695 441.052 366.833 470.37 276.194C499.709 185.432 459.147 120.775 368.406 91.3151C277.665 61.8552 98.209 11.1273 53.8139 81.0825C9.41883 151.038 13.2953 198.208 45.7234 242.445C78.1516 286.682 146.527 330.818 162.206 356.966C177.885 383.114 189.166 407.169 214.795 415.983C240.424 424.797 239.925 456.03 232.392 469.269C224.96 482.648 242.092 470.982 242.092 470.982Z'
            fill='#FDB100'
          />
          <path
            d='M70.2615 34.7456C70.2615 34.7456 25.2569 60.4356 18.3229 70.7779C11.2675 81.1002 -0.00486374 88.9852 10.6013 117.92C21.2075 146.855 38.3757 170.003 48.9327 174.103C59.4897 178.203 73.8666 180.308 108.527 161.407C143.187 142.507 190.729 126.464 193.047 108.504C195.364 90.544 183.372 -0.000406265 142.726 6.69152C102.081 13.3835 70.2615 34.7456 70.2615 34.7456Z'
            fill='white'
          />
          <path
            d='M71.3131 63.3632C67.334 66.3295 71.5498 75.6285 75.6934 80.7986C79.8569 85.8472 85.0312 97.6736 85.558 105.121C86.0849 112.568 89.3287 121.708 101.164 105.057C112.998 88.4061 125.908 79.6664 117.566 64.3269C109.225 48.9874 71.3131 63.3632 71.3131 63.3632Z'
            fill='#FDB100'
          />
          <path
            d='M188.823 263.015C188.823 263.015 172.478 273.687 174.998 291.816C177.518 309.944 185.305 329.435 213.366 324.924C241.549 320.432 290.979 306.571 297.823 307.442C304.667 308.314 318.8 317.241 319.208 318.555C319.617 319.87 333.27 244.131 300.701 243.412C268.292 242.471 188.823 263.015 188.823 263.015Z'
            fill='white'
          />
          <path
            d='M201.952 137.161C201.952 137.161 186.43 167.181 192.669 176.312C198.909 185.444 222.624 218.896 258.472 219.403C294.339 219.789 302.499 184.446 302.499 184.446C302.499 184.446 292.305 172.795 278.112 171.094C263.918 169.393 250.913 165.766 243.731 152.488C236.549 139.209 215.314 130.99 201.952 137.161Z'
            fill='white'
          />
          <path
            d='M209.79 124.346C209.79 124.346 230.832 121.555 241.336 128.266C251.859 134.855 252.442 154.912 270.806 157.047C289.17 159.182 295.809 159.021 301.901 166.008C307.993 172.994 309.431 173.354 309.431 173.354C309.431 173.354 329.864 140.77 320.456 120.515C311.048 100.26 248.635 82.1772 239.767 88.335C230.938 94.2498 218.055 105.115 209.79 124.346Z'
            fill='white'
          />
          <path
            d='M299.786 140.834C304.215 141.559 308.393 138.557 309.119 134.128C309.844 129.7 306.842 125.521 302.413 124.796C297.984 124.07 293.806 127.073 293.081 131.501C292.355 135.93 295.357 140.109 299.786 140.834Z'
            fill='#FDB100'
          />
          <path
            d='M425.314 88.1603C335.586 95.1717 322.97 208.758 407.151 230.282C437.548 235.885 473.621 237.302 490.365 202.866C507.11 168.43 510.551 125.327 474.569 105.835C438.587 86.342 425.314 88.1603 425.314 88.1603Z'
            fill='white'
          />
          <path
            d='M418.302 193.433C418.302 193.433 432.248 208.068 448.208 189.847C464.168 171.626 468.731 160.522 460.923 154.876C453.114 149.23 447.401 147.546 449.201 139.607C450.879 131.647 464.57 112.805 458.756 110.98C453.063 109.174 450.416 110.861 442.806 118.473C435.075 126.064 412.729 133.009 405.785 132.745C398.842 132.481 378.33 144.217 383.038 155.843C387.605 167.57 418.302 193.433 418.302 193.433Z'
            fill='#FDB100'
          />
          <path
            d='M38.9685 208.277C-39.1503 255.616 39.1579 370.123 111.352 324.682C140.71 306.161 161.325 280.843 149.277 250.05C137.228 219.256 109.584 170.189 38.9685 208.277Z'
            fill='white'
          />
          <path
            d='M70.4456 245.372C70.4456 245.372 44.7125 235.667 47.9626 261.526C51.2127 287.385 89.5211 291.913 89.5211 291.913C89.5211 291.913 115.593 241.663 93.0678 228.367C70.6446 215.212 70.4456 245.372 70.4456 245.372Z'
            fill='#FDB100'
          />
          <path
            d='M240.554 514.646C240.554 514.646 249.292 526.807 254.404 538.249C259.395 549.671 286.955 619.061 318.569 596.667C350.183 574.273 339.227 470.549 339.227 470.549L319.735 456.253C319.735 456.253 313.135 549.865 308.806 558.014C304.356 566.143 299.865 560.043 293.02 551.561C286.156 543.2 256.653 510.047 256.653 510.047L240.554 514.646Z'
            fill='#A3685D'
          />
          <path
            d='M371.614 391.64C371.614 391.64 351.049 391.516 334.113 422.552C317.177 453.588 318.253 454.637 318.253 454.637L338.307 474.64L371.614 391.64Z'
            fill='#ADA8E5'
          />
          <path
            d='M376.353 385.555C376.353 385.555 340.485 414.114 330.063 443.472C319.781 472.729 319.605 482.181 323.853 495.852C328.102 509.523 328.879 541.34 325.253 561.955C321.607 582.692 315.537 634.027 315.537 634.027L453.515 632.743L427.296 478.237C427.296 478.237 468.479 461.403 488.819 460.617C488.819 460.617 483.141 406.165 466.73 400.483C450.299 394.922 430.042 389.109 420.802 385.35C411.723 381.367 376.353 385.555 376.353 385.555Z'
            fill='#ADA8E5'
          />
          <path
            d='M419.185 422.638C419.185 422.638 415.379 436.736 424.512 467.052L419.185 422.638Z'
            fill='#ADA8E5'
          />
          <path
            d='M258.106 472.233C258.106 472.233 295.075 482.655 299.355 486.226C303.515 489.776 329.599 516.381 329.599 516.381C329.599 516.381 430.892 555.304 439.91 552.041L424.39 467.032C424.39 467.032 484.745 451.217 487.762 451.836C490.76 452.576 503.345 530.367 502.804 554.233C502.385 578.118 493.237 621.783 467.205 620.763C441.172 619.743 339.048 551.614 317.41 536.717C317.41 536.717 296.69 524.589 294.757 521.154C294.757 521.154 296.678 527.707 293.682 527.715C290.687 527.723 275.211 516.331 271.785 499.925C271.785 499.925 272.519 494.68 283.685 492.018C283.685 492.018 257.508 482.74 256.573 481.589C255.659 480.316 246.53 472.832 258.106 472.233Z'
            fill='#A3685D'
          />
          <path
            d='M218.552 463.883C218.552 463.883 218.358 459.734 223.278 460.166C228.198 460.597 254.018 465.201 254.018 465.201C254.018 465.201 258.573 465.572 259.741 470.629C260.909 475.686 284.254 528.915 284.254 528.915C284.254 528.915 283.477 533.654 279.872 532.814C276.247 532.095 246.239 527.929 246.239 527.929L218.552 463.883Z'
            fill='#6B5FF3'
          />
          <path
            d='M221.902 474.662C221.902 474.662 217.944 492.728 220.435 500.372C222.926 508.016 226.77 521.87 245.199 518.277C263.629 514.683 263.813 508.226 261.748 507.887C259.561 507.529 255.105 506.55 255.105 506.55C255.105 506.55 262.139 503.211 261.141 500.926C260.143 498.642 256.757 496.465 254.45 496.836C252.144 497.207 257.744 495.005 256.846 492.113C255.947 489.221 254.385 488.092 250.296 487.921C246.207 487.751 227.544 487.438 227.544 487.438L221.902 474.662Z'
            fill='#A3685D'
          />
          <path
            d='M399.716 365.552C401.787 346.054 400.28 306.508 400.28 306.508L342.343 318.227C342.343 318.227 339.943 335.925 343.203 343.445C343.203 343.445 334.573 348.145 335.328 350.39C336.083 352.634 342.764 352.98 344.164 354.332C345.564 355.684 355.994 386.462 373.556 376.738C374.128 378.578 374.6 381.026 373.756 383.133C372.129 387.732 369.383 390.027 366.811 404.203C364.24 418.379 357.995 458.028 357.995 458.028C357.995 458.028 412.442 385.353 427.49 381.08C438.735 377.932 413.39 369.663 399.716 365.552Z'
            fill='#A3685D'
          />
          <path
            d='M350.837 359.293C350.837 359.293 355.349 358.41 354.864 351.469L350.837 359.293Z'
            fill='#A3685D'
          />
          <path
            d='M373.42 342.531C373.42 342.531 370.754 337.478 376.713 333.089L373.42 342.531Z'
            fill='#A3685D'
          />
          <path
            d='M353.128 342.498C354.295 342.13 354.861 340.623 354.391 339.131C353.922 337.639 352.595 336.728 351.427 337.095C350.26 337.463 349.694 338.97 350.163 340.462C350.633 341.954 351.96 342.865 353.128 342.498Z'
            fill='#543332'
          />
          <path
            d='M350.436 324.419C350.436 324.419 336 322.678 336.914 309.478C336.914 309.478 319.657 305.155 325.253 286.983C330.83 268.933 349.898 276.672 349.898 276.672C349.898 276.672 365.242 255.356 383.622 270.344C383.622 270.344 390.407 264.718 396.156 272.272C396.156 272.272 406.863 264.793 414.403 275.885C414.403 275.885 419.349 263.969 431.263 268.166C443.298 272.383 442.542 284.611 442.542 284.611C442.542 284.611 450.594 275.824 460.841 284.863C471.088 293.902 463.714 306.169 463.714 306.169C463.714 306.169 483.842 316.577 467.267 331.703C467.267 331.703 478.02 340.7 466.216 354.112C466.216 354.112 468.334 373.173 450.814 383.404C433.172 393.614 417.537 383.193 417.537 383.193C417.537 383.193 408.538 393.197 395.721 384.61C382.784 376.003 391.564 367.336 391.564 367.336C391.564 367.336 378.639 363.223 377.086 350.617C377.086 350.617 397.784 347.644 387.392 330.347C384.203 326.207 369.904 322.867 366.751 339.068C366.751 339.068 364.367 340.674 363.979 332.376C363.94 332.619 354.798 335.114 350.436 324.419Z'
            fill='#172540'
          />
          <path
            d='M685.906 403.458C685.693 380.606 667.004 362.261 644.151 362.473L545.898 363.388C523.046 363.601 504.701 382.29 504.914 405.143C505.127 427.995 523.816 446.34 546.669 446.127L629.294 445.358L646.309 459.422C648.108 460.736 650.606 459.42 650.585 457.215L650.469 444.743C670.634 441.855 686.101 424.409 685.906 403.458Z'
            fill='#3A51CE'
          />
          <path
            d='M647.743 397.045L539.186 398.055C536.791 398.077 534.833 396.156 534.811 393.761C534.789 391.365 536.71 389.408 539.105 389.385L647.663 388.375C650.058 388.353 652.015 390.274 652.038 392.669C652.022 395.065 650.139 397.022 647.743 397.045Z'
            fill='white'
          />
          <path
            d='M647.916 415.524L586.279 416.098C583.884 416.12 581.927 414.199 581.904 411.803C581.882 409.408 583.803 407.45 586.199 407.428L647.835 406.855C650.23 406.832 652.188 408.753 652.21 411.149C652.194 413.545 650.311 415.502 647.916 415.524Z'
            fill='white'
          />
        </svg>

        {/* <img src={headerImg} alt='header image' width='50%' height='300px' /> */}
      </div>
    </div>
  );
}
