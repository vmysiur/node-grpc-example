const protoLoader = require('@grpc/proto-loader');

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};

module.exports = function (path, ops = options) {
    return protoLoader.loadSync(
        path,
        ops);
};