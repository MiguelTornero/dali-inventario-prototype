'use client'

import { Button, FormControlLabel, Grid, Switch } from "@mui/material"
import ControlledTextField from "./ControlledTextField"
import { Item } from "@prisma/client"
import { useState } from "react"
import QRCode from "react-qr-code"
import { editItem } from "../actions"
import { PlainItem } from "../db"

type ItemPageFormProps = {
    itemData: PlainItem
}

const handleAction = async(formData: FormData) => {
    console.log(formData)
    const res = await editItem(formData)
}

export default function ItemPageForm({itemData}:ItemPageFormProps) {
    const [disabled, setDisabled] = useState(true)
    const handleChange = (_: any, checked: boolean) => {
        setDisabled(!checked)
    }
    return <>
    <FormControlLabel label="Editar" control={<Switch value={disabled} onChange={handleChange}/>}></FormControlLabel>
    <form action={handleAction}>
    <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
            <ControlledTextField name="name" fullWidth disabled={disabled} label={"Nombre"} defaultValue={itemData.name}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <ControlledTextField name="brand" fullWidth disabled={disabled} label={"Marca"} defaultValue={itemData.brand}></ControlledTextField>
        </Grid>
        <Grid item xs={12} md={12}>
            <ControlledTextField name="description" fullWidth disabled={disabled} label={"Descripcion"} defaultValue={itemData.description}></ControlledTextField>
        </Grid>
        <Grid item xs={12} md={12}>
            <ControlledTextField name="ref" fullWidth disabled={disabled} label={"Referencia"} defaultValue={itemData.ref}></ControlledTextField>
        </Grid>
        <Grid item xs={12} md={6}>
            <ControlledTextField name="quantity" type="numeric" fullWidth disabled={disabled} label={"Cantidad"} defaultValue={itemData.quantity}></ControlledTextField>
        </Grid>
        <Grid item xs={12} md={6}>
            <ControlledTextField name="lastCost" type="numeric" fullWidth disabled={disabled} label={"Ultimo costo"} defaultValue={itemData.lastCost}></ControlledTextField>
        </Grid>
        <Grid item xs={12} md={12}>
            <ControlledTextField fullWidth disabled={true} label={"Fecha de creacion"} defaultValue={itemData.createdAt.toLocaleString()}></ControlledTextField>
        </Grid>
        <Grid item xs={12} md={12}>
            <ControlledTextField fullWidth disabled={true} label={"Ultima modificaion"} defaultValue={itemData.lastModified.toLocaleString()}></ControlledTextField>
        </Grid>
        <input type="hidden" name="id" value={itemData.id.toString()}/>
        <Grid item xs={12} md={12}>
            <Button type={"submit"} variant="contained" disabled={disabled}>Subir cambios</Button>
        </Grid>
        <Grid item xs={12} md={6}>
            <QRCode value={(new URL(`http://localhost/id/${itemData.id}`)).toString()}></QRCode>
        </Grid>
    </Grid>
    </form>
    </> 
}