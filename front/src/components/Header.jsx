import Nav from "./Nav";

export default function Header(){
    return(
        <header>
            <div className="header-align-wrap">
                <div className="logo">
                    <a href="/" className="logo-text">Skye Music</a> 
                </div>
                <Nav/>
            </div>
        </header>
    )
}