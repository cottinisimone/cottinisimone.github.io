const README_URL = "https://raw.githubusercontent.com/cottinisimone/cottinisimone/master/README.md";

window.onload = function () {
    const req = new XMLHttpRequest();

    req.onload = (e) => {
        [].forEach.call(document.querySelectorAll('[data-markdown]'), function fn(elem) {
            elem.innerHTML = (new Showdown.converter()).makeHtml(req.responseText);
        });
    };
    req.open("GET", README_URL);
    req.send();
}
