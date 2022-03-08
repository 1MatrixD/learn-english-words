
if (location.pathname.includes('/rus')) {
    _words = _words.map(_ => _.reverse());
} else if (location.pathname.includes('/random')) {
    _words = _words.map(_ => Math.round(Math.random()) === 1 ? _.reverse() : _);
}