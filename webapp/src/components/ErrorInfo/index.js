import React from 'react'
import { themr } from 'react-css-themr'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Row } from '../Grid'
import isBigScreen from '../../utils/isBigScreen'

const applyThemr = themr('UIErrorInfo')

const ErrorInfo = ({ theme }) => (
  <div className={
    classNames(
      theme.alignSelfCenter,
      {
        [theme.mediumSize]: isBigScreen,
      },
    )
  }
  >
    <Row className={theme.title}>
      <h4 className={
        classNames(
          {
            [theme.textAligned]: !isBigScreen,
          },
          theme.error,
        )}
      >
        Seu pagamento foi recusado
      </h4>
      <p className={
        classNames(
          {
            [theme.textAligned]: !isBigScreen,
          },
          theme.info,
        )}
      >
        Ocorreu um erro ao processar sua transação,
        tente novamente mais tarde ou entre em contato com seu banco.
      </p>
    </Row>
  </div>
)

ErrorInfo.propTypes = {
  theme: PropTypes.shape({
    alignSelfCenter: PropTypes.string,
    textAligned: PropTypes.string,
    mediumSize: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
  }),
}

ErrorInfo.defaultProps = {
  theme: {},
}

export default applyThemr(ErrorInfo)
