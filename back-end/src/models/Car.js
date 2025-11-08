import { z } from 'zod'


// Unidades da Federação
const cores = [
 'AMARELO', 'AZUL', 'BRANCO', 'CINZA', 'DOURADO',
  'LARANJA', 'MARROM',
  'PRATA', 'PRETO', 'ROSA', 'ROXO', 'VERDE', 'VERMELHO'
]


const Car = z.object({
 brand: z.string()
   .trim()   // Retira eventuais espaços em branco das extremidades
   .min(1, { message: 'A marca deve ter, no mínimo, 1 caractere.'})
   .max(25, { message: 'A marca deve ter, no máximo, 25 caracteres.' }),

   model: z.string()
   .trim()   // Retira eventuais espaços em branco das extremidades
   .min(1, { message: 'O modelo deve ter, no mínimo, 1 caractere.'})
   .max(25, { message: 'O modelo deve ter, no máximo, 25 caracteres.' }),

   color: z.enum(cores, {
     invalid_type_error: 'Cor inválida. As cores possíveis são: ' + cores.join(', ')
   }),

   year_manufacture: z.number()
   .int({ message: 'O ano de fabricação deve ser um número inteiro.' })
   .min(1960, { message: 'O ano de fabricação deve ser a partir de 1960.' })
   .max(new Date().getFullYear(), { message: 'O ano de fabricação não pode ser maior que o ano atual.' }),

   imported: z.boolean({
     invalid_type_error: 'O campo "importado" deve ser verdadeiro ou falso.'
   }),

   plates: z.string()
   .trim()
   .min(8, { message: 'A placa deve ter, exatamente, 8 caracteres.' })
   .max(8, { message: 'A placa deve ter, exatamente, 8 caracteres.' }),

   selling_date: z.coerce.date()
   .min(new Date('2020-03-20'), { message: 'A data de venda não pode ser anterior a 20/03/2020.' })
   .max(new Date(), { message: 'A data de venda não pode ser no futuro.' })
   .nullish(),   // O campo é opcional

   selling_price: z.number()
   .min(5000, { message: 'O preço de venda deve ser, no mínimo, R$ 5.000,00.' })
   .max(5000000, { message: 'O preço de venda deve ser, no máximo, R$ 5.000.000,00.' })
   .nullish(),   // O campo é opcional
})
export default Car