import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Typography align="center" marginY={2} variant="h3">Aplicacion inventario</Typography>
      <Stack spacing={2} marginY={2}>
        <Link href={"/submit"}>
          <Button fullWidth variant="contained">Dar de alta</Button>
        </Link>
        <Link href={"/inventory"}>
          <Button fullWidth variant="contained">Consultar inventario</Button>
        </Link>
      </Stack>
    </Container>
  )
}
