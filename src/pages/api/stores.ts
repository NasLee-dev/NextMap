// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Store } from '@/types/store';
import type { NextApiRequest, NextApiResponse } from 'next'
import { cookies } from 'next/dist/client/components/headers'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Store[]>
) {
  const stores = (await import('../../../public/stores.json')).default as Store[];
  res.status(200).json(stores);
}