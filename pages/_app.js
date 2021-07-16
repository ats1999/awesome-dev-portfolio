import NavBar from "@components/layout/NavBar";
import "@styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
    return <NavBar>
        <Component {...pageProps} />
    </NavBar>
}
export default MyApp;