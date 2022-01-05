import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="container1">
            <span className="text">SOFT</span>
            <span>Copyright Â© 2021 Soft by Creative Tim.</span>
          </div>
          <div className="container2">
            <div className="container3">
              <span className="text02 large">Company</span>
              <span className="text03 large">About Us</span>
              <span className="text04 large">Careers</span>
              <span className="text05 large">Press</span>
            </div>
            <div className="container4">
              <span className="text06 large">Pages</span>
              <span className="text07 large">Login</span>
              <span className="text08 large">Register</span>
              <span className="text09 large">About</span>
            </div>
            <div className="container5">
              <span className="text10 large">Products</span>
              <span className="text11 large">Free</span>
              <span className="text12 large">PRO</span>
              <span className="text13 large">Latest</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="image"
        />
      </footer>
      <style jsx>
        {`
          .footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .container2 {
            display: flex;
            justify-content: space-between;
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text02 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text03 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text03:hover {
            color: var(--dl-color-gray-white);
          }
          .text04 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text04:hover {
            color: var(--dl-color-gray-white);
          }
          .text05 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text05:hover {
            color: var(--dl-color-gray-white);
          }
          .container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .text06 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text07 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text07:hover {
            color: var(--dl-color-gray-white);
          }
          .text08 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text08:hover {
            color: var(--dl-color-gray-white);
          }
          .text09 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text09:hover {
            color: var(--dl-color-gray-white);
          }
          .container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .text10 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text11 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text11:hover {
            color: var(--dl-color-gray-white);
          }
          .text12 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text12:hover {
            color: var(--dl-color-gray-white);
          }
          .text13 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text13:hover {
            color: var(--dl-color-gray-white);
          }
          .image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .container {
              flex-direction: column;
            }
            .container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container4 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .container5 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
