'use server'

import { Decimal } from "@prisma/client/runtime/library"
import { addItem, updateItemById } from "./db"
import { revalidatePath } from "next/cache"

export type ActionResponse = {ok: false, message: string}|{ok: true}

export async function submitItem(formData: FormData) : Promise<ActionResponse> {
    const name = formData.get("name")?.toString() || 'Sin nombre'
    const brand = formData.get("brand")?.toString() || null
    const description = formData.get("description")?.toString() || null
    const lastCost = new Decimal(formData.get("lastCost")?.toString() || '0') || 0
    const ref = formData.get("ref")?.toString() || null
    
    await addItem({name, brand, description, lastCost, ref})

    revalidatePath("/inventory")

    return {ok: true}
}

export async function editItem(formData: FormData) : Promise<ActionResponse> {
    const id = parseInt(formData.get("id")?.toString()||"NaN")
    const name = formData.get("name")?.toString() || "N/A"
    const brand = formData.get("brand")?.toString() || null
    const description = formData.get("description")?.toString() || null
    const lastCost = new Decimal(formData.get("lastCost")?.toString() || '0') || 0
    const quantity = parseInt(formData.get("quantity")?.toString() || "0") || 0
    const ref = formData.get("ref")?.toString() || null

    if (lastCost.comparedTo(0) < 0) {
        return {ok: false, message: "invalid cost"}
    }

    await updateItemById(id, {name, brand, description, lastCost, quantity, ref, lastModified: new Date()})

    revalidatePath("/item/[id]")

    return {ok: true}
}