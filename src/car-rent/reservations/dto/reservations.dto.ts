export class CreateReservationDto {
    readonly firstName: string = "";
    readonly lastName: string = "";
    readonly email: string = "";
    readonly tel: number = 0;
    readonly pick_up_date: string;
    readonly pick_up_location : string = "";
    readonly nbrDays: number = 0;
    readonly payment_method: string = "";
    readonly car_id: string = "";
}