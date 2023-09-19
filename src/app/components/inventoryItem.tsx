import { Stack, Typography } from "@mui/material";
import { Item } from "@prisma/client";

type InventoryItemProps = {
    itemData : Item
}

export default function InventoryItem({itemData} : InventoryItemProps) {
    return <Stack sx={{outline: "solid"}}>
        <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>Nombre: </Typography>
            <Typography>{itemData.name}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>Marca: </Typography>
            <Typography>{itemData.brand}</Typography>
            </Stack>
        <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>Descripcion: </Typography>
            <Typography>{itemData.description}</Typography>
            </Stack>
        <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>Ultimo costo:</Typography>{' '}
            <Typography>{itemData.lastCost.toString()}</Typography>
            </Stack>
        <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>Cantidad: </Typography>
            <Typography>{itemData.quantity}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>Referencia: </Typography>
            <Typography>{itemData.ref}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
            <Typography fontWeight={"bold"}>Ultima modificacion: </Typography>
            <Typography>{itemData.lastModified.toISOString()}</Typography>
        </Stack>
    </Stack>
}