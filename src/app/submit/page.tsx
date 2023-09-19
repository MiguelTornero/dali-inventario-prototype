'use client'

import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { submitItem } from "../actions";
import { useRef } from "react";

export default function Submit() {

  const form = useRef<HTMLFormElement>(null)

  async function onCreate(formData: FormData) {
    await submitItem(formData)
    form.current?.reset()
  }

  return (
    <Container>
      <Typography align="center" marginY={2} variant="h3">Dar de alta</Typography>
      <Stack spacing={2} marginY={2}>
        <Link href={"/"}>
          <Button variant="contained">Regresar</Button>
        </Link>
        <form ref={form} action={onCreate}>
          <Stack spacing={2}>
            <TextField placeholder="Nombre" name="name" required/>
            <TextField placeholder="Marca" name="brand"/>
            <TextField placeholder="Descripcion" name="description"/>
            <TextField placeholder="Costo" name="lastCost" type="number" inputProps={{step: "0.01"}}/>
            <TextField placeholder="Referencia" name="ref"/>
            <Button type="submit" fullWidth variant="contained">Dar de alta</Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  )
}
