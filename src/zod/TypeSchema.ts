import {z} from 'zod';

export default z.object({
  type: z.object({
    id: z.number(),
    name: z.string(),
  }),
  links: z.object({
    self: z.string(),
    all: z.string(),
    cards: z.string(),
  }),
});
