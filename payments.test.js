describe("Set up and tear-down of Payments test", () => {
    // set up standard 20%
    beforeEach(() => {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should add a new payment to allPayments on submitPaymentinfo()', () => {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(Object.keys(allPayments['payment1'].billAmt).toEqual('100'));
        expect(Object.keys(allPayments['payment1'].tipAmt).toEqual('20'));
        expect(Object.keys(allPayments['payment1'].tipPercent).toEqual('20'));
    });

    it('should not add a new payment on submitPaymentInfo() with empty input', () => {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });
    it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTableList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTableist.length).toEqual(4);
        expect(curTableList[0].innerText).toEqual('$100');
        expect(curTableList[1].innerText).toEqual('$20');
        expect(curTableList[2].innerText).toEqual('%20');
        expect(curTableList[3].innerText).toEqual('X');
    });

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }

        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});
