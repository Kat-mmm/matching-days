document.addEventListener('DOMContentLoaded', ()=>{
    const firstDateEl = document.getElementById('date-1');
    const secondDateEl = document.getElementById('date-2');

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
        let firstDate = new Date(firstDateEl.value);
        let day1 = firstDate.getDay();

        let secondDate = new Date(secondDateEl.value);
        let day2 = secondDate.getDay();

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



