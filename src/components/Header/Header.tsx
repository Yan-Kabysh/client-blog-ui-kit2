"use client";
import Button from "../Button"
import Heading from "../Heading/Heading"
import { HeaderProps } from "./interfaces"
import './Header.scss'

const Header = ({title, links, btnLabel, btnClick}: HeaderProps) => {
    return(
        <div className="header-wrapper">
            <Heading className="title"  type='h4'>{title}</Heading>
            <div className="links">
            {Object.entries(links).map(([title, url]) => (
                     <a className="link-item" key={url} href={url}>{title}</a>
                ))}
                <Button variant="secondary" label={btnLabel} onClick={btnClick}/>
            </div>
        </div>
    )
}

export default Header