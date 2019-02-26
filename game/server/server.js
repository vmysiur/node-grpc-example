const grpc = require('grpc');
const PROTO_PATH = __dirname + '/../game.proto';
const packageDefinition = require('../../_core')(PROTO_PATH);
const controllers = require('./controllers');

const game_proto = grpc.loadPackageDefinition(packageDefinition).game;

const server = new grpc.Server();
server.addService(game_proto.Game.service, controllers);
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

