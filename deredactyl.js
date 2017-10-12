var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var minColorValue = 22;
var sensitivity = minColorValue * 3;
var wordCounter = 0;
var clearTextAnalysisCalled = false;
var img = new Image();

var _0xbe9d=['bG9uZw==','WW91cg==','aGVhcnRz','YmVlbg==','YWNoaW5n','eW91cmU=','dG9v','c2h5','SW5zaWRl','Ym90aA==','d2hhdHM=','Z2FtZQ==','d2VyZQ==','cGxheQ==','QW5k','YXNr','RG9udA==','c2Vl','Z2l2ZQ==','YXJvdW5k','ZGVzZXJ0','bWFrZQ==','a25vd24=','Zm9y','YnV0','Z29pbmc=','d2FudA==','V2VyZQ==','c3RyYW5nZXJz','bG92ZQ==','WW91','a25vdw==','dGhl','cnVsZXM=','YW5k','ZnVsbA==','Y29tbWl0bWVudHM=','d2hhdA==','dGhpbmtpbmc=','dGhpcw==','ZnJvbQ==','b3RoZXI=','Z3V5','anVzdA==','eW91','aG93','ZmVlbGluZw==','R290dGE=','dW5kZXJzdGFuZA==','TmV2ZXI=','Z29ubmE=','bGV0','ZG93bg==','cnVu','Y3J5','bmV2ZXI=','c2F5','Z29vZGJ5ZQ==','dGVsbA==','bGll','aHVydA==','V2V2ZQ==','ZWFjaA=='];(function(_0x20a584,_0xe384a5){var _0x4b41a8=function(_0x2127c6){while(--_0x2127c6){_0x20a584['push'](_0x20a584['shift']());}};_0x4b41a8(++_0xe384a5);}(_0xbe9d,0x99));var _0xdbe9=function(_0x113afc,_0x2c7d5a){_0x113afc=_0x113afc-0x0;var _0x3a9219=_0xbe9d[_0x113afc];if(_0xdbe9['initialized']===undefined){(function(){var _0x1c89bf;try{var _0x2e4709=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1c89bf=_0x2e4709();}catch(_0x3618fc){_0x1c89bf=window;}var _0xf35697='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1c89bf['atob']||(_0x1c89bf['atob']=function(_0x41b153){var _0x44409b=String(_0x41b153)['replace'](/=+$/,'');for(var _0x1d6635=0x0,_0x185643,_0x5930bf,_0x118898=0x0,_0x3e2d8e='';_0x5930bf=_0x44409b['charAt'](_0x118898++);~_0x5930bf&&(_0x185643=_0x1d6635%0x4?_0x185643*0x40+_0x5930bf:_0x5930bf,_0x1d6635++%0x4)?_0x3e2d8e+=String['fromCharCode'](0xff&_0x185643>>(-0x2*_0x1d6635&0x6)):0x0){_0x5930bf=_0xf35697['indexOf'](_0x5930bf);}return _0x3e2d8e;});}());_0xdbe9['base64DecodeUnicode']=function(_0x38e84c){var _0x28f211=atob(_0x38e84c);var _0x1b57e9=[];for(var _0x5d0724=0x0,_0x4525fb=_0x28f211['length'];_0x5d0724<_0x4525fb;_0x5d0724++){_0x1b57e9+='%'+('00'+_0x28f211['charCodeAt'](_0x5d0724)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1b57e9);};_0xdbe9['data']={};_0xdbe9['initialized']=!![];}var _0x41f7ad=_0xdbe9['data'][_0x113afc];if(_0x41f7ad===undefined){_0x3a9219=_0xdbe9['base64DecodeUnicode'](_0x3a9219);_0xdbe9['data'][_0x113afc]=_0x3a9219;}else{_0x3a9219=_0x41f7ad;}return _0x3a9219;};var sourceWords=[_0xdbe9('0x0'),'no',_0xdbe9('0x1'),'to',_0xdbe9('0x2'),_0xdbe9('0x3'),_0xdbe9('0x4'),_0xdbe9('0x5'),_0xdbe9('0x6'),_0xdbe9('0x7'),'so','do','I','A',_0xdbe9('0x8'),_0xdbe9('0x9'),_0xdbe9('0xa'),'Im',_0xdbe9('0xb'),'of',_0xdbe9('0x3'),'wouldnt','get',_0xdbe9('0xc'),_0xdbe9('0xd'),'any',_0xdbe9('0xe'),_0xdbe9('0xf'),'I',_0xdbe9('0x10'),'want','to','tell',_0xdbe9('0x11'),_0xdbe9('0x12'),'Im',_0xdbe9('0x13'),_0xdbe9('0x14'),'make',_0xdbe9('0x11'),_0xdbe9('0x15'),_0xdbe9('0x16'),_0xdbe9('0x17'),'give',_0xdbe9('0x11'),'up','never',_0xdbe9('0x17'),_0xdbe9('0x18'),_0xdbe9('0x11'),_0xdbe9('0x19'),_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x1a'),'around',_0xdbe9('0x7'),'desert',_0xdbe9('0x11'),_0xdbe9('0x16'),_0xdbe9('0x17'),'make',_0xdbe9('0x11'),_0xdbe9('0x1b'),_0xdbe9('0x1c'),'gonna',_0xdbe9('0x1d'),_0xdbe9('0x1e'),'Never',_0xdbe9('0x17'),_0xdbe9('0x1f'),'a',_0xdbe9('0x20'),_0xdbe9('0x7'),_0xdbe9('0x21'),_0xdbe9('0x11'),_0xdbe9('0x22'),'known',_0xdbe9('0x23'),_0xdbe9('0xe'),'for','so',_0xdbe9('0x24'),_0xdbe9('0x25'),_0xdbe9('0x26'),_0xdbe9('0x27'),_0xdbe9('0x28'),'but',_0xdbe9('0x29'),_0xdbe9('0x2a'),_0xdbe9('0x2b'),'to',_0xdbe9('0x1d'),'it',_0xdbe9('0x2c'),'we',_0xdbe9('0x2d'),_0xdbe9('0x4'),_0xdbe9('0x2e'),_0xdbe9('0x27'),'going','on','We',_0xdbe9('0x4'),_0xdbe9('0x5'),_0xdbe9('0x2f'),_0xdbe9('0x7'),_0xdbe9('0x30'),_0xdbe9('0x17'),_0xdbe9('0x31'),'it',_0xdbe9('0x32'),'if','you',_0xdbe9('0x33'),'me',_0xdbe9('0x12'),'Im',_0xdbe9('0x13'),_0xdbe9('0x34'),_0xdbe9('0x1f'),'me',_0xdbe9('0x29'),'too','blind','to',_0xdbe9('0x35'),_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x36'),_0xdbe9('0x11'),'up','never',_0xdbe9('0x17'),_0xdbe9('0x18'),'you',_0xdbe9('0x19'),_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x1a'),_0xdbe9('0x37'),_0xdbe9('0x7'),_0xdbe9('0x38'),_0xdbe9('0x11'),_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x39'),_0xdbe9('0x11'),'cry',_0xdbe9('0x1c'),_0xdbe9('0x17'),'say',_0xdbe9('0x1e'),_0xdbe9('0x16'),'gonna',_0xdbe9('0x1f'),'a',_0xdbe9('0x20'),_0xdbe9('0x7'),'hurt',_0xdbe9('0x11'),_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x36'),_0xdbe9('0x11'),'up',_0xdbe9('0x1c'),_0xdbe9('0x17'),_0xdbe9('0x18'),_0xdbe9('0x11'),_0xdbe9('0x19'),_0xdbe9('0x16'),'gonna',_0xdbe9('0x1a'),_0xdbe9('0x37'),'and',_0xdbe9('0x38'),'you','Never',_0xdbe9('0x17'),_0xdbe9('0x39'),_0xdbe9('0x11'),_0xdbe9('0x1b'),_0xdbe9('0x1c'),_0xdbe9('0x17'),_0xdbe9('0x1d'),'goodbye','Never',_0xdbe9('0x17'),_0xdbe9('0x1f'),'a',_0xdbe9('0x20'),_0xdbe9('0x7'),_0xdbe9('0x21'),'you',_0xdbe9('0x22'),_0xdbe9('0x3a'),_0xdbe9('0x23'),'other',_0xdbe9('0x3b'),'so',_0xdbe9('0x24'),_0xdbe9('0x25'),_0xdbe9('0x26'),_0xdbe9('0x27'),'aching',_0xdbe9('0x3c'),_0xdbe9('0x29'),_0xdbe9('0x2a'),'shy','to',_0xdbe9('0x1d'),'it',_0xdbe9('0x2c'),'we',_0xdbe9('0x2d'),_0xdbe9('0x4'),_0xdbe9('0x2e'),_0xdbe9('0x27'),_0xdbe9('0x3d'),'on','We',_0xdbe9('0x4'),_0xdbe9('0x5'),_0xdbe9('0x2f'),_0xdbe9('0x7'),_0xdbe9('0x30'),_0xdbe9('0x17'),_0xdbe9('0x31'),'it','I',_0xdbe9('0x10'),_0xdbe9('0x3e'),'to','tell',_0xdbe9('0x11'),_0xdbe9('0x12'),'Im',_0xdbe9('0x13'),_0xdbe9('0x14'),_0xdbe9('0x39'),'you','understand',_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x36'),_0xdbe9('0x11'),'up',_0xdbe9('0x1c'),_0xdbe9('0x17'),_0xdbe9('0x18'),_0xdbe9('0x11'),_0xdbe9('0x19'),_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x1a'),_0xdbe9('0x37'),'and',_0xdbe9('0x38'),_0xdbe9('0x11'),_0xdbe9('0x16'),_0xdbe9('0x17'),_0xdbe9('0x39'),_0xdbe9('0x11'),_0xdbe9('0x1b'),_0xdbe9('0x1c'),_0xdbe9('0x17'),_0xdbe9('0x1d'),_0xdbe9('0x1e'),_0xdbe9('0x16'),'gonna','tell','a',_0xdbe9('0x20'),_0xdbe9('0x7'),_0xdbe9('0x21'),_0xdbe9('0x11')];

