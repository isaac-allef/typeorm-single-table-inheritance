import { ChildEntity, Column, Entity } from "typeorm";
import Institution from "./Institution";

@ChildEntity()
class University extends Institution {

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;
}

export default University;