import { Client } from './Client';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'

}
@Entity("transaction")

export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: TransactionTypes
    })
    type: string

    @Column({
        type: 'numeric'
    })
    amount: number

    @ManyToOne(
        () => Client,
        client => client.transactions
    )

    @JoinColumn({
        name: 'client_id'
    })
    client: Client

}