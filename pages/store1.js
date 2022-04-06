import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Store1 = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Store1 - Bestja</title>
          <meta
            name="description"
            content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta property="og:title" content="Store1 - Bestja" />
          <meta
            property="og:description"
            content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1"
          />
        </Head>
        <div className="container1">
          <form
            action="https://formsubmit.co/cachiaaiden@gmail.com"
            method="POST"
            className="form"
          >
            <div>
              <span className="text">
                First Name:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <input
                type="text"
                name="First Name"
                required="true"
                placeholder="George"
                className="textinput input"
              />
            </div>
            <div className="surname">
              <span className="text1">
                Surname:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <input
                type="text"
                name="Surname"
                required="true"
                placeholder="Borg"
                className="textinput1 input"
              />
            </div>
            <div className="email">
              <span className="text2">
                Email:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <input
                type="text"
                name="Email"
                required="true"
                placeholder="georgeborg@gmail.com"
                className="textinput2 input"
              />
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
        <div className="container2">
          <div className="container3">
            <Link href="/store">
              <a className="link">IXTRI</a>
            </Link>
          </div>
          <Link href="/">
            <a className="link1">
              <img
                alt="image"
                src="/playground_assets/asset%201%408x-1500w.png"
                className="image"
              />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #0e000f;
          }
          .container1 {
            width: 100%;
            height: 594px;
            display: flex;
            margin-top: 10rem;
            align-items: flex-start;
            margin-left: 0rem;
            margin-right: 0rem;
          }
          .form {
            width: 100%;
            height: 100%;
            margin-left: 3rem;
          }
          .text {
            font-size: 1.5rem;
          }
          .textinput {
            margin-left: 2rem;
          }
          .surname {
            margin-top: var(--dl-space-space-unit);
          }
          .text1 {
            font-size: 1.5rem;
          }
          .textinput1 {
            margin-left: 53px;
          }
          .email {
            margin-top: var(--dl-space-space-unit);
          }
          .text2 {
            font-size: 1.5rem;
          }
          .textinput2 {
            margin-left: 94px;
          }
          .button {
            margin-top: 3rem;
            margin-left: 10rem;
          }
          .container2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 133px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .container3 {
            width: 30%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .link {
            font-size: 2.5rem;
            font-style: normal;
            font-family: Oswald;
            font-weight: 500;
            text-decoration: none;
          }
          .link1 {
            display: contents;
          }
          .image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 50%;
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
          @media (max-width: 991px) {
            .container1 {
              align-items: stretch;
              justify-content: flex-start;
            }
          }
          @media (max-width: 767px) {
            .container1 {
              align-items: center;
              flex-direction: column;
            }
            .container2 {
              top: 0px;
              left: 0px;
              height: 20%;
              position: absolute;
              align-items: center;
              padding-top: 5rem;
            }
            .image {
              width: 100%;
              height: 70%;
            }
          }
          @media (max-width: 479px) {
            .container2 {
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

export default Store1
