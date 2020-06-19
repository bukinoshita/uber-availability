import { NextApiRequest, NextApiResponse } from 'next'

import countries from 'utils/uber.json'

export type Country = {
  city: string
  slug: string
}

const uber = async (request: NextApiRequest, response: NextApiResponse) => {
  const { country } = request?.query

  try {
    response.status(200).json(countries[country as string])
  } catch (error) {
    return response
      .status(404)
      .json({ error: { message: `Uber is not available in ${country}.` } })
  }
}

export default uber
