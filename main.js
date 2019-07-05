'use strict';

// Event Listeners
document.getElementById('android-btn').addEventListener('click', getAndroid);
document.getElementById('apple-btn').addEventListener('click', getApple);
//  Functions
function getAndroid() {
    // Image
    document.getElementById('logo').src = 'images/Android-Logo.jpg';
    // Button Text
    document.getElementById('linkBtn').innerHTML = 'Android Home';
    // Button Link
    document.getElementById('linkBtn').href = 'https://www.android.com/';
    //Button Color
    document.getElementById('linkBtn').style.backgroundColor = '#a4c93b';
    // Body Background Color
    document.body.style.backgroundColor = '#a4c93b';
}
function getApple() {
    // Image
    document.getElementById('logo').src = 'images/Apple-Logo.jpg';
    // Button Text
    document.getElementById('linkBtn').innerHTML = 'Apple Home';
    // Button Link
    document.getElementById('linkBtn').href = 'https://www.apple.com/';
    //Button Color
    document.getElementById('linkBtn').style.backgroundColor = '#b6bcca';
    // Body Background Color
    document.body.style.backgroundColor = '#b6bcca';
}
