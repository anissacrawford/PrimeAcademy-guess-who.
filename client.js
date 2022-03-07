console.log('Here are all the available people:', people);

$(ready);

let guessWho = randomPerson();

function ready(){
    for (let person of people) {
        $('body').append(`
        <img class="image" id="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris">`)
    }

    $('body').append(`
    <div><p>Guess who!? ${guessWho.name}</p></div>`
    )
    $('body').on('click', '.image', clickHandler)
}

function randomPerson(){
    let i = Math.floor(Math.random() * (people.length));
    console.log('random person:', people[i]);
    return people[i];
}

function clickHandler(){
    console.log($(this).attr('id'));
    if( $(this).attr('id') == guessWho.name){
        console.log('you did it')
        alert('You guessed who! Reload page to play again!')
    }else{
        console.log('Try again')
        alert('Try again, we believe in you!')
    }
}