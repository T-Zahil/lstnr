'use strict';

/**
 * Comment.js controller
 *
 * @description: A set of functions called "actions" for managing `Comment`.
 */

module.exports = {

  /**
   * Retrieve comment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.comment.fetchAll(ctx.query);
  },

  /**
   * Retrieve a comment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.comment.fetch(ctx.params);
  },

  /**
   * Create a/an comment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.comment.add(ctx.request.body);
  },

  /**
   * Update a/an comment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.comment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an comment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.comment.remove(ctx.params);
  },

  /**
   * Add relation to a/an comment record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.comment.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an comment record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.comment.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an comment record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.comment.removeRelation(ctx.params, ctx.request.body);
  }
};