'use strict';

var User = require('../../models/user');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users/{_id}',
    config: {
      description: 'Add or update a user profile',
      validate: {
        payload: {
          email: Joi.string().email().required(),
          age: Joi.number().required(),
          sex: Joi.string().required(),
          twitter: Joi.string(),
          firebaseId: Joi.string().required(),
          _id: Joi.string().length(24).required()
        }
      },
      handler: function(request, reply){
        User.findByIdAndUpdate({_id: request.auth.credentials._id}, request.payload, function(err, user){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(user);
          }
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.update'
};
