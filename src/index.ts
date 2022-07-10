import fastify from 'fastify'

const app = fastify()

app.get('/', async (req, res) => {
  return 'Hello World'
})

app.setNotFoundHandler(async (req, res) => {
  res.status(404)

  return 'Not Found'
})

const run = async () => {
  await app.listen({
    port: 8000
  })
}

run()
