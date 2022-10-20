import {Entity, Column, UpdateDateColumn, PrimaryGeneratedColumn} from 'typeorm'
import { hashPasswordTransform } from './hashPasswordTransformer'

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column({
    transformer: hashPasswordTransform
  })
  password: string

  @UpdateDateColumn()
  updated_at: Date
}