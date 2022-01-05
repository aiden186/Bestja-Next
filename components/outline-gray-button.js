import React from 'react'

import PropTypes from 'prop-types'

const OutlineGrayButton = (props) => {
  return (
    <>
      <div className="container">
        <button className="button buttonSmall">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            color: var(--dl-color-secondary-200);
            outlinr: none;
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-color: var(--dl-color-secondary-200);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineGrayButton.defaultProps = {
  button: 'Button',
}

OutlineGrayButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineGrayButton
