
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
