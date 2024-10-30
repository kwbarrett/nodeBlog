import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./User";

@Table
export class Token extends Model<Token>{

    @Column({
        allowNull: false
    })
    token: string = ''

    @ForeignKey( () => User )
    @Column({
        allowNull: false
    })
    userId?: number;

    @Column({
        type: DataType.ENUM('activation', 'reset'),
        allowNull: false
    })
    type?: 'activation' | 'reset' = 'activation'

    @BelongsTo( () => User )
    user?: User;

}