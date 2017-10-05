Polymer({
  is: 'package-chooser',
  behaviors: [Polymer.NeonAnimatableBehavior],
  properties: {
    /**
     * A  test property to show off the docs.
    **/
    items: {
      type: Array,
      value: function() {
        return [];
      }
    },
    defaultPlan: {
      type: Number,
      value: 2
    },
    itemCount: {
      type: Number,
      value: 0
    },
    animationConfig: {
      value: function() {
        return {
          'entry': {
            name: 'slide-from-right-animation',
            node: this
          },
          'exit': {
            name: 'fade-out-animation',
            node: this
          }
        }
      }
    },

  },

  observers: [
    'itemsChanged(items.*)'
  ],

  isDefaultPackage: function(id) {
    return this.defaultPlan == id;
  },

  itemsChanged: function(items) {
    if (items.path == 'items.length') {
      console.log('Items changed:');
      console.log(items.value);
      this.updateStyles({'--package-chooser-item-count': `${items.value}`});
    }
  },

  packageSelected: function(e) {
    console.log(e.detail);
  },
  /**
   * Called when the element has been created, but before property values
   * are set and local DOM is initialized. Use for one-time set-up
   * before property values are set.
  **/
  created: function() {

  },

  /**
   * Called after property values are set and local DOM
   * is initialized. Use for one-time configuration of your
   * component after local DOM is initialized.
  **/
  ready: function() {

  },

  /**
   * Life cycle function that gets called when the element is
   * first attached to the DOM
  **/
  attached: function () {

  },

  /**
   * Called after the element is detached from the document.
   * Can be called multiple times during the lifetime of an element.
   * Uses include removing event listeners added in
  **/
  detached: function () {

  },


  /**
   * Called when one of the element's attributes is changed.
   * Use to handle attribute changes that don't correspond
   * to declared properties.
  **/
  attributeChanged: function () {

  },

  /**
   * ### Events
  **/

  /**
   * Fired when package-chooser does something
   *
   * @event package-chooser-action
  **/

});
