import { ChildEntity, Column, Entity } from "typeorm";
import Institution from "./Institution";

@ChildEntity()
class College extends Institution {
    @Column()
    graduations: string;

    @Column()
    twoYearDegrees: string;
}

export default College;