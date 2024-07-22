import { Element } from "react-scroll"

export const About = () => {
    return (
        <>
            <Element name='/about' />
            <main className='about-main-container' id="/about">
                <button className='button-principal hover pointer'>Conocenos</button>
                <div className="contenedor-flex-about">

                    <div className="about-text-container">
                        <a href="https://www.linkedin.com/in/daniela-delgado-/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <div className="perfilContinaerd">
                            </div>
                        </a>
                        <p>
                            Soy Daniela Delgado, Licenciada en Relaciones Laborales, especializada en la adquisición de talento en LATAM, USA y Europa.
                            He estado trabajando de manera independiente en diferentes consultoras. Realizando búsquedas en diferentes áreas. Utilizo procesos de selección eficientes y herramientas modernas de reclutamiento. Además, me dedico a asesorar sobre empleabilidad a quienes están en búsqueda laboral. Me considero una persona dinámica, empática, curiosa y emprendedora, con el deseo de crecer profesionalmente cada día.

                        </p>
                    </div>
                    <div className="about-text-container">
                        <a href="https://www.linkedin.com/in/jennifersofianu%C3%B1ez95/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                            <div className="perfilContinaerj">
                            </div>
                        </a>
                        <p>
                            Soy Jennifer Nuñez, actualmente cursando la Licenciatura en Relaciones del Trabajo. Me especializo en la adquisición de talento en USA, LATAM y Europa, y recientemente he trabajado de forma independiente con varias consultoras en diversas búsquedas. Soy una persona dinámica, enfocada en identificar y atraer talento excepcional. Utilizo procesos de selección eficientes y herramientas modernas de reclutamiento, y me comprometo a construir relaciones duraderas y colaborativas, garantizando una experiencia positiva durante todo el proceso de contratación.
                        </p>
                    </div>
                </div>

            </main>
        </>
    )
}