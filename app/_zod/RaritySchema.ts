import {z} from 'zod';

export default z.object({
  rarity: z.object({
    id: z.number(),
    name: z.string(),
  }),
  links: z.object({
    all: z.string(),
    image: z.string(),
    self: z.string(),
  }),
});
