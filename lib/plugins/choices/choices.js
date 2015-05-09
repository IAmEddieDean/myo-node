'use strict';

var Choice = require('../../models/choice');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users/{_id}/choices',
    config: {
      description: 'Add or update users choices',
      handler: function(request, reply){
        var choice = new Choice(request.payload);
        choice.save(function(choice){
          return reply(choice);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.choices'
};
