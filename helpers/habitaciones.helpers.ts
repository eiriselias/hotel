const dataBaseUrl = process.env.NEXT_PUBLIC_DATA_BASE_URL

export async function  getHabitaciones(){
    try {
        const res = await fetch(`${dataBaseUrl}/habitacion`)

        const habitaciones = await res.json()

        return habitaciones

    } catch (error) {
        console.error("Error al obtener las habitaciones", error)
    }
}