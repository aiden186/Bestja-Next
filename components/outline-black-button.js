import React from 'react'

import PropTypes from 'prop-types'

const OutlineBlackButton = (props) => {
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
            color: var(--dl-color-secondary-700);
            cursor: pointer;
            outline: none;
            min-width: 150px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-triplequarterunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius75);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .button:hover {
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineBlackButton.defaultProps = {
  button: 'Button',
}

OutlineBlackButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineBlackButton
