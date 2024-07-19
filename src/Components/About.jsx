import { Element } from "react-scroll"

export const About = () => {
    return (
        <>
            <Element name='/about' />
            <main className='about-main-container' id="/about">
                    <button className='button-principal hover pointer'>Conocenos</button>
                    <div className="contenedor-flex-about">

                    <div className="about-text-container">
                        <div className="perfilContinaerd">
                        </div>
                        <p>
                        Soy Daniela Delgado, Licenciada en Relaciones Laborales, especializada en la adquisición de talento en LATAM, USA y Europa. 
He trabajado de manera independiente en diversas agencias, reclutando perfiles variados. Además, me dedico a asesorar sobre empleabilidad a quienes están en búsqueda laboral.
Me considero una persona dinámica, empática, curiosa y emprendedora, con el constante sueño de crecer profesionalmente cada día.
                        </p>
                    </div>
                    <div className="about-text-container">
                        <div className="perfilContinaerj">
                        </div>
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