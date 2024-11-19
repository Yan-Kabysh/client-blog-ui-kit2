"use client";
import './Body.scss'
import { BodyProps } from "./interfaces"

const Body = ({children, type = 1, className = ''}: BodyProps) => {
    return(
        <span className={`body${type} ${className}`}>
            {children}
        </span>
    )
}

export default Body