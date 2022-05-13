// code your solution here
function saturdayFun(funTime="roller-skate"){
    return `This Saturday, I want to ${funTime}!`
  }
  
  function mondayWork(task="go to the office"){
    return `This Monday, I will ${task}.`
  }
  
  function wrapAdjective(highlight){
      return function newfunc(adjective){
        return `You are ${highlight}${adjective}${highlight}!`
      }
  }
