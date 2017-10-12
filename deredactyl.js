var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var minColorValue = 22;
var sensitivity = minColorValue * 3;
var clearTextAnalysisCalled = false;
var img = new Image();

var _0xf4eb = ['Z29pbmc=', 'Z29ubmE=', 'bmV2ZXI=', 'b3RoZXI=', 'cnVsZXM=', 'd2UncmU=', 'YWNoaW5n', 'YXJvdW5k', 'ZGVzZXJ0', 'd2hhdCdz', 'ZmVlbGluZw==', 'aGVhcnQncw==', 'dGhpbmtpbmc=', 'c3RyYW5nZXJz', 'dW5kZXJzdGFuZA==', 'YW5k', 'YW55', 'YnV0', 'Zm9y', 'Z3V5', 'aG93', 'bGll', 'cnVu', 'c2F5', 'c2Vl', 'c2h5', 'dGhl', 'dG9v', 'eW91', 'Ym90aA==', 'Y3J5', 'ZG93bg==', 'ZWFjaA==', 'ZnJvbQ==', 'ZnVsbA==', 'Z2l2ZQ==', 'aHVydA==', 'anVzdA==', 'a25vdw==', 'bG9uZw==', 'bG92ZQ==', 'bWFrZQ==', 'cGxheQ==', 'dGVsbA==', 'dGhpcw==', 'd2FudA==', 'd2hhdA==', 'YmxpbmQ=', 'ZG9uJ3Q='];

(function(a, c) {
    var b = function(b) {
        while (--b) {
            a['push'](a['shift']());
        }
    };
    b(++c);
}(_0xf4eb, 0x197));

var _0xbf4e = function(b, d) {
    b = b - 0x0;
    var a = _0xf4eb[b];
    if (_0xbf4e['initialized'] === undefined) {
        (function() {
            var a;
            try {
                var b = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                a = b();
            } catch (b) {
                a = window;
            }
            var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            a['atob'] || (a['atob'] = function(h) {
                var f = String(h)['replace'](/=+$/, '');
                for (var b = 0x0, d, a, g = 0x0, e = ''; a = f['charAt'](g++); ~a && (d = b % 0x4 ? d * 0x40 + a : a, b++ % 0x4) ? e += String['fromCharCode'](0xff & d >> (-0x2 * b & 0x6)) : 0x0) {
                    a = c['indexOf'](a);
                }
                return e;
            });
        }());
        _0xbf4e['base64DecodeUnicode'] = function(e) {
            var b = atob(e);
            var c = [];
            for (var a = 0x0, d = b['length']; a < d; a++) {
                c += '%' + ('00' + b['charCodeAt'](a)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(c);
        };
        _0xbf4e['data'] = {};
        _0xbf4e['initialized'] = !![];
    }
    var c = _0xbf4e['data'][b];
    if (c === undefined) {
        a = _0xbf4e['base64DecodeUnicode'](a);
        _0xbf4e['data'][b] = a;
    } else {
        a = c;
    }
    return a;
};

var sourceWords = ['a', 'i', 'do', 'if', 'it', 'me', 'no', 'of', 'on', 'so', 'to', 'we', _0xbf4e('0x0'), _0xbf4e('0x1'), 'ask', _0xbf4e('0x2'), _0xbf4e('0x3'), 'get', _0xbf4e('0x4'), _0xbf4e('0x5'), 'i\x27m', 'let', _0xbf4e('0x6'), _0xbf4e('0x7'), _0xbf4e('0x8'), _0xbf4e('0x9'), _0xbf4e('0xa'), _0xbf4e('0xb'), _0xbf4e('0xc'), 'up', _0xbf4e('0xd'), 'been', _0xbf4e('0xe'), _0xbf4e('0xf'), _0xbf4e('0x10'), _0xbf4e('0x11'), _0xbf4e('0x12'), _0xbf4e('0x13'), 'game', _0xbf4e('0x14'), _0xbf4e('0x15'), _0xbf4e('0x16'), _0xbf4e('0x17'), _0xbf4e('0x18'), _0xbf4e('0x19'), _0xbf4e('0x1a'), _0xbf4e('0x1b'), _0xbf4e('0x1c'), _0xbf4e('0x1d'), _0xbf4e('0x1e'), _0xbf4e('0x1f'), 'your', _0xbf4e('0x20'), _0xbf4e('0x21'), _0xbf4e('0x22'), _0xbf4e('0x23'), 'gotta', 'known', _0xbf4e('0x24'), _0xbf4e('0x25'), _0xbf4e('0x26'), _0xbf4e('0x27'), 'we\x27ve', _0xbf4e('0x28'), _0xbf4e('0x29'), _0xbf4e('0x2a'), 'inside', _0xbf4e('0x2b'), 'you\x27re', _0xbf4e('0x2c'), 'goodbye', _0xbf4e('0x2d'), _0xbf4e('0x2e'), 'wouldn\x27t', _0xbf4e('0x2f'), _0xbf4e('0x30'), 'commitment\x27s'];

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

    while (words.length < length && attempts < 50) {
        var randomWord = sourceWords[Math.floor(Math.random() * sourceWords.length)];

        if ((words.length + randomWord.length) < length) {
            words = words + " " + randomWord;
            attempts = 0;
        } else {
            attempts++
        }
    }

    if (words == "") return scrapeText(length)

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