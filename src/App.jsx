import {Route, Router, Routes} from "react-router-dom";
import {store} from "./store/store.js";
import {Provider} from "react-redux";
import MainPage from "./pages/mainPage/MainPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import SecondPage from "./pages/secondPage/SecondPage.jsx";
import ThirdPage from "./pages/thirdPage/ThirdPage.jsx";
import FourthPage from "./pages/fourthPage/FourthPage.jsx";
import FifthPage from "./pages/fifthPage/FifthPage.jsx";
import FirstPage from "./pages/firstPage/FirstPage.jsx";



const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="page1" element={<FirstPage />} />
                    <Route path="page2" element={<SecondPage />} />
                    <Route path="page3" element={<ThirdPage />} />
                    <Route path="page4" element={<FourthPage />} />
                    <Route path="page5" element={<FifthPage />} />
                </Route>
            </Routes>
        </Router>
    </Provider>
);


export default App;
