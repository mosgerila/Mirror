function date_front(id_date,id_time)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Simbata');
         h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result_date = ''+days[day]+' '+d+' '+months[month];
        result_time = ''+h+':'+m+':'+s;        

        document.getElementById(id_date).innerHTML = result_date;
        document.getElementById(id_time).innerHTML = result_time;
        
        setTimeout('date_front("'+id_date+'","'+id_time+'");','1000');
        return true;
}


