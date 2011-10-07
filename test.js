var MsgPack = require('coffeepack'),
    assert = require('assert');

var object = {
	numbers: [
		Infinity,
		-Infinity,
		100, // positive fixnum
		0xF0, // uint8
		0xFFF0, //uint16
		0xFFFFFFF0, // uint32
		0xFFFFFFFFFFFFFF0, // uint64
		-100, // negative fixnum
		-0xF0, // int8
		-0xFFF0, //int16
		-0xFFFFFFF0, // int32
		-0xFFFFFFFFFFFFFF0, // int64
	],

    foo: "bar",
    person: {
        firstName: 'Devon',
        lastName: 'Govett'
    }
}

assert.deepEqual(MsgPack.unpack(MsgPack.pack(object)), object);
