import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "categories", })
export class Category {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({name: 'parent_id', nullable: true})
    parentId?: number;

}
