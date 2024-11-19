"use client";
import { LabelProps } from "./interfaces"
import './Label.scss'

const Label = ({children} : LabelProps) => {
    return(
        <span className="label">{children}</span>
    )
}

export default Label