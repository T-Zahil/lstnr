'use strict';

/**
 * Industry.js controller
 *
 * @description: A set of functions called "actions" for managing `Industry`.
 */

module.exports = {

  /**
   * Retrieve industry records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.industry.fetchAll(ctx.query);
  },

  /**
   * Retrieve a industry record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.industry.fetch(ctx.params);
  },

  /**
   * Create a/an industry record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.industry.add(ctx.request.body);
  },

  /**
   * Update a/an industry record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.industry.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an industry record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.industry.remove(ctx.params);
  },

  /**
   * Add relation to a/an industry record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.industry.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an industry record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.industry.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an industry record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.industry.removeRelation(ctx.params, ctx.request.body);
  }
};
