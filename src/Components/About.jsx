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
                        Soy Jennifer Nuñez, actualmente cursando la Licenciatura en Relaciones del Trabajo. Me especializo en la adquisición de talento en USA, LATAM y Europa, y recientemente he trabajado de forma independiente con varias consultoras en diversas búsquedas. Soy una persona dinámica, enfocada en identificar y atraer talento excepcional. Utilizo procesos de selección eficientes y herramientas modernas de reclutamiento, y me comprometo a construir relaciones duraderas y colaborativas, garantizando una experiencia positiva durante todo el proceso de contratación.
                        </p>
                    </div>
                </div>

            </main>
        </>
    )
}