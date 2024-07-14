import { Element } from "react-scroll"

export const About = () => {
    return (
        <>
        <Element name='/about'/>
        <main className='about-main-container' id="/about">
            <div className='about-content-container'>
                <h1 className="titulo-main-about">Sobre nosotras</h1>
                <div className="about-text-container">

                <p>
                Somos Laura y Ana, dos reclutadoras apasionadas dedicadas a ayudarte a encontrar tu trabajo ideal y a asistir a las empresas en la búsqueda del talento perfecto.

Laura tiene un don para identificar a los candidatos excepcionales, gracias a su formación en psicología. Le encanta conectar con las personas y emparejarlas con oportunidades donde puedan brillar.

Ana aporta una vasta experiencia en recursos humanos y reclutamiento corporativo. Con su enfoque estratégico y atención a los detalles, asegura que tanto candidatos como empresas vivan una experiencia de reclutamiento fluida y gratificante.

    </p>
<p>
    Nuestra misión es simple: hacer del reclutamiento un proceso agradable y efectivo. Ya seas un candidato buscando tu próxima gran oportunidad o una empresa en busca de talento excepcional, estamos aquí para ayudarte a lograrlo.

Ofrecemos servicios personalizados de revisión de currículums, coaching para entrevistas, búsqueda de talento y selección de candidatos. Nos enorgullecemos de nuestro profesionalismo y dedicación a la excelencia, asegurando que cada colocación sea el ajuste perfecto.

Conéctate con nosotras hoy y descubre cómo podemos ayudarte en tu carrera o en la búsqueda del talento ideal para tu empresa.
                </p>
                </div>
            </div>
        </main>
        </>
    )
}