import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Submit() {
  return (
    <Container>
      <Typography align="center" marginY={2} variant="h3">Dar de alta</Typography>
      <Stack spacing={2} marginY={2}>
        <Link href={"/submit"}>
          <Button variant="contained"> Dar de alta </Button>
        </Link>
      </Stack>
    </Container>
  )
}
