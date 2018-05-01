import { Styled, group } from 'ember-cli-ui-components';
import Component from '@ember/component';
import { computed } from '@ember/object'
import hbs from 'htmlbars-inline-precompile';

const TOP_CLASSES = { topPurple: 'bg-purple-dark', topGreen: 'bg-green-dark', topBlue: 'bg-blue-dark' }

export default Component.extend(Styled, {

  /* eslint-disable ember/avoid-leaking-state-in-ember-objects */
  styles: {
    base: 'container border m-4',

    defaultStyle: '',

    shadows: group({
      flat: '',
      shadow: 'shadow',
    }),

    topColors: group({
      topPurple: '',
      topGreen: '',
      topBlue: '',
    }),
  },
  /* eslint-enable ember/avoid-leaking-state-in-ember-objects */

  topClass: computed('activeStyles', function() {
    return this.activeStyles.map(styleName => TOP_CLASSES[styleName]).filter(Boolean)
  }),

  layout: hbs`
  <div class='border-b p-4 {{topClass}}'>
    <p>{{title}}</p>
  </div>
  <div class='p-4'>
    {{yield}}
  </div>
  `

})
