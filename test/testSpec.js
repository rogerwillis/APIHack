describe("displaymsg", function () {

    it("Should display a message when btn is clicked and input...", function () {

        $(".btn-submit").on('click');
        expect($('.results')).toHaveText('Wrong, something is!!! Put some text in sir!!! Hmmmmmm.');

    });
});