import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <h5 className="text headingThree">{props.title}</h5>
        <span className="text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            margin-top: var(--dl-space-space-triplequarterunit);
            align-items: center;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .image {
            height: 30px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .text {
            color: var(--dl-color-secondary-600);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .container {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  image_src: '0c545438-dccd-4f3c-8e7c-92d8d4113c1d',
  image_alt: 'image',
  text: 'Get the latest design ideas and turn it into reality.',
  title: 'Design',
}

FeatureCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard
