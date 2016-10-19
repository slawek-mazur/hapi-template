exports.getUsers = function(request, reply) {
    var json = {
        title: "Users",
        content: "Users page"
    };

    reply(json);
};

exports.userInfo = function(request, reply) {

    reply(request.params);
};
