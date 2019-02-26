function getGame(call, callback) {
    callback(null, {
        id: call.request.id,
        title: "Test game title",
        tags: ['slot', 'poker', 'casino'],
        keywords: [{tag: 'Key1'}, {tag: 'Key2'}]
    })

}

module.exports = {
    getGame
};