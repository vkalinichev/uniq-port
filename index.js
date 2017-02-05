'use strict'

var MIN = 1025
var MAX = 65535

module.exports = function uniqPort( string ) {

    for ( var i = 0, offset = 0; i < string.length; i++ ) {
        offset += string.charCodeAt( i )
    }

    return MIN + Math.pow( offset, 16 ) % ( MAX - MIN )
}
