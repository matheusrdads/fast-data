import React from 'react'

function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
                Esse é seu sistema, ultilize a barra de navegação para acessas as páginas
            </p>
            <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
            </p>
        </div>
    )
}

export default Home;