import classes from "./footer.module.css"
import PersonalInfo from "../PersonalInfo/PersonalInfo"
const Footer = () => {
    return (
        <footer>
            <PersonalInfo title="Front-end" name="Lautaro Zambella" link="https://github.com/LautaroZambella"/>
            <p>Gracias por jugar!</p>
            <PersonalInfo title="Back-end" name="Javier Maita" link ="https://github.com/MaitaJv"/>
        </footer>
    )
}

export default Footer