import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { submitItem } from "../actions";

export default function Submit() {
  return (
    <Container>
      <Typography align="center" marginY={2} variant="h3">Dar de alta</Typography>
      <Stack spacing={2} marginY={2}>
        <Link href={"/"}>
          <Button variant="contained">Regresar</Button>
        </Link>
        <form action={submitItem}>
          <Stack spacing={2}>
            <TextField placeholder="Nombre" name="name" required/>
            <TextField placeholder="Marca" name="brand"/>
            <TextField placeholder="Descripcion" name="description"/>
            <TextField placeholder="Costo" name="lastCostCents" type="number" inputProps={{step: "0.01"}}/>
            <TextField placeholder="Referencia" name="ref"/>
            <Button type="submit" fullWidth variant="contained">Dar de alta</Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  )
}
