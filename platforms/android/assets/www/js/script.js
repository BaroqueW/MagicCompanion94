function onBackKeyDown(e) {
    e.preventDefault();
    console.log('Back Button is Pressed!');
}

function callAnotherPage(name) {
    window.location = name.concat(".html")
    console.log('LifeCounter Button is Pressed!');
}


