import React, { useState } from 'react';



const TrafficLight = () => {

    const [colorSelected, setColorSelected] = useState("red");

    const alternarColor = () => {
        if(colorSelected == "red") setColorSelected("green")
        if(colorSelected == "yellow")setColorSelected("red")
        if(colorSelected == "green") setColorSelected("yellow")
    }


    return(
        <>
            <div className="card bg-dark mx-auto" style={{ width: "1rem", height: "10rem"}}>
                
            </div>
            <div className="card bg-dark mx-auto" style={{ width: "12rem"}}>
                <div className="card-body d-flex flex-column align-items-center">
                    <div onClick={() => setColorSelected("red")} className={`red ${colorSelected == "red" ? "brillo" : " "}`}>
                        red
                    </div>
                    <div onClick={() => setColorSelected("yellow")} className={`yellow ${colorSelected == "yellow" ? "brillo" : " "}`}>
                        yellow
                    </div>
                    <div onClick={() => setColorSelected("green")} className={`green ${colorSelected == "green" ? "brillo" : " "}`}>
                        green
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <button type="button" onClick={alternarColor} className="btn btn-secondary btn-lg btn-dark">Alternar Color</button>
            </div>

            
        
        </>
    );
}

export default TrafficLight;