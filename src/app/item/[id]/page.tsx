import ControlledTextField from "@/app/components/ControlledTextField"
import ItemPageForm from "@/app/components/ItemPageForm"
import { getItemById } from "@/app/db"
import { Container, Grid, Typography } from "@mui/material"

type ItemPageProps = {
    params: {
        id: string
    }
}

export default async function ItemPage({params}: ItemPageProps) {
    const itemData = await getItemById(parseInt(params.id))
    if (itemData === null) {
        return `No item with id ${params.id} found`
    }

    return <Container>
        <ItemPageForm itemData={itemData}/>
    </Container>
}