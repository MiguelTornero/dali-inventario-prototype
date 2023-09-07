import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { getItems } from "../db";

export default async function Inventory() {
  const results = await getItems(100, 0)

  return (
    <Container>
      <Typography align="center" marginY={2} variant="h3">Inventario</Typography>
      <Stack spacing={2} marginY={2}>
        <Link href={"/"}>
          <Button variant="contained">Regresar</Button>
        </Link>
      </Stack>
    </Container>
  )
}
