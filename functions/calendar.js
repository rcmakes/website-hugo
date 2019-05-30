

exports.handler = function(event, context, callback) {
    var makeQuerystring = params =>
        Object.keys(params)
        .map(key => {
            return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
        })
        .join("&");
    
    var url = "https://www.googleapis.com/calendar/v3/calendars/rcmakes.calendar@gmail.com/events";
    var querystring = makeQuerystring({
        q: "Makerspace"
    });
    var today = new Date();

    var yearRn = today.getFullYear();
    var monthRn = today.getMonth()+1;
    var dayRn = today.getDate();
    var hoursRn = today.getHours();
    var minutesRn = today.getMinutes();
    var datetime = new Date(yearRn, monthRn, dayRn, hoursRn, 00,00);
    var indexarray = [];
    fetch(url + "?" + querystring, {
        method: "get",
        headers: {
        Authorization: "Bearer " + {{ getenv "API_KEY" }}
        }
    })
    .then(res => res.json())
    .then(json => values = json.items)
    .then(values => values.some((element, index) => {
        var length = values.length;
        var date = element.end.dateTime.split('-');
        var newdate = new Date(date[0], date[1], date[2].split("T")[0], date[2].split("T")[1].split(":")[0]);
        if(newdate >= datetime){
        var updatedDate =  new Date(date[0], date[1]-1, date[2].split("T")[0], date[2].split("T")[1].split(":")[0]);
        indexarray.push(updatedDate);
        }; 
        var mydate = new Date(newdate[0], newdate[1] , newdate[2]);
        if(index+1 == length){
        var date_sort_asc = function (date1, date2) {
            if (date1 > date2) return 1;
            if (date1 < date2) return -1;
            return 0;
            };
        indexarray.sort(date_sort_asc);
        var stringified = indexarray[0].toString();
        var month = stringified.slice(4,7);
        var day = stringified.slice(8,10);
        var weekday = stringified.slice(0,3);
        if(weekday == "Sat"){
            defWeekDay = "Saturday"
        }
        else if(weekday == "Sun"){
            defWeekDay = "Sunday"
        }
        else if(weekday == "Mon"){
            defWeekDay = "Monday"
        }
        else if(weekday == "Tue"){
            defWeekDay = "Tuesday"
        }
        else if(weekday == "Wed"){
            defWeekDay = "Wednesday"
        }
        else if(weekday == "Thu"){
            defWeekDay = "Thursday"
        }
        else if(weekday == "Fri"){
            defWeekDay = "Friday"
        };
        if(month == "Jan"){
            defMonth = "January"
        }
        else if(month == "Feb"){
            defMonth = "February"
        }
        else if(month == "Mar"){
            defMonth = "March"
        }
        else if(month == "Apr"){
            defMonth = "April"
        }
        else if(month == "May"){
            defMonth = "May"
        }
        else if(month == "Jun"){
            defMonth = "June"
        }
        else if(month == "Jul"){
            defMonth = "July"
        }
        else if(month == "Aug"){
            defMonth = "August"
        }
        else if(month == "Sep"){
            defMonth = "September"
        }
        else if(month == "Oct"){
            defMonth = "October"
        }
        else if(month == "Nov"){
            defMonth = "November"
        }
        else if(month == "Dec"){
            defMonth = "December"
        };
        if(day == "01"){
            defDay = "1st"
        }
        else if(day == "02"){
            defDay = "2nd"
        }
        else if(day == "03"){
            defDay = "3rd"
        }
        else if(parseInt(day) >= 04 && parseInt(day) <= 20){
            defDay = day + "th"
        }
        else if(day == "21"){
            defDay = "21st"
        }
        else if(day == "22"){
            defDay = "22nd"
        }
        else if(day == "23"){
            defDay = "23rd"
        }
        else if(parseInt(day) >= 24){
            defDay = day + "th"
        };
        var doneDate = defWeekDay + " " + defMonth + " " + defDay;
        document.getElementById("nextDate").innerHTML = doneDate;

    }
    }))
    callback(null, {
        statusCode: 200,
        body: doneDate
        });
}