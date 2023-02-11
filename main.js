const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/:firstNumber/:secondNumber', function (request, reply) {
    console.log(request);
    x = request.params.firstNumber
    y = request.params.secondNumber
    reply.send({hello: "O! HI",
    c: +x + +y})
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
