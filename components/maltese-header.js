import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const MalteseHeader = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <Link href="/">
          <a className="link">
            <img
              alt="image"
              src="/playground_assets/asset%201%408x-1100w.png"
              className="image"
            />
          </a>
        </Link>
        <div className="container1">
          <Link href="/store">
            <a className="link1">IXTRI</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 133px;
            display: flex;
            position: relative;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .link {
            display: contents;
          }
          .image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 30%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            align-self: flex-start;
            margin-top: 2%;
            object-fit: contain;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2%;
            text-decoration: none;
          }
          .container1 {
            width: 30%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .link1 {
            font-size: 2.5rem;
            font-style: normal;
            font-family: Oswald;
            font-weight: 500;
            text-decoration: none;
          }
          .rootClassName {
            top: 0px;
            left: 0px;
            position: absolute;
          }

          @media (max-width: 767px) {
            .container {
              top: 0px;
              left: 0px;
              height: 20%;
              position: absolute;
              align-items: center;
              padding-top: 5rem;
              flex-direction: row;
              justify-content: flex-end;
            }
            .image {
              top: 22px;
              left: 1px;
              right: 0px;
              width: 266px;
              bottom: -3px;
              height: 91px;
              padding-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .container {
              height: 20%;
            }
            .image {
              width: 70%;
              height: 70%;
            }
          }
        `}
      </style>
    </>
  )
}

MalteseHeader.defaultProps = {
  rootClassName: '',
}

MalteseHeader.propTypes = {
  rootClassName: PropTypes.string,
}

export default MalteseHeader
