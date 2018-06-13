'use strict';

/**
 * Idea.js controller
 *
 * @description: A set of functions called "actions" for managing `Idea`.
 */

module.exports = {

  /**
   * Retrieve idea records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.idea.fetchAll(ctx.query);
  },

  /**
   * Retrieve a idea record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.idea.fetch(ctx.params);
  },

  /**
   * Create a/an idea record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.idea.add(ctx.request.body);
  },

  /**
   * Update a/an idea record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.idea.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an idea record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.idea.remove(ctx.params);
  },

  /**
   * Add relation to a/an idea record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.idea.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an idea record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.idea.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an idea record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.idea.removeRelation(ctx.params, ctx.request.body);
  }
};
