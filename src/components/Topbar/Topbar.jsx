import './Topbar.scss'
import { Mail, Person } from '@material-ui/icons'

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">tugay.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+90 555 555 55 55</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>admin@tugay.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
