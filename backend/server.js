import cors from 'cors'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (_request, response) => {
  response.json({ message: 'Backend is running' })
})

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from the backend!' })
})

app.get('/api/type/:type', async (request, response) => {
  try {
    const pokeApiResponse = await fetch(
      `https://pokeapi.co/api/v2/type/${encodeURIComponent(request.params.type)}/`,
    )

    if (!pokeApiResponse.ok) {
      response.status(pokeApiResponse.status).json({
        error: 'Pokemon type not found',
      })
      return
    }

    const typeData = await pokeApiResponse.json()

    response.json({
      half_damage_to: typeData.damage_relations.half_damage_to.map(({ name }) => name),
      double_damage_from: typeData.damage_relations.double_damage_from.map(
        ({ name }) => name,
      ),
    })
  } catch {
    response.status(502).json({ error: 'Unable to reach PokeAPI' })
  }
})

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})