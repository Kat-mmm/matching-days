document.addEventListener('DOMContentLoaded', ()=>{
    const firstDateEl = document.getElementById('date-1');
    const secondDateEl = document.getElementById('date-2');

    let matchingDaysFactory = new MatchingDays();

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

    function matchDays(){
        matchingDaysFactory.setDate(firstDateEl.value);
        let day1 = matchingDaysFactory.getDate1().getDay();

        matchingDaysFactory.setDate2(secondDateEl.value)
        let day2 = matchingDaysFactory.getDate2().getDay();

        daysData.dayss.forEach(day => {
            day.className = 'day';
        });
        
        if(day1 === day2){
            daysData.dayss[day1].className = 'green';
            daysData.dayss[day2].className = 'green';
        }
        else{
            daysData.dayss[day1].className = 'blue';
            daysData.dayss[day2].className = 'red';
        }

        let filledTemplate = template(daysData);
        document.querySelector('.days-container').innerHTML = filledTemplate;
    }

    let templateSource = document.querySelector('.daysTemplate').innerHTML;
    let template = Handlebars.compile(templateSource);
    let filledTemplate = template(daysData);
    document.querySelector('.days-container').innerHTML = filledTemplate;

    firstDateEl.addEventListener('change', matchDays);
    secondDateEl.addEventListener('change', matchDays);
})



