export interface PaqueteViajeInterface {
    id: number,
    fecha_inicio: Date,
    fecha_fin: Date,
    alojamiento: string,
    transporte: string,
    num_personas: number,
    servicio_adicional: string,
   pago_id: number,
}