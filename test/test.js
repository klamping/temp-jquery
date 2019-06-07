describe('the test', function () {
    it('should work', function () {
        browser.url('http://srufaculty.sru.edu/david.dailey/javascript/frames/objectTest.html')
        browser.execute(`function l(u, i) { var d = document; if (!d.getElementById(i)) { var s = d.createElement('script'); s.src = u; s.id = i; d.body.appendChild(s); } } l('//code.jquery.com/jquery-3.2.1.min.js', 'jquery')`);

        // needed to wait for jQuery to load on the page. Could do a lot better method to detect if jQuery is loaded but i'm out of time
        browser.pause(1000);

        browser.execute(`jQuery(document.getElementById('em').getSVGDocument().querySelector('rect')).click()`)
        browser.debug();
    })
})