# Divvy

## A tiny `npm` package to split objects up conveniently.

Sometimes you want to take an object with keys, like this:

```javascript
var object = {
  countries: ['United States', 'Aruba', 'Russia', 'Japan'],
  people: ['Chad', 'Joe', 'Ilyna', 'Sho']
};
```

...and split it up into separate 'items', if you will:

```javascript
var citizens = divvy(object);
console.log(citizens); // Results in:
/*  
    [ { country: 'United States', person: 'Chad' },
      { country: 'Aruba', person: 'Joe' },
      { country: 'Russia', person: 'Ilyna' },
      { country: 'Japan', person: 'Sho' } ]
*/