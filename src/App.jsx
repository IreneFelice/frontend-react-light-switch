import React from 'react';
import './App.css';

function App() {
    const [lightThing, setLight]= React.useState(false);
    if (!lightThing){
        console.log("uit")
    } else {console.log("aan")}

    if (lightThing){
    return (
            <main className="on">
                <section>
                <div className="dot"></div>
                <button type="button" onClick={() => setLight(false)}>Turn off</button>
                </section>
        </main>)}
    else { return (
        <main className="off">
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => setLight(true)}>Turn on</button>
            </section>
        </main> ) }
    }



export default App;
