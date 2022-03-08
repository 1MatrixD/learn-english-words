
$(async function() {
    
    $('#end_word').on('click', async e => {
        const text = e.target.innerText;
        speak(text);
    })

    await init();
});

async function reset() {
    $('#end_word').html('');
    $('#rus_words').html('');
}

async function colorText(text, color='lime') {
    $('#rus_words button').each((index, el) => {
        if (el.innerText == text) {
            el.setAttribute('style', `border-color: ${color}`);
        }
    })
}


async function init() {
    await reset();

    const [eng, rus, ...other] = word.random;

    $('#end_word').text(eng);

    const rus_words = shuffleArray([].concat(rus).concat(...word.randomRu));
    rus_words.forEach(words => {
        $('#rus_words').append(`
            <button type="button" class="btn btn-light mb-1">${words}</button>
        `);
    });

    $('#rus_words button').on('click', async e => {
        word.createRepeats();

        const targetValue = e.target.innerText;
        if (targetValue === rus) {
            if (isRus) {
                speak(rus);
            } else {
                speak(eng);
            }

            word.right();
            await colorText(targetValue);

            setTimeout(async () => init(), 0.5 * 1000);
        } else {
            word.bad();
            await colorText(rus);
            await colorText(targetValue, 'red');

            setTimeout(async () => init(), 1 * 1000);
        }
    })
}