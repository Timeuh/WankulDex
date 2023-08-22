import {z} from 'zod';

export default z.object({
  card: z.object({
    artist: z.object({
      id: z.number(),
      name: z.string()
    }),
    collection: z.string(),
    description: z.object({
      character: z.object({
        id: z.number(),
        name: z.string()
      }),
      citation: z.string(),
      effect: z.string(),
      id: z.number(),
      looser_effect: z.string(),
      rarity: z.object({
        id: z.number(),
        name: z.string()
      }),
      special: z.string(),
      winner_effect: z.string()
    }),
    id: z.number(),
    image: z.string(),
    name: z.string(),
    type: z.object({
      id: z.number(),
      name: z.string()
    })
  }),
  links: z.object({
    all: z.string(),
    image: z.string(),
    self: z.string()
  })
});
