"use client";


import { DisplayProps } from "./interfaces"
import './Display.scss'

const Display = ({children}: DisplayProps) => {
    return(
        <span className="display">
            {children}
        </span>
    )
}

export default Display