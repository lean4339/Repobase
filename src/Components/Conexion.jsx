import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Conexion = () => {
    const openWhatsAppChat = () => {
        const phoneNumber = '+5491122514060';
        const message = 'Hola, quiero hablar contigo'; // Mensaje predeterminado
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
        window.open(whatsappURL, '_blank');
      };
    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/leandro-sebastian-ayala-/','_blank'); // Reemplaza con el enlace a tu perfil de LinkedIn
      };
    return (
        <>
        <div className="conexionContainerWhatsapp">
            <button onClick={openWhatsAppChat} className="guasa hover pointer"><WhatsAppIcon sx={{ fontSize: 30 }}/></button>
        </div>
        <div className="conexionContainerLinkedin">
            <button onClick={openLinkedin} className="linkedin hover pointer"><LinkedInIcon sx={{ fontSize: 30 }}/></button>
        </div>
        </>
    )
}