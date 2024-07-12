import { Element } from "react-scroll"

export const Main = () => {
    return (
        <>
        <Element name='/main'/>
        <main className='main-container' id="/main">
            <div className='content-container'>
                <h3 className="subtitulo-main">Estás a un paso</h3>
                <h1 className="titulo-main">De tu próximo trabajo</h1>
                <button className='button-principal  pointer'>Conocenos!</button>
            </div>
        </main>
        </>
    )
}