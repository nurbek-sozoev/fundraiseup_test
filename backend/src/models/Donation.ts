import {Entity, ObjectID, ObjectIdColumn, Column} from 'typeorm';
import {Length, IsInt, Min} from "class-validator";

@Entity({name: 'donations'})
export class Donation {

  @ObjectIdColumn({
    select: false
  })
  id: ObjectID;

  @Column()
  createdAt: Date;

  @Column()
  @IsInt()
  @Min(1)
  amount: number;

  @Column()
  @Length(3, 3)
  currency: string;
}
