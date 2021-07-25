let getSleepHours = (day) =>{

    if (day === 'monday'){
      return 8;
    }
    else if (day === 'tuesday'){
      return 4;
    }
    else if (day === 'wednesday'){
      return 7;
    }
    else if (day === 'thursday'){
      return 5;
    }
    else if (day === 'friday'){
      return 6;
    }
    else if (day === 'saturday'){
      return 12;
    }
    else if (day === 'sunday'){
      return 5;
    }
    }
    
    let getActualSleepHours = () =>{
    let sum = (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'))
     return sum
    }
    
    let getIdealSleepHours = () =>{
      const idealHours = 8
      return idealHours * 7 ;
    }
    console.log(getActualSleepHours())
    console.log(getIdealSleepHours())
    
    let calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    
    if (actualSleepHours === idealSleepHours){
      console.log(+actualSleepHours+ ' user got perfect sleep')
    }
    else if(actualSleepHours > idealSleepHours){
      console.log(+(actualSleepHours -idealSleepHours )+ ' user got more sleep than needed')
    }
    else if(actualSleepHours < idealSleepHours){
      console.log('user got '+( idealSleepHours - actualSleepHours ) + ' hours of rest, get some rest')
    }
    }
    console.log(calculateSleepDebt())