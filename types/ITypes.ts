export interface ILoginProps {
    email : string
    password : string
}

export interface IUser{
    id: string
    name: string
    email: string
}

export interface IAuthRepose{
    user: IUser
    token: string
}

enum TipoHabitacion{
    Junior = "Junior",
    JuniorDecorada = "JuniorDecorada",
    Presidencial = "Presidencial",
    PresidencialDecorada = "PresidencialDecorada"
}

export interface IHabitacion{
    id: string
    numeroHabitacion: number
    capacidad: number
    tipo: TipoHabitacion
    precio: number
    ocupado: boolean
    jacuzzi: boolean
    aireAcondicionado: boolean
    imagenes: string[]
    huespedes: IHuesped[]
}

export interface IHuesped{
    id?: string
    nombres: string
    apellidos: string
    numeroDocumento: number
    fechaNacimiento: string
    ingreso?: Date
    salida?: Date
    habitacionId?: string
    responsableId?: string
}