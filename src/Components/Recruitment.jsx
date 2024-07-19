import { Element } from "react-scroll"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
export const Recruitment = () => {
    return (
        <>
        <Element name='/recruitment'/>
        <main className='about-main-container' id="/recruitment">
        <h1 className="services-titulo-main">Reclutamiento</h1>
            <div className="services">
                <div className="service recruitmen-container">
                    <div className="cabeceraService">
                        <GroupAddIcon sx={{ fontSize: 50 }} className="iconoService"/>
                    </div>
                    <h2 className="service-title">Buscamos los mejores candidatos</h2>
                    <p className="service-description">
                    Nos especializamos en conectar a las mejores empresas con los talentos más adecuados, abarcando una amplia gama de sectores y especialidades. Asegurando que cada candidato no solo cumpla con los requisitos técnicos, sino que también se alinee con la cultura y los valores de tu organización. Con nuestro enfoque personalizado y experiencia en el sector, garantizamos un proceso de reclutamiento eficiente y exitoso.
            </p>
            </div>
            </div>
        </main>
        </>
    )
}