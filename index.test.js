'use strict';

var test = require( 'ava' )
var uniqPort = require( '.' )

test( 'generate port for `uniq-port`', function ( t ) {
    var actual = uniqPort( 'uniq-port' )
    t.is( actual, 54115 )
})

test( 'generate port for `your-unique-app-name`', function ( t ) {
    var actual = uniqPort( 'your-unique-app-name' )
    t.is( actual, 65293 )
})

test( 'generate port for `uniq`', function ( t ) {
    var actual = uniqPort( 'uniq' )
    t.is( actual, 56645 )
})

test( 'generate port for `port`', function ( t ) {
    var actual = uniqPort( 'port' )
    t.is( actual, 49619 )
})

test( 'generate port for an empty string', function ( t ) {
    var actual = uniqPort( '' )
    t.is( actual, 49152 )
})

test( 'generate port for number', function ( t ) {
    var actual = uniqPort( 31337 )
    t.is( actual, 50433 )
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
