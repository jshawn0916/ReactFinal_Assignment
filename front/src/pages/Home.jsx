
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import List from "../components/List";
import Banner from "../components/Banner";

const Home = () => {
    return(
        <>
            <Banner/>
            <div className="content-align">
                <div className="container">
                    <div className="title-wrap">
                        <h2 className="sub-title">Musics</h2>
                        <NavLink to="/music" className="more-btn">More</NavLink>
                    </div>
                    <Card data={"home"}/>
                </div>
                <div className="container">
                    <div className="title-wrap">
                        <h2 className="sub-title">Play List</h2>
                        <NavLink to="/playlist" className="more-btn">More</NavLink>
                    </div>
                    <List data={"home"}/>
                </div>
            </div>
        </>
    )
}

export default Home;