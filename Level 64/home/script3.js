function allTopics() {
    console.log(22+3);
    console.log(2-3);
    console.log(72*3);
    console.log(92/3);
    console.log(12**3);
    console.log(52%3);


    for(let i3 = 30;i3 < 50;i3++) {
        console.log('JavaScript');
    }
    
}

name1 = prompt('Enter your name:' );
x = Number(prompt('Enter a Number:'));

function ifElse() {
    if(name1 = 'Dudu') {
        console.log('Your name is Dudu');
    } else {
    console.log('Your name is not Dudu');

    switch(x) {
        case 0:
            console.log('Number is Zero');
            break;
        case 1:
            console.log('Number is One');
            break;
        case 2:
            console.log('Number is Two');
            break;
        case 3:
            console.log('Number is Three');
            break;
        case 4:
            console.log('Number is Four');
            break;
    }

    let num = (x > 3) ? 'Number is more than Three' :
    'Number isn"t more than Three';

    for(let i = 10;i < 20;i++) {
        if(i == 17) {
            continue;
        }
        if(i == 19) {
            break;
        }
    }
    for(let i1 = 20;i < 40;i++) {
        console.log(`Georgia: ${i}`);
    }
}
}

allTopics()
ifElse()
