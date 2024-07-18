import { Element } from "react-scroll";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Services = () => {
    return (
        <>
            
        <Element name='/services'/>
        <main className='service-container' id="/services">
                <h1 className="services-titulo-main">Asesorias</h1>
            <div className="services">
                <div className="service">
                    <div className="cabeceraService">
                        <FileCopyOutlinedIcon sx={{ fontSize: 50 }} className="iconoService"/>
                    </div>
                    <h2 className="service-title">Armado de CV :</h2>
                    <p className="service-description"> Luego de recolectar la información necesaria, realizamos la optimización o armado desde cero del currículum

            </p>
            </div>
            <div className="service">
                    <div className="cabeceraService">
                        <FileCopyOutlinedIcon sx={{ fontSize: 50 }} className="iconoService"/>
                    </div>
                    <h2 className="service-title">Revision de CV :</h2>
                    <p className="service-description"> Evaluación de CV junto con la elaboración de un informe donde se establecen las mejoras

            </p>
            </div>
            <div className="service">
                <div className="cabeceraService">
                    <LinkedInIcon sx={{ fontSize: 50 }} className="iconoService"/>  
                </div>
                    <h2 className="service-title">Armado de LinkedIn : </h2>
                    <p className="service-description">Luego de  recolectar la información necesaria, realizamos la optimización o armado desde cero del perfil en LinkedIn

            </p>
            </div>
            <div className="service">
                <div className="cabeceraService">
                    <LinkedInIcon sx={{ fontSize: 50 }} className="iconoService"/>  
                </div>
                    <h2 className="service-title">Revisión de LinkedIn :</h2>
                    <p className="service-description">Evaluación del perfil en LinkedIn junto con la elaboración de un informe donde se establecen las mejoras

            </p>
            </div>
            </div>
        </main>
        </>
    )
}