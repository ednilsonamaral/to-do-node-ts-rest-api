import { IsDate, IsString } from 'class-validator';

export class CreateToDoDto {

    @IsString()
    public title: string;

    @IsString()
    public description: string;

    @IsDate()
    public updatedAt?: Date;

}