function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`;
}

function mondayWork(monday = "go to the office"){
    return `This Monday, I will ${monday}.`;
}

function wrapAdjective(name){
return function(random){
    return "You are " +name + random+ name+"!"
}
}

// function saturdayFun(activity = "roller-skate"){
//     console.log(`This Saturday, I want to ${activity}!`)
// }

// function mondayWork(monday){
//     if (monday === 'go to the office'){
//     return `This Monday, I will ${monday}!`;
//     } else if (typeof monday === 'string')
//     return 'This Monday, I will work from home!'
// }
