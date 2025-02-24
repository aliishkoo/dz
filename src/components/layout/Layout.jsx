import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header style={{ padding: "10px", background: "#eee" }}>
                <nav>
                    <Link to="/">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                    <Link to="/page4">Page 4</Link>
                    <Link to="/page5">Page 5</Link>
                </nav>
            </header>
            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;