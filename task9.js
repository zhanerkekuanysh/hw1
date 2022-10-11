let capital = prompt('What is the capital of Great Britain? 1 - London 2 - Washington 3 - Paris');
    let currency = prompt('What is the currency of the USA? 1 - USD 2 - UAH 3 - RMB');
    let country = prompt('What is the most populated country? 1 - the USA 2 - Japan 3 - China');
    let score = 0;
    if (capital == 1)
        score += 1;
    if (currency == 1)
        score += 1;
    if (country == 3)
        score += 1;
    alert('Your score is ' + score);