import { Outlet } from "react-router-dom";

function Index() {

    return (<div id="admin-panel">
        <div className="topbar">
            topbar
        </div>

        <div className="main">
            <div className="sidebar">
                sidebar
            </div>
            <div className="content">
                <Outlet />

            </div>
        </div>

    </div>)
}

export default Index;