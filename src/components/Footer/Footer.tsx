import Body from "../Body/Body"
import Button from "../Button"
import Heading from "../Heading/Heading"
import Icon from "../Icon/Icon"
import { icons } from "./config"
import { FooterProps } from "./interfaces"
import './Footer.scss'

const Footer = ({title, links, mainText, btnLabel, btnClick, email, address}: FooterProps) => {
    return (
        <div className="footer-wrapper">
            <div className="footer-header">
                <Heading className="title"  type='h4'>{title}</Heading>
                <div className="links">
                {Object.entries(links).map(([title, url]) => (
                        <a className="link-item" key={url} href={url}>{title}</a>
                    ))}
                </div>
            </div>    
            <div className="footer-main">
            <Heading className="footer-main-text"  type='h2'>{mainText}</Heading>
                <div>
                    <input type="email" />
                    <Button label={btnLabel} onClick={btnClick}/>
                </div>
            </div>
            <div className="footer-footer">
                <div className="contact">
                    <Body type={1}>{address}</Body>
                    <Body type={1}>{email}</Body>
                </div>
                <div className="icons">

                    {icons.map(item => <Icon fill='#6D6E76' name={item}/>)}
                </div>
            </div>
        </div>
    )
}

export default Footer