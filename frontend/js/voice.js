
function langs() {
    const speech = window.speechSynthesis;
    const voices = speech.getVoices();

    return voices;
}

function speak(text = '', index) {
    if (index === undefined) {
        index = window.navigator.platform === 'Win32' ? 3 : 5;
    }

    const speech = window.speechSynthesis;
    const voice = speech.getVoices()[index];

    const readme = new SpeechSynthesisUtterance(text);
    readme.voice = voice;
    speech.speak(readme);
}

function speaks(text='') {
    const voices = langs();

    for (let i = 0; i < voices.length; i++) {
        speak(`${text}`, i);
    }
}

speak('');