img.addEventListener('load', function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}, false);

canvas.addEventListener("dragover", function(evt) {
    evt.preventDefault();
}, false);

canvas.addEventListener("drop", function(evt) {
    var files = evt.dataTransfer.files;

    if (files.length > 0) {
        var file = files[0];

        if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
            var reader = new FileReader();

            reader.onload = function(evt) {
                img.src = evt.target.result;
            };

            reader.readAsDataURL(file);
        }
    }

    evt.preventDefault();
}, false);

canvas.addEventListener('mousedown', selectRedaction);

function selectRedaction(event) {
    var x = event.layerX;
    var y = event.layerY;
    var bounds = getRedactionBoundaries(x, y);

    if (bounds.width > 10 && bounds.height > 3) {
        clearTextAnalysisCalled = false;
        for (var q = 0; q < (bounds.width / bounds.height); q++) {
            analyzeText(bounds);
        }
    }
}

function scrapeText(length) {
    var words = "";
    var attempts = 0;

    while (words.length < length && attempts < sourceWords.length) {
        var randomWord = sourceWords[wordCounter];
        wordCounter++;

        if (wordCounter == sourceWords.length)
            wordCounter = 0;

        if ((words.length + randomWord.length) < length) {
            words = words + " " + randomWord;
            attempts = 0;
        } else {
            attempts++
        }
    }

    return words;
}

