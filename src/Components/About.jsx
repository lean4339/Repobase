import { Element } from "react-scroll"

export const About = () => {
    return (
        <>
        <Element name='/about'/>
        <main className='about-main-container' id="/about">
            <div className='about-content-container'>
            <button className='button-principal hover pointer'>Conocenos</button>
                <div className="about-text-container">

                <p>
                Después de trabajar en diversas agencias de reclutamiento, tanto en el mercado argentino como en otros países de LATAM, así como en USA y España, adquirimos un profundo conocimiento y entendimiento de las necesidades y dinámicas del mercado laboral internacional.
Durante este tiempo, descubrimos que lo que más nos apasionaba era la posibilidad de crear nuestra propia fuente de trabajo. Queríamos aportar nuestra visión y compromiso personal a cada proyecto, ofreciendo un servicio más cercano y personalizado. Así nació HR Innovate.
En HR Innovate, combinamos nuestra experiencia en búsquedas generalistas y especializadas en el área tecnológica para brindar asesoramiento laboral integral, servicios de empleabilidad y reclutamiento de alta calidad. 
¡Estamos felices de que nos elijas y confíes en nosotros para tu desarrollo profesional!
                </p>
                </div>
            </div>
        </main>
        </>
    )
}