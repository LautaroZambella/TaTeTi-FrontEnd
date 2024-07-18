import classes from "./personalinfo.module.css"
import icon from "./assets/github_icon.png"

const PersonalInfo = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.name}</h3>
            <a href={props.link} target="_blank"><img src={icon} alt="Not image" /></a>
        </div>
    )
}

export default PersonalInfo