import type User from '#models/user'
import { BaseTransformer } from '@adonisjs/core/transformers'
import { type JSONDataTypes } from '@adonisjs/core/types/transformers'

export default class UserTransformer extends BaseTransformer<User> {
  toObject(): JSONDataTypes {
    return this.pick(this.resource, ['id', 'fullName', 'email', 'createdAt', 'updatedAt'])
  }
}
