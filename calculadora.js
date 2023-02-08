var x = args[0];
var y = args[2];
var operator = args[1];

function evaluate(param1, param2, operator) {
  return eval(param1 + operator + param2);
}

if ( console.log( evaluate(x, y, operator) ) ) {}

const soma = () => {
    console.log(parseInt(args[0]) + parseInt(args[1]));
};
const sub = () => {
    console.log(parseInt(args[0]) - parseInt(args[1]));  
}

const args = process.argv.slice(2);

switch (args[0]) {
    case 'soma':
        soma();
    break;

    case 'sub':
        sub();
    break;

    default:
        console.log('does not support', args[0]);
}
}
