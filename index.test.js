'use strict';

var test = require( 'ava' )
var uniqPort = require( '.' )

var correctValues = {
    'uniq-port': 54115,
    'your-unique-app-name': 65293,
    'uniq': 56645,
    'port': 49619,
    '': 49152
}

var incorrectValues = [
    {},
    [],
    null,
    undefined
]


Object.keys( correctValues ).forEach( function ( name ) {

    test( 'generates port for `' + name + '`', function ( t ) {
        var expected = correctValues[ name ];

        t.is( uniqPort( name ), expected );
    })

} )


test( 'generates port for number (31337)', function ( t ) {
    t.is( uniqPort( 31337 ), 50433 );
})

incorrectValues.forEach( function ( type ) {

    test( 'throws on ' + JSON.stringify( type ), function ( t ) {
        var error = t.throws( function () {
            uniqPort( type )
        }, TypeError )

        t.is( error.message, '`name` must be a string or a number' );
    } )

} )
