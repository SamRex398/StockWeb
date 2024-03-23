const caclAverage = (score1,score2,score3) => {
    let average=(score1+score2+score3)/3 ;
    console.log(average)
}

// let avgDolhins= caclAverage(44,23,71);
// let avgKoalas= caclAverage(65,54,49);

let avgDolhins= caclAverage(85,54,41);
let avgKoalas= caclAverage(23,34,33);

const checkWinner = (avgDolhins,avgKoalas) => {
    if (avgDolhins > avgKoalas) {
        if(avgDolhins >= 2 * avgKoalas){
            console.log('Dolhins Wins'+ avgDolhins + 'vs' + avgKoalas)
        }
        else {
            console.log('No Winner')
        }
    }
    else {
        if(avgKoalas >= 2 * avgDolhins) {
            console.log('Koalas Wins' + avgKoalas + 'vs' + avgDolhins)
        }
        else {
            console.log('No Winner')
        }
    }
}

checkWinner()


