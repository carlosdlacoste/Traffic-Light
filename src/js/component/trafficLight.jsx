import React from 'react';



const TrafficLight = () => {
    return(
        <>
            <div className="card bg-dark mx-auto" style={{ width: "12rem"}}>
                <div className="card-body d-flex flex-column align-items-center">
                    <div className="red">
                        red
                    </div>
                    <div className="yellow">
                        yellow
                    </div>
                    <div className="green">
                        green
                    </div>
                </div>
            </div>

            
        
        </>
    );
}

export default TrafficLight;