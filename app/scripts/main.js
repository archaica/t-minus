var $ = require('jquery'),
    _ = require('lodash'),
    rAF = require('rAF'),
    moment = require('moment'),
    countdown = require('countdown'),
    momentCountdown = require('momentCountdown');

$(document).ready(function onDomReady() {
    var $countdown = $('.countdown-display');
    // var now = moment();

    function update() {

      var time = moment().countdown('2015-06-02');
      console.log(time);
    }

    update();
    // $countdown.
});
