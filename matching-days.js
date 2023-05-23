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
        matchingDaysFactory.setDate2(secondDateEl.value);
        matchingDaysFactory.setDate(firstDateEl.value);

        localStorage.setItem('date1', matchingDaysFactory.getDate1().toISOString());
        localStorage.setItem('date2', matchingDaysFactory.getDate2().toISOString());

        let savedDate = localStorage.getItem('date1');
        let date = new Date(savedDate);
        let day1 = date.getDay();


        let savedDate2 = localStorage.getItem('date2');
        let date2 = new Date(savedDate2);
        let day2 = date2.getDay();

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



