'use strict'

var MIN = 49152
var MAX = 65535

module.exports = function uniqPort( string ) {

    if ( typeof string === 'number' ) {
        string += ''
    } else if ( typeof string !== 'string' ) {
        throw new TypeError( '`name` must be a string or a number' )
    }

    for ( var i = 0, offset = 0; i < string.length; i++ ) {
        offset += string.charCodeAt( i )
    }

    return MIN + Math.pow( offset, 16 ) % ( MAX - MIN )
}
