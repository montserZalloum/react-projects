import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp



// import App from 'next/app'
// import AdminLayout from '../layout/AdminLayout'
// import '../styles/globals.css'


// class MyApp extends App {
//   render() {
//     const { Component, pageProps, router } = this.props
//     const Layout = Component.layout || AdminLayout

//     return (
//       <Layout>
//         <Component {...pageProps} />
//         {/* <Loader />
//         <Snackbar /> */}
//       </Layout>
//     )
//   }
// }

// export default MyApp
