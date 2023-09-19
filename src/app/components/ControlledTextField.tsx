"use client"
import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEventHandler, useState } from "react";

export default function ControlledTextField(props: TextFieldProps) {
    const [v, setV] = useState(props.defaultValue)
    
    const handleChange : ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setV(e.target.value)
    }

    return <TextField {...props} value={props.disabled ? props.defaultValue : v} onChange={handleChange}></TextField>
}