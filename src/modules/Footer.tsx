import React from "react"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <a href="/">
        <img src="/assets/img/logo2.png" alt="logo" className="footer__logo" />
      </a>
      <div className="footer__contacts">
        <ul className="footer__links">
          <li className="footer__li">
            <a href="/" className="footer__link">
              Cвязаться с нами
            </a>
          </li>
          <li className="footer__li">
            <a href="/" className="footer__link">
              reklama@wildjam.ru
            </a>
          </li>
          <li className="footer__li">
            <a href="/" className="footer__link">
              ул. Сущевская, д. 27, стр. 2
            </a>
          </li>
          <li className="footer__li">
            <a href="/" className="footer__link">
              +7 (499) 393-39-62
            </a>
          </li>
        </ul>
        <ul className="footer__media">
          <a href="/" className="footer__link">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.93745 0C4.36463 0.00612895 2.85797 0.633649 1.74581 1.74581C0.633649 2.85797 0.00612895 4.36463 0 5.93745V26.0625C0.00612895 27.6354 0.633649 29.142 1.74581 30.2542C2.85797 31.3664 4.36463 31.9939 5.93745 32H26.0625C27.6354 31.9939 29.142 31.3664 30.2542 30.2542C31.3664 29.142 31.9939 27.6354 32 26.0625V5.93745C31.9939 4.36463 31.3664 2.85797 30.2542 1.74581C29.142 0.633649 27.6354 0.00612895 26.0625 0H5.93745ZM5.93745 2.90909H26.0625C27.7498 2.90909 29.0909 4.25018 29.0909 5.93745V26.0625C29.0909 27.7498 27.7498 29.0909 26.0625 29.0909H5.93745C5.53906 29.0934 5.14414 29.0168 4.77559 28.8655C4.40703 28.7142 4.07219 28.4912 3.79048 28.2095C3.50877 27.9278 3.2858 27.593 3.1345 27.2244C2.9832 26.8559 2.90658 26.4609 2.90909 26.0625V5.93745C2.90909 4.25018 4.25018 2.90909 5.93745 2.90909ZM15.5913 10.5164C14.5222 10.5062 13.6131 10.5164 13.1025 10.7665C12.7607 10.9324 12.5004 11.3062 12.6589 11.3236C12.8582 11.3527 13.3062 11.4487 13.5462 11.7731C13.8516 12.1876 13.8415 13.1258 13.8415 13.1258C13.8415 13.1258 14.0116 15.7047 13.4255 16.0291C13.0225 16.2502 12.4713 15.8007 11.2785 13.7498C10.6705 12.6938 10.2109 11.5287 10.2109 11.5287C10.2109 11.5287 10.1236 11.312 9.96655 11.1985C9.77309 11.0575 9.50546 11.0109 9.50546 11.0109L6.65891 11.0284C6.65891 11.0284 6.23273 11.0458 6.08 11.2276C5.93746 11.3978 6.06836 11.7324 6.06836 11.7324C6.06836 11.7324 8.29527 16.9425 10.8175 19.568C13.1302 21.9782 15.7556 21.8182 15.7556 21.8182H16.9484C16.9484 21.8182 17.3062 21.7789 17.488 21.5855C17.6596 21.4036 17.6538 21.0618 17.6538 21.0618C17.6538 21.0618 17.6305 19.4662 18.3695 19.2276C19.1025 18.9993 20.0335 20.7724 21.0284 21.4545C21.7847 21.9709 22.3578 21.8575 22.3578 21.8575L25.0182 21.8182C25.0182 21.8182 26.4044 21.7324 25.7455 20.6356C25.6945 20.5513 25.3644 19.8298 23.7745 18.352C22.1033 16.8073 22.3258 17.0575 24.336 14.3811C25.5578 12.7505 26.0465 11.7556 25.8924 11.3236C25.7469 10.9207 24.848 11.0284 24.848 11.0284L21.8531 11.0458C21.8531 11.0458 21.632 11.0167 21.4676 11.1142C21.3546 11.1981 21.2646 11.3092 21.2058 11.4371C21.2058 11.4371 20.7287 12.6982 20.0975 13.7731C18.768 16.0335 18.2284 16.1585 18.0131 16.0175C17.5069 15.6873 17.632 14.6982 17.632 14C17.632 11.8007 17.9665 10.8916 16.9847 10.6545C16.6604 10.5745 16.4218 10.5236 15.5927 10.5164H15.5913Z"
                fill="#EFF3F5"
              />
            </svg>
          </a>
          <a href="/" className="footer__link">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.40372 0.096C11.1099 0.0174545 11.6539 0 16.0001 0C20.3463 0 20.8903 0.0189091 22.595 0.096C24.2997 0.173091 25.4634 0.445091 26.4815 0.839273C27.5477 1.24218 28.515 1.872 29.315 2.68655C30.1295 3.48509 30.7579 4.45091 31.1594 5.51855C31.555 6.53673 31.8255 7.70036 31.9041 9.40218C31.9826 11.1113 32.0001 11.6553 32.0001 16C32.0001 20.3462 31.9812 20.8902 31.9041 22.5964C31.827 24.2982 31.555 25.4618 31.1594 26.48C30.7579 27.5478 30.1285 28.5152 29.315 29.3149C28.515 30.1295 27.5477 30.7578 26.4815 31.1593C25.4634 31.5549 24.2997 31.8255 22.5979 31.904C20.8903 31.9825 20.3463 32 16.0001 32C11.6539 32 11.1099 31.9811 9.40372 31.904C7.7019 31.8269 6.53826 31.5549 5.52008 31.1593C4.45233 30.7578 3.48491 30.1284 2.68517 29.3149C1.87118 28.5159 1.24127 27.5489 0.839354 26.4815C0.445172 25.4633 0.174626 24.2996 0.096081 22.5978C0.0175356 20.8887 8.10623e-05 20.3447 8.10623e-05 16C8.10623e-05 11.6538 0.0189901 11.1098 0.096081 9.40509C0.173172 7.70036 0.445172 6.53673 0.839354 5.51855C1.24186 4.45103 1.87225 3.48409 2.68663 2.68509C3.48523 1.87127 4.45168 1.24137 5.51863 0.839273C6.53681 0.445091 7.70045 0.174545 9.40226 0.096H9.40372ZM22.4655 2.976C20.7783 2.89891 20.2721 2.88291 16.0001 2.88291C11.7281 2.88291 11.2219 2.89891 9.53463 2.976C7.9739 3.04727 7.12735 3.30764 6.56299 3.52727C5.81681 3.81818 5.28299 4.16291 4.72299 4.72291C4.19215 5.23935 3.78362 5.86805 3.52735 6.56291C3.30772 7.12727 3.04735 7.97382 2.97608 9.53455C2.89899 11.2218 2.88299 11.728 2.88299 16C2.88299 20.272 2.89899 20.7782 2.97608 22.4655C3.04735 24.0262 3.30772 24.8727 3.52735 25.4371C3.78335 26.1309 4.19208 26.7607 4.72299 27.2771C5.23935 27.808 5.86917 28.2167 6.56299 28.4727C7.12735 28.6924 7.9739 28.9527 9.53463 29.024C11.2219 29.1011 11.7266 29.1171 16.0001 29.1171C20.2735 29.1171 20.7783 29.1011 22.4655 29.024C24.0263 28.9527 24.8728 28.6924 25.4372 28.4727C26.1834 28.1818 26.7172 27.8371 27.2772 27.2771C27.8081 26.7607 28.2168 26.1309 28.4728 25.4371C28.6924 24.8727 28.9528 24.0262 29.0241 22.4655C29.1012 20.7782 29.1172 20.272 29.1172 16C29.1172 11.728 29.1012 11.2218 29.0241 9.53455C28.9528 7.97382 28.6924 7.12727 28.4728 6.56291C28.1819 5.81673 27.8372 5.28291 27.2772 4.72291C26.7607 4.1921 26.132 3.78358 25.4372 3.52727C24.8728 3.30764 24.0263 3.04727 22.4655 2.976ZM13.9564 20.9324C15.0978 21.4075 16.3686 21.4716 17.552 21.1138C18.7353 20.756 19.7577 19.9984 20.4446 18.9705C21.1315 17.9426 21.4402 16.7082 21.318 15.478C21.1958 14.2478 20.6503 13.0981 19.7746 12.2255C19.2164 11.6676 18.5415 11.2405 17.7984 10.9748C17.0553 10.7091 16.2625 10.6114 15.4772 10.6889C14.6918 10.7664 13.9334 11.017 13.2565 11.4227C12.5797 11.8285 12.0012 12.3793 11.5627 13.0354C11.1242 13.6916 10.8367 14.4368 10.7208 15.2174C10.6049 15.998 10.6636 16.7946 10.8925 17.5498C11.1214 18.3051 11.515 19.0002 12.0448 19.5851C12.5746 20.1699 13.2275 20.6301 13.9564 20.9324ZM10.1848 10.1847C10.9485 9.42105 11.8551 8.81528 12.8529 8.40198C13.8507 7.98868 14.9201 7.77596 16.0001 7.77596C17.0801 7.77596 18.1495 7.98868 19.1473 8.40198C20.1451 8.81528 21.0517 9.42105 21.8154 10.1847C22.579 10.9484 23.1848 11.855 23.5981 12.8528C24.0114 13.8506 24.2241 14.92 24.2241 16C24.2241 17.08 24.0114 18.1494 23.5981 19.1472C23.1848 20.145 22.579 21.0516 21.8154 21.8153C20.273 23.3576 18.1812 24.224 16.0001 24.224C13.8189 24.224 11.7271 23.3576 10.1848 21.8153C8.6425 20.273 7.77604 18.1812 7.77604 16C7.77604 13.8188 8.6425 11.727 10.1848 10.1847ZM26.0481 9.00073C26.2373 8.82221 26.3888 8.60754 26.4936 8.36942C26.5984 8.1313 26.6544 7.87457 26.6581 7.61444C26.6619 7.35431 26.6135 7.09607 26.5157 6.855C26.4179 6.61392 26.2727 6.39492 26.0888 6.21097C25.9048 6.02701 25.6858 5.88183 25.4447 5.78403C25.2037 5.68622 24.9454 5.63778 24.6853 5.64158C24.4251 5.64537 24.1684 5.70131 23.9303 5.8061C23.6922 5.91089 23.4775 6.06239 23.299 6.25164C22.9518 6.61968 22.7617 7.10854 22.7691 7.61444C22.7765 8.12035 22.9807 8.60346 23.3385 8.96123C23.6963 9.31899 24.1794 9.52324 24.6853 9.53062C25.1912 9.53799 25.68 9.34791 26.0481 9.00073Z"
                fill="#EFF3F5"
              />
            </svg>
          </a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
