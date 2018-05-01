import { Styled, group } from 'ember-cli-ui-components';
import Component from '@ember/component';

export default Component.extend(Styled, {

  tagName: 'button',

  /* eslint-disable ember/avoid-leaking-state-in-ember-objects */
  styles: {
    base: 'rounded p-2 font-bold text-white text-sm m-2',

    defaultStyle: 'blue',

    shadows: group({
      flat: '',
      shadow: 'shadow-lg',
    }),

    colors: group({
      blue: 'bg-blue-light',
      red: 'bg-red-light',
    })
  /* eslint-enable ember/avoid-leaking-state-in-ember-objects */
  }

})
