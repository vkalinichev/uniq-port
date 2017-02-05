'use strict';

var test = require( 'ava' )
var uniqPort = require( '.' )

test( 'generate port for `uniq-port`', function ( t ) {
    var actual = uniqPort( 'uniq-port' )
    t.is( actual, 64451 )
})

test( 'generate port for `uniq`', function ( t ) {
    var actual = uniqPort( 'uniq' )
    t.is( actual, 22057 )
})

test( 'generate port for `port`', function ( t ) {
    var actual = uniqPort( 'port' )
    t.is( actual, 4167 )
})

test( 'generate port for an empty string', function ( t ) {
    var actual = uniqPort( '' )
    t.is( actual, 1025 )
})

test( 'generate port for number', function ( t ) {
    var actual = uniqPort( 31337 )
    t.is( actual, 62427 )
})

test( 'throw an error on object', function ( t ) {
    t.throws( function () {
        uniqPort( {} )
    })
})

test( 'throw an error on array', function ( t ) {
    t.throws( function () {
        uniqPort( [] )
    })
})

test( 'throw an error on null', function ( t ) {
    t.throws( function () {
        uniqPort( null )
    })
})

test( 'throw an error on undefined', function ( t ) {
    t.throws( function () {
        uniqPort()
    })
})
