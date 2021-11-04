import React from 'react';
import { useParams } from 'react-router';


const Data = () => {
    const{id,color1,color2} = useParams()

    return (
        <div>
        
            {
            (() => {
                if (isNaN(id))
                    return <h1 style = {{color:color1, backgroundColor:color2}}>The Word is:{id}</h1>
                else
                    return <h1 >The number is: {id}</h1>
            })()
        }
        </div>
    );
};



export default Data;