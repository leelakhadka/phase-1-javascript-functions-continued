function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;

}

function wrapAdjective(adjective) {
    const result = function result(feedback) {
        return `You are ${adjective}${feedback}${adjective}!`;
    };
    return result;
}

let result = wrapAdjective('*')
let emphatic = result("a hard worker")

result = wrapAdjective("||")
emphatic = result("a dedicated programmer")