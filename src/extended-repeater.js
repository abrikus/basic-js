module.exports = function repeater(str, options) {
    let separator = '+';
    let repeatTimes = 0;
    let addition = '';
    let additionRepeatTimes = 0;
    let additionSeparator = '';
    let additionStr = '';

    if (options.hasOwnProperty('repeatTimes')) {
        repeatTimes = options['repeatTimes'];
    }

    if (options.hasOwnProperty('separator')) {
        separator = options['separator'];
    }

    if (options.hasOwnProperty('addition')) {
        addition = options['addition'];

        if (addition === null) {
            addition = 'null';
        }
    }

    if (options.hasOwnProperty('additionRepeatTimes')) {
        additionRepeatTimes = options['additionRepeatTimes'];
    }

    if (options.hasOwnProperty('additionSeparator')) {
        additionSeparator = options['additionSeparator'];
    }

    let mainArr = new Array (repeatTimes);
    let additionArr = new Array (additionRepeatTimes);

    additionStr = additionArr.fill(addition).join(additionSeparator);
    str += additionStr;
    return mainArr.fill(str).join(separator);
};
  