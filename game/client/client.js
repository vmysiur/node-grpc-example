const PROTO_PATH = `${__dirname}/../game.proto`

const grpc = require('grpc')
const packageDefinition = require('../../_core')(PROTO_PATH)

const game_proto = grpc.loadPackageDefinition(packageDefinition).game

const gameService = new game_proto.Game('localhost:50051', grpc.credentials.createInsecure())

gameService.getGame({ id: 'test id' }, (err, response) => console.log('Game:', response))
