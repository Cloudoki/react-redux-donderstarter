
import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store'
import I18nProvider from 'components/Localization'

import ErrorMonitor from 'components/ErrorMonitor'
import App from 'containers/App'

// Main Application Styles
import 'styles/app.scss'

function render (Component: any) {
  ReactDOM.render(
    <ErrorMonitor>
      <I18nProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Route path='/' component={Component} />
          </ConnectedRouter>
        </Provider>
      </I18nProvider>
    </ErrorMonitor>,
    document.getElementById('root')
  )
}

render(App)

// Enable HMR for js files
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    render(NextApp)
  })
}
