'use strict';
const a1_0x514234 = a1_0x1298;
(function (_0x23d61a, _0x47a7f9) {
    const _0x4c86ff = a1_0x1298, _0xd324c2 = _0x23d61a();
    while (!![]) {
        try {
            const _0x357099 = parseInt(_0x4c86ff(0x1ed)) / 0x1 * (-parseInt(_0x4c86ff(0x1d3)) / 0x2) + parseInt(_0x4c86ff(0x1d0)) / 0x3 * (-parseInt(_0x4c86ff(0x1f5)) / 0x4) + parseInt(_0x4c86ff(0x1d4)) / 0x5 + parseInt(_0x4c86ff(0x1f8)) / 0x6 * (parseInt(_0x4c86ff(0x1fc)) / 0x7) + parseInt(_0x4c86ff(0x1e8)) / 0x8 * (-parseInt(_0x4c86ff(0x1c4)) / 0x9) + parseInt(_0x4c86ff(0x1bb)) / 0xa * (parseInt(_0x4c86ff(0x1fb)) / 0xb) + parseInt(_0x4c86ff(0x1d8)) / 0xc * (parseInt(_0x4c86ff(0x1f2)) / 0xd);
            if (_0x357099 === _0x47a7f9)
                break;
            else
                _0xd324c2['push'](_0xd324c2['shift']());
        } catch (_0x2efcaa) {
            _0xd324c2['push'](_0xd324c2['shift']());
        }
    }
}(a1_0x3990, 0xb97f7));
Object[a1_0x514234(0x1c2)](exports, a1_0x514234(0x1b8), { 'value': !![] }), exports[a1_0x514234(0x1c5)] = exports[a1_0x514234(0x1b7)] = exports['presence'] = exports[a1_0x514234(0x1f4)] = exports[a1_0x514234(0x1d5)] = exports[a1_0x514234(0x1c1)] = void 0x0;
const guru_1 = require(a1_0x514234(0x1be)), httpResponse_1 = require(a1_0x514234(0x203)), getDaysInMonth_1 = require(a1_0x514234(0x1c3)), rekap_1 = require(a1_0x514234(0x1e1)), emptyMonth_1 = require('../helper/emptyMonth'), success = {
        'success': !![],
        'status': 0xc8
    }, getGuru = async (_0x4d08a2, _0x35df80) => {
        const _0x50a72f = a1_0x514234;
        try {
            if ('CHcBs' !== 'CHcBs')
                return _0x97c47f[_0x50a72f(0x1de)](_0x50a72f(0x1b9), _0x2b3e1d), (0x0, _0x5d71ea[_0x50a72f(0x1fd)])(_0x10183d);
            else {
                const _0x955863 = await guru_1[_0x50a72f(0x1f1)]['find']();
                return _0x35df80[_0x50a72f(0x1e4)](0xc8)['json']({
                    ...success,
                    'data': _0x955863
                });
            }
        } catch (_0x50b257) {
            if ('ytsRs' === _0x50a72f(0x1bc))
                return console['error'](_0x50a72f(0x1c7), _0x50b257), (0x0, httpResponse_1[_0x50a72f(0x1fd)])(_0x35df80);
            else
                _0x2f3c1c[_0x50a72f(0x200)](0x0);
        }
    };
