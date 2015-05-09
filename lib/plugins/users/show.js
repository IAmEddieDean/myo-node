'use strict';

var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users/{_id}',
    config: {
      description: 'Show a user',
      handler: function(request, reply){
        User.findById({_id: request.auth.credentials._id}, function(err, user){
          return reply(user);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.show'
};
