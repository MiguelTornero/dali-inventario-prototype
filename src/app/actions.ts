'use server'

import { Decimal } from "@prisma/client/runtime/library"
import { addItem } from "./db"
import { revalidatePath } from "next/cache"

export async function submitItem(formData: FormData) {
    const name = formData.get("name")?.toString() || 'Sin nombre'
    const brand = formData.get("brand")?.toString() || null
    const description = formData.get("description")?.toString() || null
    const lastCost = new Decimal(formData.get("lastCost")?.toString() || '0') || 0
    const ref = formData.get("ref")?.toString() || null
    
    await addItem({name, brand, description, lastCost, ref})

    revalidatePath("/inventory")
}