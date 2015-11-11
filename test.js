var _ = require("lodash");

exports.validateRows = function (workbook, sheets) {

    var valid = true;

    sheets = [sheets[0]];

    _.forEach(sheets, function (sheet,i) {

    var data = workbook.Sheets[sheet];
    var startRow = 3;
    var endRow = 50;

    var test = {
        A: new RegExp(/^[a-z]{1,2}$/gi),
        B: new RegExp(/^[a-z]{4}$/gi),
        C: new RegExp(/^[\w\s']{1,}$/gi),
        D: new RegExp(/^[\w\d]{4}$/gi),
        E: new RegExp(/^[\w]{1,}$/gi),
        F: new RegExp(/^[\w\s']{1,}$/gi),
        G: new RegExp(/^\d{1,2}$/gi),
        H: new RegExp(/^\d{1,2}$/gi),
        I: new RegExp(/^(\d{1,2}|na)$/gi),
        J: new RegExp(/^(\d{1,2}|na)$/gi),
        K: new RegExp(/^(\d{1,2}|na)$/gi),
        L: new RegExp(/^(\d{1,2}|na)$/gi),
        M: new RegExp(/^(\d{1,2}|na)$/gi),
        N: new RegExp(/^(\d{1,2}|na)$/gi),
        O: new RegExp(/^(\d{1,2}|na)$/gi)
    };

    for (var row = startRow; row <= endRow; ++row) {

        var ve = _.trim(data["A"+row].v);
        ve = ve.replace(/\s/g, "");
        ve = ve.replace(/\n/g, "");
        console.log(ve);
        var t = test.A.test(ve);
        if(t == false){
            console.log("Skipping Row: " + row + " - Value Tested: " + ve + " - Test: " + test.A + " - Test Result: " + t);
            continue;
        }

        for (var i = 65; i <= 79; ++i) {

            var letter = String.fromCharCode(i);
            //var tst = test[letter];
            var cell = letter + row;
            console.log(letter);
            var value = _.trim(data[cell].v);
            value = value.replace(/\s/g, "");
            value = value.replace(/\n/g, "");
            console.log(value);
            if (test[letter].test(value) == false) {
                valid = false;
                console.log("Invalid Cell - Sheet: " + sheet + " - Cell: " + cell + " - Value: " + value + " - " + test[letter] + " - " + test[letter].test(value));
            }

        }

    }
    });

    return valid;

};
