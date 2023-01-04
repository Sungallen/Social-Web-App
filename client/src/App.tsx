import React from 'react'
import { Provider } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import 'App.css'
import AppRoutes from 'routes'
import { history, store } from 'store/store'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <Router history={history}> */}
        <AppRoutes />
        {/* </Router> */}
      </Provider>
    </QueryClientProvider>
  </>
)

export default App
