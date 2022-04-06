import React from 'react'
import Head from 'next/head'

import MalteseHeader from '../components/maltese-header'

const Store = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Store - Bestja</title>
          <meta
            name="description"
            content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta property="og:title" content="Store - Bestja" />
          <meta
            property="og:description"
            content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1"
          />
        </Head>
        <MalteseHeader rootClassName="rootClassName1"></MalteseHeader>
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
            align-items: flex-start;
            margin-left: 0rem;
            margin-right: 0rem;
          }
          .form {
            width: 100%;
            height: 100%;
            padding-top: 3rem;
            padding-left: 3rem;
          }
          .text {
            font-size: 1.5rem;
          }
          .textinput {
            margin-left: 2rem;
            background-color: var(--dl-color-secondary-700);
          }
          .surname {
            margin-top: var(--dl-space-space-unit);
          }
          .text1 {
            font-size: 1.5rem;
          }
          .textinput1 {
            margin-left: 53px;
            background-color: var(--dl-color-secondary-700);
          }
          .email {
            margin-top: var(--dl-space-space-unit);
          }
          .text2 {
            font-size: 1.5rem;
          }
          .textinput2 {
            margin-left: 94px;
            background-color: var(--dl-color-secondary-700);
          }
          .button {
            margin-top: 3rem;
            margin-left: 10rem;
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
            .form {
              padding-top: 197px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Store
