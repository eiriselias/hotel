import { IHuesped } from "@/types/ITypes";

const urlDataBase = process.env.NEXT_PUBLIC_DATA_BASE_URL

export async function crearHuesped(data:IHuesped) {

    try {
        const res = await fetch(`${urlDataBase}/huesped`,{
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({
                numeroDocumento: data.numeroDocumento,
                nombres: data.nombres,
                apellidos: data.apellidos,
                fechaNacimiento: data.fechaNacimiento
            })
        })
        const dataRes: IHuesped = await res.json()

        if(!res.ok){
            return{
                success:false,
                message: "Error al crear el nuevo huesped",
                status: res.status
            }
        }
        return {success:true, dataRes}

    } catch (error) {
        console.error("Huesped error", error)
        return{
            success: false,
            message: "No se pudo crear el nuevo huesped"
        }
        
    }
    
}