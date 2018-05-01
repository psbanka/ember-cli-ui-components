# ember-cli-ui-components

## Create a component like this:

ui-button/component.js:


```js
import Component from '@ember/component';

export default Component.extend(Styled, {

  tagName: 'button',

  styles: {
    base: 'rounded p-2 font-bold text-white text-sm mr-2',

    defaultStyle: 'blue',

    colors: group({
      blue: 'bg-blue-light',
      red: 'bg-red-light',
    })
  }

});
```

Consume it like this:

```
{{#ui-button style='gray'}}
```

Developed by the nice folks at Ember Map
