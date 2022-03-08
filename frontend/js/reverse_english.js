let isRus = false;
if (location.pathname.includes('/rus')) {
    _words = _words.map(_ => _.reverse());
    isRus = true;
}