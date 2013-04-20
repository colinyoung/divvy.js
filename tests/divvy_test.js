var divvy = require('../lib/divvy'),
    test = require('test');

exports['test divvy'] = function(assert) {
  var object = { countries: ['United States', 'Aruba', 'Russia', 'Japan'],
                  people: ['Chad', 'Joe', 'Ilyna', 'Sho'] };
  var expectedResult = [ 
    { country: 'United States', person: 'Chad' },
    { country: 'Aruba', person: 'Joe' },
    { country: 'Russia', person: 'Ilyna' },
    { country: 'Japan', person: 'Sho' }
  ];
  assert.deepEqual(divvy(object), expectedResult, 'expectedResult equaled what divvy made');
};

exports['test singular objects'] = function(assert) {
  var object = { cities: [ 'Chicago', 'New York' ] };
  var expectedResult = [ { city: 'Chicago' }, { city: 'New York' } ];
  assert.deepEqual(divvy(object), expectedResult, 'expectedResult equals even for single objects');
};

exports['test cross-product'] = function(assert) {
  var object = {
    cities: ['Springfield', 'Madison', 'Belmont'],
    states: ['IL', 'WI']
  };
  var expectedResult = [
    { city: 'Springfield', state: 'IL' },
    { city: 'Springfield', state: 'WI' },
    { city: 'Madison', state: 'IL' },
    { city: 'Madison', state: 'WI' },
    { city: 'Belmont', state: 'IL' },
    { city: 'Belmont', state: 'WI' }
  ];
  assert.deepEqual(divvy(object, {multiply:true}), expectedResult, 'cross products work fine');
};

if (module == require.main) test.run(exports);