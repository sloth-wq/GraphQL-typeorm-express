import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'
import { Post } from './Post'
import { Comment } from './Comment'

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((_) => ID)
  id!: number

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  email: string

  @Column()
  @Field()
  password: string

  @CreateDateColumn()
  @Field()
  created_at!: Date

  @UpdateDateColumn()
  @Field()
  updated_at!: Date

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
  }

  @OneToMany((_) => Post, (posts) => posts.user)
  posts?: Post[]

  @OneToMany((_) => Comment, (comments) => comments.user)
  comments?: Comment[]
}
