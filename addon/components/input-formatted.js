import Ember from 'ember';
import layout from '../templates/components/input-formatted';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'input',
  attributeBindings: ['type', 'value', 'required', 'readonly', 'disabled', 'placeholder', 'style'],

  didInsertElement() {
    this._super(...arguments);

    var options = {
      'pattern': this.get('pattern'),
      'persistent': this.get('persistent'),
    };
    if (this.get('patterns') !== null) {
      options['patterns'] = this.get('patterns')
    }
    var formatted = new Formatter(document.getElementById(this.$().attr('id')), options);
  },

  willDestroyElement() {
    this._super(...arguments);
  }
});
