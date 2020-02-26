module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let param = {
        turns: '',
        seconds: ''
    }
    param.turns = Math.pow(2, disksNumber) - 1;
    param.seconds = param.turns / (turnsSpeed / 3600);

    return param;
}