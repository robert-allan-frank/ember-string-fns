ember-string-fns
==============================================================================
This addon provides string helpers for Ember templates and components.

To install:

```sh
ember install ember-string-fns
```

Usage
------------------------------------------------------------------------------
* [`string-ends-with`](#string-ends-with)
* [`string-includes`](#string-includes)
* [`string-index-of`](#string-index-of)
* [`string-last-index-of`](#string-last-index-of)
* [`string-pad-end`](#string-pad-end)
* [`string-pad-start`](#string-pad-start)
* [`string-repeat`](#string-repeat)
* [`string-replace`](#string-replace)
* [`string-replace-all`](#string-replace-all)
* [`string-slice`](#string-slice)
* [`string-starts-with`](#string-starts-with)
* [`string-substring`](#string-substring)
* [`string-to-lower-case`](#string-to-lower-case)
* [`string-to-upper-case`](#string-to-upper-case)

#### `string-ends-with`
Returns true if a string ends with another string. See [String.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) for details on the String.endsWith function.

```hbs
{{string-ends-with 'i love ember' 'ember'}}
{{string-ends-with haystack needle}}
```

#### `string-includes`
Returns true if a string includes another string. See [String.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) for details on the String.includes function.

```hbs
{{string-includes 'i love ember framework' 'ember'}}
{{string-includes haystack needle}}
```

#### `string-index-of`
Returns the first occurrence index where the substring begins. See [String.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) for details on the String.indexOf function.

```hbs
{{string-index-of 'i love ember' 'ember'}}
{{string-index-of haystack needle}}
```

#### `string-last-index-of`
Returns the last occurrence index where the substring begins. See [String.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) for details on the String.lastIndexOf function.

```hbs
{{string-last-index-of 'i love love ember'}}
{{string-last-index-of haystack needle}}
```

#### `string-pad-end`
Returns true if a string ends with another string. See [String.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) for details on the String.padEnd function.

```hbs
{{string-pad-end 'ember' '.' 8}}
{{string-pad-end string endPadWith totalCharacterCount}}
```

#### `string-pad-start`
Returns true if a string ends with another string. See [String.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) for details on the String.padStart function.

```hbs
{{string-pad-start 'ember' '.' 8}}
{{string-pad-start string frontPadWith totalCharacterCount}}
```

#### `string-repeat`
Repeat a string a number of times. See [String.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) for details on the String.repeat function.

```hbs
{{string-repeat 'ember' 3}}
{{string-repeat string 3}}
```

#### `string-replace`
Replace first occurence of a string with another string. 

```hbs
{{string-replace 'i love react' 'ember'}}
{{string-replace hackstack needle}}
```

#### `string-replace-all`
Replace all occurences of a string with another string.

```hbs
{{string-replace-all 'i love react, react programming' 'ember'}}
{{string-replace-all hackstack needle}}
```

#### `string-slice`
Extract a slice from a string. See [String.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) for details on the String.slice function.

```hbs
{{string-slice 'i love ember' 7}}
{{string-slice 'i love ember' 7 12}}
{{string-slice string beginIndex}}
{{string-slice string beginIndex endIndex}}
```

#### `string-starts-with`
Returns true if a string starts with another string. See [String.startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) for details on the String.startsWith function.

```hbs
{{string-starts-with 'ember i love' 'ember'}}
{{string-starts-with haystack needle}}
```

#### `string-substring`
Extract a substring from a string. See [String.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) for details on the String.substring function.

```hbs
{{string-substring 'i love ember' 7}}
{{string-substring 'i love ember' 7 12}}
{{string-substring string beginIndex}}
{{string-substring string beginIndex endIndex}}
```

#### `string-to-lower-case`
Convert a string to lower case. See [String.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) for details on the String.toLowerCase function.

```hbs
{{string-to-lower-case 'robert'}}
{{string-to-lower-case firstName}}
```

#### `string-to-upper-case`
Convert a string to upper case. See [String.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) for details on the String.toUpperCase function.

```hbs
{{string-to-upper-case 'frank'}}
{{string-to-upper-case lastName}}
```

Compatibility
------------------------------------------------------------------------------
* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).
