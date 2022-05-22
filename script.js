if (localStorage.getItem('number') === null) {
    localStorage.setItem('number', 0);
} else { 
    number = parseInt(localStorage.getItem('number'));
    document.querySelector('#num').innerText = "You clicked this button " + number + " times";
}

function saveProgress() {
    localStorage.setItem('number', number);
}

function increaseNumber() {
    number++
    document.querySelector('#num').innerText = "You clicked this button " + number + " times";
    saveProgress();
}

function checkGoal() {
    if (number >= 100 && stop == false && number < 200) {
        alert("You are literally wasting your time.")
        stop == true;
    }
    if (number >= 200 && number < 250) {
        document.querySelector('#statText').innerHTML = 'You should stop now.'
    }
    if (number >= 250 && number < 300) {
        document.querySelector('#statText').innerHTML = 'Why arent you listening to me!?'
    }
    if (number >= 300 && number < 325) {
        document.querySelector('#statText').innerHTML = 'If you wont stop, ill stop you myself';
    }
    if (number >= 325) {
        document.querySelector('#num').remove();
        document.querySelector('#statText').innerHTML = 'Hint: read the code by viewing the sources.';
    }
}

// below is a very secret function, however its obfuscated
function _0x312d(_0xed09ae,_0x2ca65c){var _0xc93b30=_0xc93b();return _0x312d=function(_0x312de2,_0x46f290){_0x312de2=_0x312de2-0x1af;var _0x28a27e=_0xc93b30[_0x312de2];return _0x28a27e;},_0x312d(_0xed09ae,_0x2ca65c);}function _0xc93b(){var _0x2f8464=['10799360zGqMjH','1114358uMHaKx','6omWaik','9WiVdtr','4bQNyxh','12sgKvbY','8173415ykQNVQ','1298689XLSqqK','68826irZyWR','27265557sMzEMu','You...\x20finished\x20the\x20game!\x20But\x20wait,\x20there\x20is\x20more!','14797960FtSLAi'];_0xc93b=function(){return _0x2f8464;};return _0xc93b();}(function(_0x25caa7,_0x300787){var _0x129e48=_0x312d,_0x15b406=_0x25caa7();while(!![]){try{var _0x2cbc2f=parseInt(_0x129e48(0x1b3))/0x1+-parseInt(_0x129e48(0x1ba))/0x2*(-parseInt(_0x129e48(0x1b7))/0x3)+parseInt(_0x129e48(0x1b6))/0x4*(parseInt(_0x129e48(0x1b8))/0x5)+-parseInt(_0x129e48(0x1b4))/0x6*(parseInt(_0x129e48(0x1b9))/0x7)+parseInt(_0x129e48(0x1b1))/0x8*(parseInt(_0x129e48(0x1b5))/0x9)+-parseInt(_0x129e48(0x1b2))/0xa+-parseInt(_0x129e48(0x1af))/0xb;if(_0x2cbc2f===_0x300787)break;else _0x15b406['push'](_0x15b406['shift']());}catch(_0x262c7b){_0x15b406['push'](_0x15b406['shift']());}}}(_0xc93b,0xf2420));function secretFunction(){var _0x387a8c=_0x312d;alert(_0x387a8c(0x1b0));}

setInterval(checkGoal, 10);