import { ChildEntity, Entity } from "typeorm";
import Institution from "./Institution";

@ChildEntity()
class School extends Institution {
}

export default School;