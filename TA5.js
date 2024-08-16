function leapYears (año){
    let esBisiesto = true;
    if (año % 4 == 0)
        esBisiesto;
    else if ((año % 100 == 0) && (año % 400 == 0))
        esBisiesto;
    else
        esBisiesto = false;
    console.log(esBisiesto)
}

leapYears(2024)