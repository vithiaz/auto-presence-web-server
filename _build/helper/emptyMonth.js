'use strict';
function a2_0x3175() {
    const _0x4bd145 = [
        '22501752opFqwc',
        'findOne',
        'save',
        '9448896PmduBd',
        './getDaysInMonth',
        'defineProperty',
        'name',
        'getDaysInMonth',
        '9kKOuPH',
        'push',
        'emptyMonth',
        '[server]\x20OK!\x20empty\x20month\x20created',
        '1013167JlduNP',
        'toString',
        'Guru',
        'getFullYear',
        '__esModule',
        '903280MWfZjp',
        '../models/rekap',
        '3732796PCzbWP',
        'Rekap',
        'log',
        '7074900YGpcOV',
        'forEach',
        '3EXNqPb',
        '1992194xJFsgs',
        'getMonth',
        '../models/guru'
    ];
    a2_0x3175 = function () {
        return _0x4bd145;
    };
    return a2_0x3175();
}
function a2_0x21c0(_0x387fbd, _0x1e0c8e) {
    const _0x317501 = a2_0x3175();
    return a2_0x21c0 = function (_0x21c0f8, _0x891296) {
        _0x21c0f8 = _0x21c0f8 - 0x198;
        let _0x4734c3 = _0x317501[_0x21c0f8];
        return _0x4734c3;
    }, a2_0x21c0(_0x387fbd, _0x1e0c8e);
}
const a2_0x45b8b8 = a2_0x21c0;
(function (_0x1132c4, _0x5884fe) {
    const _0x39406f = a2_0x21c0, _0x26f7e2 = _0x1132c4();
    while (!![]) {
        try {
            const _0x2f7960 = -parseInt(_0x39406f(0x1a0)) / 0x1 + parseInt(_0x39406f(0x1ad)) / 0x2 + -parseInt(_0x39406f(0x1ac)) / 0x3 * (-parseInt(_0x39406f(0x1a7)) / 0x4) + parseInt(_0x39406f(0x1a5)) / 0x5 + parseInt(_0x39406f(0x1b3)) / 0x6 + parseInt(_0x39406f(0x1aa)) / 0x7 + -parseInt(_0x39406f(0x1b0)) / 0x8 * (parseInt(_0x39406f(0x19c)) / 0x9);
            if (_0x2f7960 === _0x5884fe)
                break;
            else
                _0x26f7e2['push'](_0x26f7e2['shift']());
        } catch (_0x113e05) {
            _0x26f7e2['push'](_0x26f7e2['shift']());
        }
    }
}(a2_0x3175, 0xd44ce));
Object[a2_0x45b8b8(0x199)](exports, a2_0x45b8b8(0x1a4), { 'value': !![] }), exports[a2_0x45b8b8(0x19e)] = void 0x0;
const guru_1 = require(a2_0x45b8b8(0x1af)), rekap_1 = require(a2_0x45b8b8(0x1a6)), getDaysInMonth_1 = require(a2_0x45b8b8(0x198)), emptyMonth = async () => {
        const _0x1d2b41 = a2_0x45b8b8, _0x88d66a = new Date(), _0x3604db = _0x88d66a[_0x1d2b41(0x1a3)](), _0x24e347 = _0x88d66a[_0x1d2b41(0x1ae)](), _0x2997fc = await rekap_1[_0x1d2b41(0x1a8)][_0x1d2b41(0x1b1)]({
                'year': _0x3604db,
                'month': _0x24e347
            });
        if (!_0x2997fc) {
            const _0x25677a = await guru_1[_0x1d2b41(0x1a2)]['find'](), _0x3001ae = (0x0, getDaysInMonth_1[_0x1d2b41(0x19b)])(_0x24e347 + 0x1, _0x3604db);
            let _0x1027d4 = [];
            const _0x1a4d9d = [];
            _0x25677a && _0x25677a[_0x1d2b41(0x1ab)](_0x2fd056 => {
                const _0x567648 = _0x1d2b41;
                for (let _0x51ae6c = 0x0; _0x51ae6c < _0x3001ae; _0x51ae6c++) {
                    _0x1027d4[_0x567648(0x19d)](0x0);
                }
                _0x1a4d9d[_0x567648(0x19d)]({
                    'name': _0x2fd056[_0x567648(0x19a)],
                    'day': _0x1027d4
                }), _0x1027d4 = [];
            });
            const _0x361361 = {
                'year': _0x3604db['toString'](),
                'month': _0x24e347[_0x1d2b41(0x1a1)](),
                'rekap': _0x1a4d9d
            };
            await new rekap_1[(_0x1d2b41(0x1a8))](_0x361361)[_0x1d2b41(0x1b2)](), console[_0x1d2b41(0x1a9)](_0x1d2b41(0x19f));
        }
        return;
    };
exports[a2_0x45b8b8(0x19e)] = emptyMonth;