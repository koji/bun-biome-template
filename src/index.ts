import { z } from 'zod'

const numberSchema = z.number()

export const sum = (a: number, b: number) => {
  numberSchema.parse(a)
  numberSchema.parse(b)
  return a + b
}


