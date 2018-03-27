import React from 'react'
import { themr } from 'react-css-themr'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const applyThemr = themr('UIGrid')

const classnames = ({
  theme,
  flex,
  stretch,
  alignCenter,
  className,
  hidden,
  alignEnd,
  noPadding,
}) =>
  classNames(
    className,
    theme.row,
    {
      [theme.flex]: flex,
      [theme.stretch]: stretch,
      [theme.alignCenter]: alignCenter,
      [theme.alignEnd]: alignEnd,
      [theme.hidden]: hidden,
      [theme.noPadding]: noPadding,
    }
  )

const Row = ({
  theme,
  children,
  flex,
  stretch,
  alignCenter,
  className,
  hidden,
  alignEnd,
  noPadding,
}) => (
  <div
    className={
      classnames({
        theme,
        flex,
        stretch,
        alignCenter,
        className,
        hidden,
        alignEnd,
        noPadding,
      })
    }
  >
    {children}
  </div>
)

Row.propTypes = {
  theme: PropTypes.shape({
    row: PropTypes.string,
    flex: PropTypes.string,
    stretch: PropTypes.string,
    hidden: PropTypes.string,
  }).isRequired,
  alignEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  children: PropTypes.node,
  flex: PropTypes.bool,
  stretch: PropTypes.bool,
  hidden: PropTypes.bool,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
}

Row.defaultProps = {
  alignEnd: false,
  alignCenter: false,
  children: null,
  flex: false,
  stretch: false,
  hidden: false,
  className: null,
  noPadding: null,
}

export default applyThemr(Row)
