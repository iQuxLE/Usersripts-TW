// ==UserScript==
// @name         TW timing script 2021
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tribalwars sniper
// @author       Cameron Jibril Thomaz
// @include      https://*screen=place&try=confirm
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @require      http://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js
// ==/UserScript==

(function (_0x157876, _0x306363) {
    var _0x1fbbcc = _0x51b6,
        _0x36d8ec = _0x157876();
    while (!![]) {
        try {
            var _0x310274 =
                (parseInt(_0x1fbbcc(0xe5)) / 0x1) * (parseInt(_0x1fbbcc(0xf8)) / 0x2) +
                (parseInt(_0x1fbbcc(0xf3)) / 0x3) * (parseInt(_0x1fbbcc(0xf2)) / 0x4) +
                -parseInt(_0x1fbbcc(0xea)) / 0x5 +
                parseInt(_0x1fbbcc(0xf6)) / 0x6 +
                -parseInt(_0x1fbbcc(0xe8)) / 0x7 +
                (-parseInt(_0x1fbbcc(0xdb)) / 0x8) * (-parseInt(_0x1fbbcc(0xef)) / 0x9) +
                (parseInt(_0x1fbbcc(0xd3)) / 0xa) * (-parseInt(_0x1fbbcc(0xe9)) / 0xb);
            if (_0x310274 === _0x306363) break;
            else _0x36d8ec["push"](_0x36d8ec["shift"]());
        } catch (_0x3f1309) {
            _0x36d8ec["push"](_0x36d8ec["shift"]());
        }
    }
})(_0x2b0d, 0x4fbec),
    $(document)["ready"](function () {
        var _0x404a9c = _0x51b6;
        $(_0x404a9c(0xf1))[_0x404a9c(0xe3)](_0x404a9c(0xee)),
            $($(_0x404a9c(0xdc))[0x0])["append"](
                "<p\x20style=\x22margin-top:5px;\x20margin-bottom:0px;\x22>Time\x20of\x20arrival:</p>" + "<input\x20class=\x22timepicker\x22\x20style=\x22margin-top:5px;\x20font-size:\x2013px;\x22>" + _0x404a9c(0xf5) + _0x404a9c(0xe0)
            ),
            $(_0x404a9c(0xf7))[_0x404a9c(0xd4)]({ timeFormat: _0x404a9c(0xe7), minTime: _0x404a9c(0xff), maxTime: _0x404a9c(0xe1), defaultTime: "00:00:00", dynamic: ![], dropdown: ![], scrollbar: ![] }),
            $(_0x404a9c(0xfd))[_0x404a9c(0xfe)](function () {
                var _0x13bf9e = _0x404a9c;
                console["log"](_0x13bf9e(0xec) + $(_0x13bf9e(0xf7))[_0x13bf9e(0xe2)]() + ":" + parseInt($(_0x13bf9e(0xeb))[_0x13bf9e(0xe2)]())),
                    $("input#snipebtn")
                        ["parent"]()
                        ["append"](_0x13bf9e(0xdf) + $("input.timepicker")[_0x13bf9e(0xe2)]() + ":" + parseInt($(_0x13bf9e(0xeb))["val"]()) + _0x13bf9e(0xd8)),
                    snipeTimer();
            }),
            $(_0x404a9c(0xd5))["on"](_0x404a9c(0xfe), () => {
                storeTime();
            });
    });
function _0x2b0d() {
    var _0x15b701 = [
        "<p\x20style=\x22margin-bottom:0px;\x20font-size:13px;\x22>\x20Snipe\x20time:\x20",
        "<input\x20id=\x22snipebtn\x22\x20type=\x22button\x22\x20class=\x22btn\x22\x20value=\x22Snipe\x22\x20style=\x22width:100px;\x20margin-top:3px;\x22>",
        "23:59:59",
        "val",
        "append",
        "span.relative_time",
        "3734QSyyfZ",
        "parse",
        "HH:mm:ss",
        "642915NkWlyG",
        "5396270JvzoPh",
        "2840715BSdJhV",
        "input.milidelay",
        "Snipe\x20timed\x20at:\x20",
        "indexOf",
        "<link\x20rel=\x22stylesheet\x22\x20href=\x22//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css\x22>",
        "20925WnvFpC",
        "find",
        "head",
        "6404xSIyWj",
        "948sEDunn",
        "setItem",
        "<input\x20type=\x22text\x22\x20class=\x22milidelay\x22\x20placeholder=\x22miliseconds\x20delay\x22\x20style=\x22margin-top:5px;\x20font-size:\x2013px;\x22>",
        "1399638xkOSTK",
        "input.timepicker",
        "140MQavvi",
        "text",
        "storedTime",
        "b.nowrap",
        "span.village_anchor.contexted",
        "input#snipebtn",
        "click",
        "00:00:00",
        "10ADtSPI",
        "timepicker",
        "input.troop_confirm_go",
        "first",
        "substring",
        "</p>",
        "stringify",
        "length",
        "1640ShFZXw",
        "table.vis",
        "#menu_row2",
        "span#serverTime",
    ];
    _0x2b0d = function () {
        return _0x15b701;
    };
    return _0x2b0d();
}
function _0x51b6(_0x3893e0, _0x1e8d9f) {
    var _0x2b0d6f = _0x2b0d();
    return (
        (_0x51b6 = function (_0x51b6ed, _0x3b6c33) {
            _0x51b6ed = _0x51b6ed - 0xd3;
            var _0x190b08 = _0x2b0d6f[_0x51b6ed];
            return _0x190b08;
        }),
        _0x51b6(_0x3893e0, _0x1e8d9f)
    );
}
function snipeTimer() {
    var _0x34a33c = _0x51b6;
    $("span.relative_time")[_0x34a33c(0xf9)]()[_0x34a33c(0xed)]($("input.timepicker")["val"]()) >= 0x0
        ? setTimeout(function () {
              var _0xee62c1 = _0x34a33c;
              $(_0xee62c1(0xd5))["click"]();
          }, parseInt($(_0x34a33c(0xeb))[_0x34a33c(0xe2)]()))
        : setTimeout(snipeTimer, 0xa);
}
function storeTime() {
    var _0x338770 = _0x51b6,
        _0x51d0c4 = JSON[_0x338770(0xe6)](sessionStorage["getItem"]("storedTime"));
    _0x51d0c4 == null && (_0x51d0c4 = []);
    var _0x2af55f = {
        startCoords: $(_0x338770(0xdd))[_0x338770(0xf0)](_0x338770(0xfb))[_0x338770(0xf9)](),
        startTime: $(_0x338770(0xde))["text"](),
        endTime: $("span.relative_time")
            ["text"]()
            [_0x338770(0xd7)]($(_0x338770(0xe4))[_0x338770(0xf9)]()[_0x338770(0xda)] - 0x9, 0x8),
        destination: $(_0x338770(0xfc))["find"]("a")[_0x338770(0xd6)]()[_0x338770(0xf9)](),
    };
    _0x51d0c4["push"](_0x2af55f), sessionStorage[_0x338770(0xf4)](_0x338770(0xfa), JSON[_0x338770(0xd9)](_0x51d0c4));
}
