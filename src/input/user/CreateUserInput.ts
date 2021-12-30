import { InputType, Field } from 'type-graphql'
import { User } from '../../entity/User'

@InputType({ description: 'New User Argument' })
export class CreateUserInput implements Partial<User> {
  @Field()
  firstName?: string
  @Field()
  lastName?: string
  @Field()
  age?: number
}