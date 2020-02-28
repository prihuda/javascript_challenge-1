function countLeapYears(startYear,endYear){
    for(x=startYear;x<=endYear;x++){
        if ((x % 4 == 0 && x % 100 != 0) 
            || x % 400 == 0)
            {
                console.log(`${x} leap year`)
            }
           else{
               console.log(`${x} not leap year`)
           }
    }
}
countLeapYears(2000,2005);

