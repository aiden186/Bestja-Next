import React from 'react'
import Link from 'next/link'

import PrimaryPinkButton from './primary-pink-button'

const HeaderFull = (props) => {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="container">
            <Link href="/">
              <a className="link large">Soft UI Design System</a>
            </Link>
            <div className="menu">
              <Link href="/">
                <a className="link1 large">Home</a>
              </Link>
              <Link href="/profile">
                <a className="link2 large">Profile</a>
              </Link>
              <Link href="/coming-soon">
                <a className="link3 large">Coming Soon</a>
              </Link>
            </div>
            <div className="container1">
              <div className="container2">
                <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
              </div>
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .header {
            width: 100%;
            height: 60px;
            display: flex;
            z-index: 3;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link {
            font-weight: 600;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link1 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .link1:hover {
            color: var(--dl-color-gray-500);
          }
          .link2 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .link2:hover {
            color: var(--dl-color-gray-500);
          }
          .link3 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .link3:hover {
            color: var(--dl-color-gray-500);
          }
          .container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon {
            width: 24px;
            height: 24px;
            display: none;
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .nav {
              max-width: 960px;
            }
            .link {
              color: var(--dl-color-secondary-700);
            }
            .menu {
              display: none;
            }
            .icon {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .container2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default HeaderFull
