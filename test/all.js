var action = require('../');

var myAct = action(function(a, b) {
    return a + b;
});

var res = myAct(10, 20);

if (res !== 30) {
    console.log('enabled fail');
    process.exit(1);
}

myAct.disable();

res = myAct();

if (res !== undefined) {
    console.log('disabled fail');
    process.exit(1);
}

var inc = 0;

myAct.onchange.connect(function() {
    inc++;
});

myAct.setTitle("FOOBAR");

if (inc !== 1) {
    console.log("set title observe fail");
    process.exit(1);
}

myAct.setEnabled(true);

if (inc !== 2) {
    console.log("set enabled observe fail");
    process.exit(1);
}
