import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Bestja</title>
          <meta
            name="description"
            content="Bestja, il-logÄ§ba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta property="og:title" content="Bestja" />
          <meta
            property="og:description"
            content="Bestja, il-logÄ§ba tal-karti fuq il-monstri tal-folklore Malti."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/613ab288-23ba-40a8-a8bb-57e197747679?org_if_sml=1"
          />
        </Head>
        <Header rootClassName="rootClassName"></Header>
        <div className="hero">
          <div className="container01">
            <div className="card">
              <h1 className="text headingOne">Bestja</h1>
              <h1 className="text01 headingOne">LogÄ§ba tal-Bestji Maltin</h1>
              <span className="text02 lead">
                <span>
                  Find the story of Creative Tim&apos;s most complex design
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  system and all the work that make this design available.
                </span>
              </span>
              <div className="container02">
                <div className="container03">
                  <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
                </div>
                <OutlineGrayButton button="read more"></OutlineGrayButton>
              </div>
              <div className="container04">
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                  className="image"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                  className="image01"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                  className="image02"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                  className="image03"
                />
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/269697193_599788941318764_8587154989465359757_n1-1500h.png"
              className="image04 image1"
            />
          </div>
        </div>
        <section className="features">
          <FeatureCard
            text="Choose the best design system for your next product."
            title="Components"
            image_src="/playground_assets/cube1.svg"
          ></FeatureCard>
          <FeatureCard image_src="/playground_assets/person1.svg"></FeatureCard>
          <FeatureCard
            text="Make your code easier to maintain using variables."
            title="Less Code"
            image_src="/playground_assets/rocket1.svg"
          ></FeatureCard>
          <FeatureCard
            text="This design system is fully supported on any device."
            title="Fully Responsive"
            image_src="/playground_assets/credit%20card1.svg"
          ></FeatureCard>
        </section>
        <section className="container05">
          <div className="container06">
            <h1 className="text05 headingOne">
              <span className="text06">From nothing to something</span>
            </h1>
            <span className="text07">
              <span className="text08">
                The highest status people in human history are those that asked
                for nothing and gave everything
              </span>
            </span>
          </div>
          <div className="container07">
            <div className="container08">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
                className="image05"
              />
              <span className="text09 small">
                <span className="text10">
                  &quot;Over the span of the satellite record, Arctic sea ice
                  has been declining significantly, while sea ice in the
                  Antarctichas increased very slightly&quot;
                </span>
                <br></br>
                <span className="text12">-NOAA</span>
              </span>
              <div className="container09">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                  className="image06"
                />
              </div>
            </div>
            <div className="container10">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
                className="image07"
              />
              <div className="container11">
                <h3 className="headingTwo">
                  <span className="text14">
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </span>
                </h3>
                <p>
                  <br></br>
                  <span className="text16">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, thereâs huge variety of the state of the
                    ice.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="text19">
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="text22">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, thereâs huge variety of the state of the
                    ice.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container12">
            <div className="container13">
              <div className="container14">
                <h2 className="text23 headingOne">Work with us</h2>
                <p className="text24 lead">
                  <span className="text25">
                    Whatever your qualification is - we got you!
                  </span>
                </p>
                <p className="text26 body">
                  <span className="text27">
                    &quot;Take up one idea. Make that one idea your life - think
                    of it, dream of it, live on that idea. Let the brain,
                    muscles, nerves, every part of your body, be full of that
                    idea, and just leave every other idea alone. This is the way
                    to success. A single rose can be my garden... a single
                    friend, my world.&quot;
                  </span>
                </p>
                <p className="text28">Mark Jojansen</p>
                <p className="text29 small">Project manager, Atlassian</p>
                <div className="container15">
                  <img
                    alt="image"
                    src="/playground_assets/team-4-200h.jpg"
                    className="image08"
                  />
                  <div className="container16"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-3-200h.jpg"
                    className="image09"
                  />
                  <div className="container17"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-2-200h.jpg"
                    className="image10"
                  />
                </div>
              </div>
            </div>
            <div className="logos">
              <div className="container18">
                <div className="container19">
                  <div className="container20">
                    <img
                      alt="image"
                      src="/playground_assets/logo-asana.svg"
                      className="image11"
                    />
                  </div>
                  <div className="container21">
                    <img
                      alt="image"
                      src="/playground_assets/logo-slack.svg"
                      className="image12"
                    />
                  </div>
                  <div className="container22">
                    <img
                      alt="image"
                      src="/playground_assets/logo-google-drive.svg"
                      className="image13"
                    />
                  </div>
                </div>
                <div className="container23">
                  <div className="container24">
                    <img
                      alt="image"
                      src="/playground_assets/logo-shopify.svg"
                      className="image14"
                    />
                  </div>
                  <div className="container25">
                    <img
                      alt="image"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                      className="image15"
                    />
                  </div>
                  <div className="container26">
                    <img
                      alt="image"
                      src="/playground_assets/logo-invision.svg"
                      className="image16"
                    />
                  </div>
                </div>
                <div className="container27">
                  <div className="container28">
                    <img
                      alt="image"
                      src="/playground_assets/logo-attlasian.svg"
                      className="image17"
                    />
                  </div>
                  <div className="container29">
                    <img
                      alt="image"
                      src="/playground_assets/logo-weave.svg"
                      className="image18"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/bottom.svg"
            className="bottom-wave-image"
          />
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="image19"
          />
          <img
            alt="image"
            src="/playground_assets/top.svg"
            className="top-wave-image"
          />
        </section>
        <section className="contaier">
          <div className="container30">
            <div className="container31">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="text30 headingTwo">
              <span className="text31">Beware The Components</span>
            </h2>
            <h3 className="text32 headingTwo">
              <span className="text33">How To Handle Them</span>
              <br></br>
            </h3>
            <span className="text34">
              <span className="text35">
                Weâre constantly trying to express ourselves and actualize our
                dreams. Don&apos;t stop.
              </span>
            </span>
          </div>
          <div className="container32">
            <div className="container33">
              <div className="container34"></div>
              <div className="container35">
                <svg viewBox="0 0 987.4285714285713 1024" className="icon2">
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="text36 headingOne">Search and Discover!</h1>
                <span className="text37">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
            <div className="container36">
              <ListItem></ListItem>
              <ListItem
                title="2. Performance Analyze"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. Social Conversions"
                description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
              ></ListItem>
            </div>
          </div>
          <div className="divider"></div>
          <div className="container37">
            <div className="container38">
              <ListItem
                title="1. Always in Sync"
                description="No matter where you are, Trello stays in sync across all of your devices."
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                description="Integrate the apps your team already uses directly into your workflow."
              ></ListItem>
            </div>
            <div className="container39">
              <div className="container40"></div>
              <div className="container41">
                <svg viewBox="0 0 1152 1024" className="icon4">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="text40 headingOne">Talk and Meet!</h1>
                <span className="text41">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
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
          }
          .hero {
            width: 100%;
            display: flex;
            max-width: 100%;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
            background-color: #0f0112;
          }
          .container01 {
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            max-width: 100%;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .card {
            flex: 0 0 auto;
            width: 760px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            align-self: flex-start;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: 0%;
            margin-right: 0%;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(90, 4, 162, 0.5);
          }
          .text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text01 {
            color: var(--dl-color-primary-100);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .text02 {
            color: var(--dl-color-primary-100);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .container02 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .container03 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            width: 25%;
            object-fit: cover;
          }
          .image01 {
            width: 25%;
            object-fit: cover;
          }
          .image02 {
            width: 25%;
            object-fit: cover;
          }
          .image03 {
            width: 25%;
            object-fit: cover;
          }
          .image04 {
            border-width: 0px;
          }
          .features {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container06 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .text05 {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text06 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .text07 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text08 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .container08 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .image05 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .text09 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            flex-direction: column;
          }
          .text10 {
            color: rgb(203, 12, 159);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text12 {
            color: rgb(203, 12, 159);
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .container09 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .image06 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container10 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .image07 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container11 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .text14 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text16 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text19 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text22 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .container13 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .container14 {
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text23 {
            color: var(--dl-color-gray-white);
          }
          .text24 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text25 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .text26 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text27 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .text28 {
            color: var(--dl-color-gray-white);
          }
          .text29 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
          }
          .container15 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .image08 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .image08:hover {
            transform: scale(1.2);
          }
          .container16 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .image09 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .image09:hover {
            transform: scale(1.2);
          }
          .container17 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .image10 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .image10:hover {
            transform: scale(1.2);
          }
          .logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container18 {
            flex: 0 0 auto;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .container20 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image11 {
            width: 100%;
          }
          .container21 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image12 {
            width: 100%;
          }
          .container22 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image13 {
            width: 100%;
          }
          .container23 {
            flex: 0 0 auto;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .container24 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image14 {
            width: 100%;
            object-fit: cover;
          }
          .container25 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image15 {
            width: 100%;
          }
          .container26 {
            width: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image16 {
            width: 100%;
          }
          .container27 {
            flex: 0 0 auto;
            width: 50%;
            height: 70px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container28 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image17 {
            width: 100%;
          }
          .container29 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image18 {
            width: 100%;
            object-fit: cover;
          }
          .bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .image19 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container30 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container31 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .text30 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text31 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .text32 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text33 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text35 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container32 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container33 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .container33:hover {
            transform: scale(1.04);
          }
          .container34 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .container35 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .icon2 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text36 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text37 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container36 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .container37 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container38 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .container39 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .container39:hover {
            transform: scale(1.04);
          }
          .container40 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .container41 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .icon4 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text40 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text41 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .container01 {
              max-width: 960px;
            }
            .card {
              width: 100%;
            }
            .features {
              max-width: 960px;
            }
            .container05 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container06 {
              max-width: 80%;
            }
            .text07 {
              text-align: center;
            }
            .text09 {
              width: 50%;
            }
            .container12 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .container13 {
              align-items: center;
            }
            .container14 {
              margin-right: 0px;
            }
            .logos {
              display: none;
            }
            .contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container36 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .container38 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .card {
              align-items: center;
            }
            .text02 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .image {
              width: 40%;
            }
            .image01 {
              width: 40%;
            }
            .image02 {
              width: 40%;
            }
            .image03 {
              width: 40%;
            }
            .features {
              max-width: 720px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unitandahalfunit);
              padding-right: var(--dl-space-space-unitandahalfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .container05 {
              max-width: 720px;
            }
            .container07 {
              align-items: center;
              flex-direction: column;
            }
            .container08 {
              width: 80%;
            }
            .image05 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .text09 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .image06 {
              display: none;
            }
            .container10 {
              width: 80%;
            }
            .image07 {
              display: none;
            }
            .container12 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .container30 {
              width: 80%;
            }
            .text34 {
              text-align: center;
            }
            .container32 {
              flex-direction: column;
            }
            .container36 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container37 {
              margin-top: 0px;
              flex-direction: column;
            }
            .container38 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .card {
              padding: var(--dl-space-space-unit);
            }
            .container02 {
              align-items: center;
              flex-direction: column;
            }
            .container03 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .features {
              width: 100%;
            }
            .container12 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .text34 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
