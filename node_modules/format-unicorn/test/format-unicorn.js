var assert        = require('assert')
  , formatUnicorn = require('../safe')
require('../lib/unsafe')

it('should replace correctly when a replacement is provided', function () {

  // arrange
  var expected = 'It\'s me, Mario!'
     , toFormat = 'It\'s me, {name}!'
     , replacements = { name: 'Mario' }

  // act
  var actualSafe   = formatUnicorn(toFormat, replacements)
    , actualUnsafe = toFormat.formatUnicorn(replacements)

  // assert
  assert.strictEqual(actualSafe, expected)
  assert.strictEqual(actualUnsafe, expected)

})

it('should replace correctly when various replacements are provided', function () {

  // arrange
  var expected =
'The itsy bitsy spider climbed up the waterspout.\n\
Down came the rain\n\
and washed the spider out.\n\
Out came the sun\n\
and dried up all the rain\n\
and the itsy bitsy spider climbed up the spout again.'
    , toFormat =
'The {adjective} {animal} climbed up the waterspout.\n\
Down came the rain\n\
and washed the {animal} out.\n\
Out came the sun\n\
and dried up all the rain\n\
and the {adjective} {animal} climbed up the spout again.'
    , replacements = { adjective: 'itsy bitsy', animal: 'spider' }

  // act
  var actualSafe   = toFormat.formatUnicorn(replacements)
    , actualUnsafe = formatUnicorn(toFormat, replacements)

  // assert
  assert.strictEqual(actualSafe, expected)
  assert.strictEqual(actualUnsafe, expected)

})

it('should leave string alone when there is no replacements', function () {

  // arrange
  var expected =
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna \
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  // act
  var actualSafe   = expected.formatUnicorn({ })
    , actualUnsafe = formatUnicorn(expected, { })

  // assert
  assert.strictEqual(actualSafe, expected)
  assert.strictEqual(actualUnsafe, expected)

})