exports['getGuru'] = getGuru;
const getRekap = async (_0x7942fb, _0x5d8857) => {
    const _0x271ff6 = a1_0x514234;
    try {
        if ('pwYqv' === 'JHwUh')
            return (0x0, _0x2c70b8[_0x271ff6(0x1e6)])(_0x362352, _0x271ff6(0x1dc), 'Guru\x20dengan\x20nama\x20yang\x20sama\x20ditemukan.');
        else {
            const {date: _0x4e97b4} = _0x7942fb['query'];
            await (0x0, emptyMonth_1[_0x271ff6(0x1c6)])();
            const _0x248802 = new Date();
            let _0x27088e;
            const _0x25bd20 = [];
            if (!_0x4e97b4) {
                if ('YVuoU' === 'mndja')
                    return (0x0, _0x3da10a[_0x271ff6(0x1e6)])(_0x2b3147, _0x271ff6(0x1dc), _0x271ff6(0x1ce));
                else {
                    const _0x1a45e9 = _0x248802['getFullYear']()[_0x271ff6(0x206)](), _0x61fa0a = _0x248802['getMonth']()[_0x271ff6(0x206)](), _0x3fe3f3 = (0x0, getDaysInMonth_1[_0x271ff6(0x1ef)])(parseInt(_0x61fa0a) + 0x1, parseInt(_0x1a45e9));
                    for (let _0x5c004f = 0x1; _0x5c004f < _0x3fe3f3 + 0x1; _0x5c004f++) {
                        'uLBCP' !== 'jfqfX' ? _0x25bd20['push'](_0x5c004f) : _0x2cdfb8[_0x271ff6(0x200)](_0x5ba2ad);
                    }
                    _0x27088e = await rekap_1[_0x271ff6(0x1c9)][_0x271ff6(0x1d9)]({
                        'year': _0x1a45e9,
                        'month': _0x61fa0a
                    }, {
                        'rekap': 0x1,
                        '_id': 0x0
                    });
                }
            } else {
                if (_0x271ff6(0x1f0) !== _0x271ff6(0x1f0))
                    return _0x28e941[_0x271ff6(0x1de)](_0x271ff6(0x1e7), _0x45f796), (0x0, _0x27ed14['http500'])(_0x1ac0e8);
                else {
                    const _0x148d97 = _0x4e97b4[_0x271ff6(0x206)]()['split']('-'), _0x2069fa = _0x148d97[0x0], _0x3dde17 = parseInt(_0x148d97[0x1][_0x271ff6(0x1d6)]('0', '')) - 0x1, _0x44b72a = (0x0, getDaysInMonth_1[_0x271ff6(0x1ef)])(_0x3dde17 + 0x1, parseInt(_0x2069fa));
                    for (let _0x41d868 = 0x1; _0x41d868 < _0x44b72a + 0x1; _0x41d868++) {
                        if ('SOmxL' !== 'SOmxL')
                            return (0x0, _0x43083a[_0x271ff6(0x1e6)])(_0x402561, _0x271ff6(0x1fe), _0x271ff6(0x1ce));
                        else
                            _0x25bd20[_0x271ff6(0x200)](_0x41d868);
                    }
                    _0x27088e = await rekap_1[_0x271ff6(0x1c9)][_0x271ff6(0x1d9)]({
                        'year': _0x2069fa,
                        'month': _0x3dde17
                    }, {
                        'rekap': 0x1,
                        '_id': 0x0
                    });
                }
            }
            return _0x5d8857['status'](0xc8)['json']({
                ...success,
                'data': _0x27088e,
                'day': _0x25bd20
            });
        }
    } catch (_0x12399f) {
        return _0x271ff6(0x1cc) !== _0x271ff6(0x1cc) ? (_0x4dfe17[_0x271ff6(0x1de)](_0x271ff6(0x1c7), _0xf4529e), (0x0, _0x31fb48[_0x271ff6(0x1fd)])(_0x4d4567)) : (console[_0x271ff6(0x1de)]('GetGuruError.', _0x12399f), (0x0, httpResponse_1[_0x271ff6(0x1fd)])(_0x5d8857));
    }
};
function a1_0x1298(_0x102dc4, _0x291c41) {
    const _0x399010 = a1_0x3990();
    return a1_0x1298 = function (_0x1298ca, _0x5169da) {
        _0x1298ca = _0x1298ca - 0x1b6;
        let _0x3a3511 = _0x399010[_0x1298ca];
        return _0x3a3511;
    }, a1_0x1298(_0x102dc4, _0x291c41);
}
exports['getRekap'] = getRekap;
const add = async (_0x429066, _0x21ba55) => {
    const _0x38ddf2 = a1_0x514234;
    try {
        if (_0x38ddf2(0x1f3) !== _0x38ddf2(0x207)) {
            const {name: _0x45eb51} = _0x429066['body'], _0x36d2ba = _0x429066[_0x38ddf2(0x1b6)], _0x2c339b = await guru_1[_0x38ddf2(0x1f1)][_0x38ddf2(0x1d9)]({ 'name': _0x45eb51 });
            if (!_0x429066[_0x38ddf2(0x1b6)]) {
                if (_0x38ddf2(0x1ca) === 'tazJO')
                    _0x744d3e[_0x38ddf2(0x200)](0x3);
                else
                    return (0x0, httpResponse_1['http400'])(_0x21ba55, _0x38ddf2(0x1dc), 'Guru\x20dengan\x20nama\x20yang\x20sama\x20ditemukan.');
            }
            if (_0x2c339b) {
                if (_0x38ddf2(0x1d1) !== _0x38ddf2(0x1ff))
                    return (0x0, httpResponse_1[_0x38ddf2(0x1e6)])(_0x21ba55, _0x38ddf2(0x1dc), 'Guru\x20dengan\x20nama\x20yang\x20sama\x20ditemukan.');
                else
                    _0x4af880[_0x38ddf2(0x200)](_0x584aa6);
            }
            const _0x264101 = new Date(), _0x5458a5 = _0x264101['getFullYear'](), _0x4e3e06 = _0x264101[_0x38ddf2(0x1ee)](), _0x4b4c1a = _0x264101[_0x38ddf2(0x1dd)](), _0x4b99f5 = (0x0, getDaysInMonth_1[_0x38ddf2(0x1ef)])(_0x4e3e06 + 0x1, _0x5458a5), _0x575d30 = [];
            for (let _0x362497 = 0x0; _0x362497 < _0x4b99f5; _0x362497++) {
                if (_0x38ddf2(0x1f7) === 'EYzgB') {
                    if (_0x362497 < _0x4b4c1a) {
                        if (_0x38ddf2(0x1db) === _0x38ddf2(0x1db))
                            _0x575d30['push'](0x3);
                        else
                            return _0x32a8f3['error'](_0x38ddf2(0x1c0), _0x310c47), (0x0, _0x46180e[_0x38ddf2(0x1fd)])(_0x32ec94);
                    } else {
                        if ('BrKMo' !== _0x38ddf2(0x1e9))
                            return _0x19b316[_0x38ddf2(0x1de)](_0x38ddf2(0x1fa), _0x5815a8), (0x0, _0x22bb5b[_0x38ddf2(0x1fd)])(_0x4d1c32);
                        else
                            _0x575d30[_0x38ddf2(0x200)](0x0);
                    }
                } else
                    return _0x2be381[_0x38ddf2(0x1de)](_0x38ddf2(0x1c7), _0x56ebbb), (0x0, _0x836291[_0x38ddf2(0x1fd)])(_0x77670b);
            }
            _0x575d30[_0x4b4c1a - 0x1] = 0x2;
            const _0x1207ce = {
                'name': _0x45eb51,
                'day': _0x575d30
            };
            _0x429066['body'][_0x38ddf2(0x201)] = _0x36d2ba['map'](_0x3f39e4 => _0x38ddf2(0x1cb) + _0x3f39e4[_0x38ddf2(0x1ec)]);
            const _0x3b13c8 = new guru_1[(_0x38ddf2(0x1f1))](_0x429066[_0x38ddf2(0x1eb)]);
            return await _0x3b13c8['save'](), await rekap_1[_0x38ddf2(0x1c9)][_0x38ddf2(0x1c8)]({
                'year': _0x5458a5,
                'month': _0x4e3e06
            }, { '$push': { 'rekap': _0x1207ce } }), console[_0x38ddf2(0x1e0)](_0x38ddf2(0x1d2) + _0x45eb51), _0x21ba55[_0x38ddf2(0x1e4)](0xc8)['json']({
                ...success,
                'message': _0x38ddf2(0x1bf),
                'data': {
                    'name': _0x45eb51,
                    '_id': _0x3b13c8['_id']
                }
            });
        } else
            _0x464cc4 < _0x27153d ? _0x4aa3d0[_0x38ddf2(0x200)](0x3) : _0x8ccc8b[_0x38ddf2(0x200)](0x0);
    } catch (_0x2a9d5c) {
        return console['error'](_0x38ddf2(0x1fa), _0x2a9d5c), (0x0, httpResponse_1[_0x38ddf2(0x1fd)])(_0x21ba55);
    }
};
exports['add'] = add;
const presence = async (_0x5f141c, _0x5c9c42) => {
    const _0x43144a = a1_0x514234;
    try {
        const {name: _0x3f45b2} = _0x5f141c[_0x43144a(0x1eb)];
        if (_0x3f45b2) {
            const _0x5ce922 = new Date(), _0x3fbd2d = _0x5ce922[_0x43144a(0x1e5)]()[_0x43144a(0x206)](), _0x5ebe40 = _0x5ce922['getMonth']()[_0x43144a(0x206)](), _0x9b7f53 = _0x5ce922[_0x43144a(0x1dd)]();
            await (0x0, emptyMonth_1['emptyMonth'])();
            const _0x37e49d = await rekap_1[_0x43144a(0x1c9)][_0x43144a(0x1f9)]([
                {
                    '$match': {
                        'year': _0x3fbd2d,
                        'month': _0x5ebe40
                    }
                },
                { '$unwind': _0x43144a(0x1ba) },
                { '$match': { 'rekap.name': _0x3f45b2 } },
                {
                    '$project': {
                        'rekap.day': 0x1,
                        '_id': 0x0
                    }
                }
            ]);
            if (_0x37e49d[0x0]) {
                const _0x1dd340 = _0x37e49d[0x0][_0x43144a(0x1e2)][_0x43144a(0x1cd)];
                return _0x1dd340[_0x9b7f53 - 0x1] = 0x1, await rekap_1[_0x43144a(0x1c9)][_0x43144a(0x1c8)]({
                    'year': _0x3fbd2d,
                    'month': _0x5ebe40
                }, { '$set': { 'rekap.$[a].day': _0x1dd340 } }, { 'arrayFilters': [{ 'a.name': _0x3f45b2 }] }), console['log'](_0x43144a(0x1bd) + _0x3f45b2), _0x5c9c42[_0x43144a(0x1e4)](0xc8)['json']({
                    ...success,
                    'message': _0x43144a(0x1da)
                });
            }
        }
        return console[_0x43144a(0x1e0)](_0x43144a(0x202)), _0x5c9c42[_0x43144a(0x1e4)](0xc9)[_0x43144a(0x1d7)]({ ...success });
    } catch (_0x1fe5ac) {
        return console[_0x43144a(0x1de)](_0x43144a(0x1c0), _0x1fe5ac), (0x0, httpResponse_1[_0x43144a(0x1fd)])(_0x5c9c42);
    }
};
function a1_0x3990() {
    const _0x40b00b = [
        '4971425qdzdlx',
        'getRekap',
        'replace',
        'json',
        '12HypuJP',
        'findOne',
        'Kehadiran\x20Diperbarui.',
        'PPFej',
        'TambahGuruError',
        'getDate',
        'error',
        'query',
        'log',
        '../models/rekap',
        'rekap',
        'GuruEdited',
        'status',
        'getFullYear',
        'http400',
        'EditGuruError.',
        '16NEMacC',
        'BrKMo',
        'updateMany',
        'body',
        'filename',
        '351973sHhZxv',
        'getMonth',
        'getDaysInMonth',
        'wnuEe',
        'Guru',
        '20851337fIxdtw',
        'mKzKE',
        'add',
        '336cUwXYG',
        'GuruDeleted',
        'EYzgB',
        '324nxloIA',
        'aggregate',
        'AddGuruError',
        '2563ADLEkp',
        '89201gzCDOz',
        'http500',
        'EditGuruError',
        'Nunex',
        'push',
        'photos',
        'AttendanceUpdated:\x20No\x20Name\x20Provided',
        '../helper/httpResponse',
        'Guru\x20berhasil\x20dihapus.',
        'findByIdAndDelete',
        'toString',
        'xNWxm',
        'files',
        'remove',
        '__esModule',
        'DeleteGuruError.',
        '$rekap',
        '11650jLLgLB',
        'ytsRs',
        'AttendanceUpdated:\x20',
        '../models/guru',
        'Guru\x20berhasil\x20ditambahkan.',
        'AttendanceUpdateError',
        'getGuru',
        'defineProperty',
        '../helper/getDaysInMonth',
        '6753060lsMiFT',
        'edit',
        'emptyMonth',
        'GetGuruError.',
        'updateOne',
        'Rekap',
        'BtXxP',
        '/upload/',
        'WuCha',
        'day',
        'Guru\x20dengan\x20nama\x20yang\x20sama\x20ditemukan.',
        'Guru\x20berhasil\x20diubah.',
        '21192TNvlrK',
        'grCNX',
        'GuruAdded:\x20',
        '4DlcSBH'
    ];
    a1_0x3990 = function () {
        return _0x40b00b;
    };
    return a1_0x3990();
}
exports['presence'] = presence;
const remove = async (_0x401911, _0xb40f5a) => {
    const _0x11ba27 = a1_0x514234;
    try {
        const {
            id: _0x376a0d,
            name: _0x24edd8
        } = _0x401911[_0x11ba27(0x1df)];
        return await guru_1[_0x11ba27(0x1f1)][_0x11ba27(0x205)](_0x376a0d), await rekap_1[_0x11ba27(0x1c9)][_0x11ba27(0x1ea)]({}, { '$pull': { 'rekap': { 'name': _0x24edd8 } } }), console[_0x11ba27(0x1e0)](_0x11ba27(0x1f6)), _0xb40f5a['status'](0xc8)[_0x11ba27(0x1d7)]({
            ...success,
            'message': _0x11ba27(0x204)
        });
    } catch (_0x2c96ee) {
        return console[_0x11ba27(0x1de)](_0x11ba27(0x1b9), _0x2c96ee), (0x0, httpResponse_1['http500'])(_0xb40f5a);
    }
};
exports['remove'] = remove;
const edit = async (_0x1813fc, _0x43e3cf) => {
    const _0x484307 = a1_0x514234;
    try {
        const {
                _id: _0x1acc41,
                name: _0x52535e,
                oldName: _0x4e7325
            } = _0x1813fc[_0x484307(0x1eb)], _0x576224 = await guru_1[_0x484307(0x1f1)][_0x484307(0x1d9)]({ 'name': _0x52535e });
        if (_0x576224)
            return (0x0, httpResponse_1['http400'])(_0x43e3cf, _0x484307(0x1fe), _0x484307(0x1ce));
        return await guru_1[_0x484307(0x1f1)]['findByIdAndUpdate'](_0x1acc41, { '$set': { 'name': _0x52535e } }), await rekap_1[_0x484307(0x1c9)][_0x484307(0x1ea)]({}, { '$set': { 'rekap.$[a].name': _0x52535e } }, { 'arrayFilters': [{ 'a.name': _0x4e7325 }] }), console[_0x484307(0x1e0)](_0x484307(0x1e3)), _0x43e3cf['status'](0xc8)[_0x484307(0x1d7)]({
            ...success,
            'message': _0x484307(0x1cf),
            'data': {
                '_id': _0x1acc41,
                'name': _0x52535e
            }
        });
    } catch (_0x3f57c4) {
        return console[_0x484307(0x1de)](_0x484307(0x1e7), _0x3f57c4), (0x0, httpResponse_1[_0x484307(0x1fd)])(_0x43e3cf);
    }
};
exports[a1_0x514234(0x1c5)] = edit;