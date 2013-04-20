var divvy = require('../divvy'),
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
}

if (module == require.main) test.run(exports);