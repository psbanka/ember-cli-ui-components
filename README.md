# ember-cli-ui-components

## Create a component like this:

ui-button/component.js:

This button has a "normal" style and two optional styles "red" and "shadow"

```js
import { Styled, group } from 'ember-cli-ui-components';
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
});
```

Consume it like this:

```
{{#ui-button style='red shadow'}}
<p>Custom button</p>
{{/ui-button}}

{{#ui-button}}
<p>Normal button</p>
{{/ui-button}}
```

![screenshot](https://github.com/psbanka/ember-cli-ui-components/raw/master/example.png)
Developed by the nice folks at Ember Map
