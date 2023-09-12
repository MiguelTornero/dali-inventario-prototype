'use server'

import { Decimal } from "@prisma/client/runtime/library"
import { addItem } from "./db"

export async function submitItem(formData: FormData) {
    const name = formData.get("name")?.toString() || 'Sin nombre'
    const brand = formData.get("brand")?.toString() || null
    const description = formData.get("description")?.toString() || null
    const lastCost = new Decimal(formData.get("lastCostCents")?.toString() || '0') || 0
    const ref = formData.get("ref")?.toString() || null
    
    return await addItem({name, brand, description, lastCost, ref})
}