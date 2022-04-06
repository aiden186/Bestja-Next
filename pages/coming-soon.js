import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'

const ComingSoon = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>ComingSoon - Bestja</title>
          <meta
            name="description"
            content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta property="og:title" content="ComingSoon - Bestja" />
          <meta
            property="og:description"
            content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1"
          />
        </Head>
        <Header></Header>
        <div className="container1">
          <div className="main">
            <div className="container2">
              <h1 className="text headingOne">You Work With</h1>
              <h1 className="text1">Soft Design System</h1>
              <p className="text2 lead">
                <span className="text3">
                  The time is now for it be okay to be great. Subscribe now and
                  get notified when it&apos;s launched!
                </span>
              </p>
              <div className="container3">
                <input
                  type="text"
                  placeholder="Email here"
                  className="textinput small input"
                />
                <SecondaryButton button="Subscribe"></SecondaryButton>
              </div>
            </div>
            <div className="grid">
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="image"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="image01"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="image02"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="image03"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="image04"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="image05"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="image06"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="image07"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="image08"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="image09"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="image10"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="image11"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="image12"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="image13"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="image14"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="image15"
              />
            </div>
          </div>
        </div>
        <FooterGray></FooterGray>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .main {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: flex-end;
          }
          .container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            z-index: 2;
            align-self: flex-end;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text1 {
            color: var(--dl-color-secondary-700);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .text3 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .container3 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .textinput {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .grid {
            top: -20%;
            left: -35%;
            width: 70%;
            display: grid;
            grid-gap: var(--dl-space-space-doubleunit);
            position: absolute;
            transform: rotate(20deg);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .image {
            width: 100%;
          }
          .image01 {
            width: 100%;
            margin-top: -200px;
          }
          .image02 {
            width: 100%;
            margin-top: -50px;
          }
          .image03 {
            width: 100%;
          }
          .image04 {
            width: 100%;
          }
          .image05 {
            width: 100%;
            margin-top: -200px;
          }
          .image06 {
            width: 100%;
            margin-top: -50px;
          }
          .image07 {
            width: 100%;
          }
          .image08 {
            width: 100%;
          }
          .image09 {
            width: 100%;
            margin-top: -200px;
          }
          .image10 {
            width: 100%;
            margin-top: -50px;
          }
          .image11 {
            width: 100%;
          }
          .image12 {
            width: 100%;
          }
          .image13 {
            width: 100%;
            margin-top: -200px;
          }
          .image14 {
            width: 100%;
          }
          .image15 {
            width: 100%;
          }
          @media (max-width: 991px) {
            .container1 {
              background-size: auto;
            }
            .main {
              justify-content: flex-start;
            }
            .container2 {
              width: 70%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-tripleunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-tripleunit);
            }
            .grid {
              top: 40%;
              left: auto;
              right: -6rem;
              bottom: -6rem;
            }
            .image {
              width: 120px;
            }
            .image01 {
              width: 120px;
            }
            .image02 {
              width: 120px;
            }
            .image03 {
              width: 120px;
            }
            .image04 {
              width: 120px;
            }
            .image05 {
              width: 120px;
            }
            .image06 {
              width: 120px;
            }
            .image07 {
              width: 120px;
            }
            .image08 {
              width: 120px;
            }
            .image09 {
              width: 120px;
            }
            .image10 {
              width: 120px;
            }
            .image11 {
              width: 120px;
            }
            .image12 {
              width: 120px;
            }
            .image13 {
              width: 120px;
            }
            .image14 {
              width: 120px;
              margin-top: -50px;
            }
            .image15 {
              width: 120px;
            }
          }
          @media (max-width: 767px) {
            .container2 {
              width: 100%;
            }
            .grid {
              right: 0;
            }
            .image {
              width: 100px;
            }
            .image01 {
              width: 100px;
            }
            .image02 {
              width: 100px;
            }
            .image03 {
              width: 100px;
            }
            .image04 {
              width: 100px;
            }
            .image05 {
              width: 100px;
            }
            .image06 {
              width: 100px;
            }
            .image07 {
              width: 100px;
            }
            .image08 {
              width: 100px;
            }
            .image09 {
              width: 100px;
            }
            .image10 {
              width: 100px;
            }
            .image11 {
              width: 100px;
            }
            .image12 {
              width: 100px;
            }
            .image13 {
              width: 100px;
            }
            .image14 {
              width: 100px;
            }
            .image15 {
              width: 100px;
            }
          }
          @media (max-width: 479px) {
            .container3 {
              flex-direction: column;
            }
            .textinput {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default ComingSoon
