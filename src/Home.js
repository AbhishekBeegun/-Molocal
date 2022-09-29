import React from "react";
import videobg from '../src/assets/videomau.mp4'
function Home (){
    return (
        <div className="Home">
            <section className="header">
                <div className="VIDEOBG">
                    <video src={videobg} autoPlay loop muted/>
                    <p>
                    Explore Mauritius</p>
                </div>
            </section>

            <section className="Body">
                <div className="gridcontainer">
                    <div className="griditem-pl"><a href="/pl"><p>Port louis</p></a></div>
                    <div className="griditem-svn"><a href="/svn"><p>Savanne</p></a></div>
                    <div className="griditem-pw"><a href="/pw"><p>Plaine Wilhems</p></a></div>
                    <div className="griditem-moka"><a href="/moka"><p>Moka</p></a></div>
                    <div className="griditem-br"><a href="/br"><p>Black River</p></a></div>
                    <div className="griditem-pample"><a href="/pample"><p>Pamplemousse</p></a></div>
                    <div className="griditem-flq"><a href="flq"><p>Flacq</p></a></div>
                    <div className="griditem-gp"><a href="gp"><p>Grand port</p></a></div>
                    <div className="griditem-rdr"><a href="rdr"><p>Riv Du Rempart</p></a></div>
                </div>
            </section>

            <section className="footer">
            </section>
        </div>

    );
}

export default Home 