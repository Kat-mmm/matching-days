function MatchingDays(){
    let date1;
    let date2;
    let daysData = {
        dayss : [
            {day: 'Sunday', className: 'day'},
            {day: 'Monday', className: 'day'},
            {day: 'Tuesday', className: 'day'},
            {day: 'Wednesday', className: 'day'},
            {day: 'Thursday', className: 'day'},
            {day: 'Friday', className: 'day'},
            {day: 'Saturday', className: 'day'},
        ],
    };

    function setDate(date){
        date1 = new Date(date)
    }

    function setDate2(date){
        date2 = new Date(date)
    }

    function getDate1(){
        return date1;
    }

    function getDate2(){
        return date2;
    }

    function matchDays(){
        if(getDate1().getDay() === getDate2().getDay()){
            daysData.dayss[getDate1().getDay()].className = 'green';
            daysData.dayss[getDate2().getDay()].className = 'green';
        }
        else{
            daysData.dayss[getDate1().getDay()].className = 'blue';
            daysData.dayss[getDate2().getDay()].className = 'red';
        }
        return daysData.dayss;
    }


    return {
        setDate,
        setDate2,
        getDate1,
        getDate2,
        matchDays
    }
}