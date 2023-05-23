describe('Matching days Tests', () =>{
    describe('Date Inputs Tests', ()=>{
        it('You can be able to set the first date', ()=>{
            let matchingFactory = new MatchingDays();
    
            matchingFactory.setDate('2021-02-14');
    
            assert.equal('Sun Feb 14 2021 02:00:00 GMT+0200 (South Africa Standard Time)', matchingFactory.getDate1().toString())
        })
        it('You can be able to set the second date', ()=>{
            let matchingFactory = new MatchingDays();
    
            matchingFactory.setDate('2022-04-19');
    
            assert.equal('Tue Apr 19 2022 02:00:00 GMT+0200 (South Africa Standard Time)', matchingFactory.getDate1().toString())
        })
    })

    describe('Using the dates set to get days', ()=>{
        it('Should be able to set the date and then get the day as number for that day e.g. (Monday => 1)', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-22');

            assert.equal(1, matchingFactory.getDate1().getDay());
        })
        it('Should be able to set the date and then get the day as number for that day e.g. (Tuesday => 2)', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-23');

            assert.equal(2, matchingFactory.getDate1().getDay());
        })
        it('Should be able to set the date and then get the day as number for that day e.g. (Wednesday => 3)', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-24');

            assert.equal(3, matchingFactory.getDate1().getDay());
        })
        it('Should be able to set the date and then get the day as number for that day e.g. (Thursday => 4)', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-25');

            assert.equal(4, matchingFactory.getDate1().getDay());
        })
        it('Should be able to set the date and then get the day as number for that day e.g. (Friday => 5)', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-26');

            assert.equal(5, matchingFactory.getDate1().getDay());
        })
        it('Should be able to set the date and then get the day as number for that day e.g. (Saturday => 6)', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-27');

            assert.equal(6, matchingFactory.getDate1().getDay());
        })
        it('Should be able to set the date and then get the day as number for that day e.g. (Sunday => 0)', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-28');

            assert.equal(0, matchingFactory.getDate1().getDay());
        })
    })

    describe('Change of colors using class names for date inputs', ()=>{
        it('When the two date inputs have the same weekday their class names should be green', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-23');
            matchingFactory.setDate2('2023-05-16');

            assert.equal('green', matchingFactory.matchDays()[matchingFactory.getDate1().getDay()].className);
            assert.equal('green', matchingFactory.matchDays()[matchingFactory.getDate2().getDay()].className);
        })
        it('When the two date inputs have the different weekdays their class names should be blue and red', ()=>{
            let matchingFactory = new MatchingDays();

            matchingFactory.setDate('2023-05-14');
            matchingFactory.setDate2('2023-05-16');

            assert.equal('blue', matchingFactory.matchDays()[matchingFactory.getDate1().getDay()].className);
            assert.equal('red', matchingFactory.matchDays()[matchingFactory.getDate2().getDay()].className);
        })
    })
})