const assert = require('assert');
const {zodiac, calendarDay, prev_nex_date, shoppingDays} = require('../index.js');

describe("the zodiac function", ()=>{
    it('should display Zodiac sign for given date', ()=> {
        const res = zodiac(11,27,2022);
        assert.equal(res, "Sagittarius");

        const res1 = zodiac(11,2,2022);
        assert.equal(res1, "Scorpio");

        const res2 = zodiac(01,01,2000);
        assert.equal(res2,"Capricorn");

        const res3 = zodiac(03,21,2009);
        assert.equal(res3,"Aries");

        const res4 = zodiac(05,15,1998);
        assert.equal(res4,"Taurus");

        
    });
});

describe("should display the day for given date", ()=>{
    it('should display Monday for given date', ()=> {
        const res = calendarDay(11, 28, 2022);
        assert.equal(res,'Monday');
    });
    it('should display Tuesday for given date', ()=> {
        const res1 = calendarDay(3, 5, 2024);
        assert.equal(res1,'Tuesday');
    });
    it('should display Friday for given date', ()=> {
        const res = calendarDay(05,15,1998);
        assert.equal(res,'Friday');
    });
    it('should display Sunday for given date', ()=> {
        const res = calendarDay(11,09,1975);
        assert.equal(res,'Sunday');
    });
    it('should display Friday for given date', ()=> {
        const res = calendarDay(07,14,2000);
        assert.equal(res,'Friday');
    });
    it('Invalid date', ()=> {
        const res = calendarDay(17,14,2000);
        assert.equal(res, undefined);
    });

});

describe("should display previous date", ()=>{
    it('should display previous date of Nov 28, 2022', ()=> {
        const {prev_date} = prev_nex_date(11, 28, 2022)
        assert.equal(prev_date, "2022-11-27")
    });
    it('should display previous date of Jan 1, 2021', ()=> {
        const {prev_date} = prev_nex_date(01, 01, 2021)
        assert.equal(prev_date, "2020-12-31")
    });
    it('should display previous date of feb 28, 1975', ()=> {
        const {prev_date} = prev_nex_date(02, 28, 1975)
        assert.equal(prev_date, "1975-2-27")
    });
    it('should display previous date of March 1, 2000', ()=> {
        const {prev_date} = prev_nex_date(03, 01, 2000)
        assert.equal(prev_date, "2000-2-29")
    });
});

describe("should display next date", ()=>{
    it('should display next date of Nov 29, 2022', ()=> {
        const {nex_date} = prev_nex_date(11, 28, 2022)
        assert.equal(nex_date, "2022-11-29")
    });
    it('should display next date of feb 29, 2000', ()=> {
        const {nex_date} = prev_nex_date(02, 29, 2000)
        assert.equal(nex_date, "2000-3-1")
    });
    it('should display next date of dec 31, 1990', ()=> {
        const {nex_date} = prev_nex_date(12, 31, 1990)
        assert.equal(nex_date, "1991-1-1")
    });
    
});

describe("should display number of shopping days", ()=>{
    it('should display number of shopping days to christmas from Nov 28, 2022', ()=> {
        const shoppingDay = shoppingDays(11, 28, 2022)
        assert.equal(shoppingDay, 22)
    });
    it('should display number of shopping days to christmas from Nov 27, 2022', ()=> {
        const shoppingDay = shoppingDays(11, 27, 2022)
        assert.equal(shoppingDay, 22)
    });
    it('should display number of shopping days to christmas from Jan 1, 2022', ()=> {
        const shoppingDay = shoppingDays(01, 01, 2022)
        assert.equal(shoppingDay, 303)
    });
    it('should display number of shopping days to christmas from may 15, 1998', ()=> {
        const shoppingDay = shoppingDays(05, 15, 2022)
        assert.equal(shoppingDay, 189)
    });
});