'use strict';

/**
 * Test.js controller
 *
 * @description: A set of functions called "actions" for managing `Test`.
 */

module.exports = {

  /**
   * Retrieve test records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.test.fetchAll(ctx.query);
  },

  /**
   * Retrieve a test record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.test.fetch(ctx.params);
  },

  /**
   * Create a/an test record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.test.add(ctx.request.body);
  },

  /**
   * Update a/an test record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.test.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an test record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.test.remove(ctx.params);
  },

  /**
   * Add relation to a/an test record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.test.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an test record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.test.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an test record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.test.removeRelation(ctx.params, ctx.request.body);
  }
};
