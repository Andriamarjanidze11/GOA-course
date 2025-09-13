function Lomi(){
    console.log('LomiMagariaDzaan'); // პირველი
}

function Vefxvi(){
    setTimeout(() => {
        console.log('zd dzmisgul'); // მეოთხე (time in api:2 sec, second in task queue.)
    }, 2000)
}

function beberiVefxvi(){
    setTimeout(() => {
        console.log('zdarova brat'); // მესამე (time in api:1 sec, first in task queue.)
    }, 1000)
}

function Bokveri(){
    console.log('BokvericMagariaDzaan'); // მეორე
}

Lomi()
Vefxvi()
beberiVefxvi()
Bokveri()

// პირველი ფუნქციები რომლებიც გამოვა არის:Lomi, Bokveri რადგან ესენი სინქრონული ფუქნციები.შემდეგ გამოვა beberiVefxvi რადგან მისი მოცდის დრო api/მოსაცდელში არის 1 წამი.ამის შემდეგ გამოვა vefxvi რადგან მისი api/მოსაცდელში ყოფნის დრო 2 წამია.ჯერ beberiVefxvi გადმოვა task queue ში და შემდეგ 1 წამის მერე მოყვება Vefxvi.