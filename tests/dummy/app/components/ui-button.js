import { Styled, group } from 'ember-cli-ui-components';
import Component from '@ember/component';

console.log('>>Styled', Styled)

export default Component.extend(Styled, {

  tagName: 'button',

  styles: {
    base: 'rounded p-2 font-bold text-white text-sm mr-2',

    defaultStyle: 'blue',

    shadows: group({
      flat: '',
      shadow: 'shadow',
    }),

    colors: group({
      blue: 'bg-blue-light',
      red: 'bg-red-light',
    })
  }

})
