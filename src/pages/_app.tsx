import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} style={{ margin: 0, backgroundColor: '#F9F9F9' }} />
      </Provider>
  )
}

export default MyApp
