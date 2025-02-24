import {Route, Router, Routes} from "react-router-dom";
import {store} from "./store/store.js";
import {Provider} from "react-redux";
import MainPage from "./pages/mainPage/MainPage.js";
import Layout from "./components/layout/Layout.jsx";
import SecondPage from "./pages/secondPage/SecondPage.js";
import ThirdPage from "./pages/thirdPage/ThirdPage.js";
import FourthPage from "./pages/fourthPage/FourthPage.js";
import FifthPage from "./pages/fifthPage/FifthPage.js";
import FirstPage from "./pages/firstPage/FirstPage.js";



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