function fillAnalyzedText(bounds) {
    var fontSize = bounds.height;
    var textLength = Math.floor((bounds.width / fontSize) * 1.7);
    var words = scrapeText(textLength);

    ctx.fillStyle = "black";
    ctx.font = fontSize.toString() + "px Courier";
    ctx.fillText(words, bounds.left, bounds.bottom - 1);

}

function clearTextAnalysis(bounds, index) {
    clearTextAnalysisCalled = true;

    if (typeof index == 'undefined')
        index = bounds.left;
    else
        index += 2;

    if (index < bounds.right) {
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fillRect(index, bounds.top, 2, bounds.height);
        setTimeout(function() {
            clearTextAnalysis(bounds, index)
        }, 1);
    } else {
        fillAnalyzedText(bounds)
    }
}

function analyzeText(bounds, index) {
    if (typeof index == 'undefined')
        index = 0;
    else
        index++;

    if (index < (bounds.width / (bounds.height / 4))) {
        var x = Math.floor(Math.random() * bounds.width) + bounds.left;
        var y = Math.floor(Math.random() * bounds.height) + bounds.top;

        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
        ctx.fillRect(x, y, 1, 1);

        setTimeout(function() {
            analyzeText(bounds, index)
        }, 0.01);

    } else {
        if (!clearTextAnalysisCalled)
            clearTextAnalysis(bounds);
    }
}

function getRedactionBoundaries(x, y) {
    var bounds = {
        left: findLeft(x, y),
        right: findRight(x, y),
        top: findTop(x, y),
        bottom: findBottom(x, y),
    }

    bounds.height = bounds.bottom - bounds.top;
    bounds.width = bounds.right - bounds.left;

    return bounds
}

function findLeft(x, y) {
    for (var search = x; search > 0; search--) {
        var pixel = ctx.getImageData(search, y, 1, 1);
        var isDark = pixel.data[0] + pixel.data[1] + pixel.data[2] <= sensitivity;
        if (!isDark)
            return search
    }
}

function findRight(x, y) {
    for (var search = x; search < img.width; search++) {
        var pixel = ctx.getImageData(search, y, 1, 1);
        var isDark = pixel.data[0] + pixel.data[1] + pixel.data[2] <= sensitivity;
        if (!isDark)
            return search
    }
}

function findTop(x, y) {
    for (var search = y; search > 0; search--) {
        var pixel = ctx.getImageData(x, search, 1, 1);
        var isDark = pixel.data[0] + pixel.data[1] + pixel.data[2] <= sensitivity;
        if (!isDark)
            return search
    }
}

function findBottom(x, y) {
    for (var search = y; search < img.height; search++) {
        var pixel = ctx.getImageData(x, search, 1, 1);
        var isDark = pixel.data[0] + pixel.data[1] + pixel.data[2] <= sensitivity;
        if (!isDark)
            return search
    }
}