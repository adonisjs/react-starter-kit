import { type Data } from '~/generated/data'
import { type JSONDataTypes } from '@adonisjs/core/types/transformers'

export type InertiaProps<T extends JSONDataTypes> = Data.SharedProps & T
