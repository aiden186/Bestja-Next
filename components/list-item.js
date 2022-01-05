import React from 'react'

import PropTypes from 'prop-types'

const ListItem = (props) => {
  return (
    <>
      <div className="container">
        <h5 className="text headingThree">{props.title}</h5>
        <span>{props.description}</span>
      </div>
      <style jsx>
        {`
          .container {
            flex: 0 0 auto;
            display: flex;
            padding: 1rem;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ListItem.defaultProps = {
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
  title: '1. Listen to Social Conversations',
}

ListItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default ListItem
