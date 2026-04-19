import { IAuthRepose, ILoginProps } from "@/types/ITypes";

const dataBaseUrl = process.env.NEXT_PUBLIC_DATA_BASE_URL

export async function Login(dataUser:ILoginProps) {

    try {
        const res = await fetch(`${dataBaseUrl}/auth/login`,{
            method: "POST",
            headers:{ "Content-type":"application/json" },
            body:JSON.stringify({
                email: dataUser.email,
                password: dataUser.password
            })
        })

        const contentType = res.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("El servidor no devolvió JSON");
        }
        
        const data:IAuthRepose = await res.json()

        if(!res.ok){
            return {
                success: false,
                message: "Error en el inicio de sesión",
                status: res.status
            }
        }

        return {success: true, data}
            
    } catch (error) {

        console.error("Login Error:", error)
        return {
            success: false,
            message: "No se puedo conectar con el servidor, intentalo mas tarde"
        }
            
    }
}