import React, { Component } from "react";


const pagConstruction = require('../../assets/img/paginaEmConstrucao.png')

class Construction extends Component {

    render(){
        return(
            <div className='image-view container' >
                <div className='row 8'>
                    <h1>Página Em Construção!</h1>
                    <div className="col 4">
                        <img src={ pagConstruction } width="100%" height="100%" />
                    </div>
                </div>   

            </div>
        );
    }
}  export default Construction;