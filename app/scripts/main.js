var $ = require('jquery'),
    _ = require('lodash'),
    rAF = require('rAF'),
    moment = require('moment'),
    countdown = require('countdown'),
    momentCountdown = require('momentCountdown');

$(document).ready(function onDomReady() {
    var $title = $('h1.title'),
        $countdown = $('.countdown-display'),
        $time = $countdown.find('.time'),
        stop = false,
        endDate = '2015-06-02',
        display = _.template(
          '<span class="segment days"><%= days %></span>:' +
          '<span class="segment hours"><%= hours %></span>:' +
          '<span class="segment minutes"><%= minutes %></span>:' +
          '<span class="segment seconds"><%= seconds %></span>:' +
          '<span class="segment milliseconds"><%= milliseconds %></span>'
        );

    function update() {
      var time, data;

      time = moment().countdown(
        endDate,
        countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS|countdown.MILLISECONDS
      );

      // check if we should stop
      stop = (time.days + time.hours + time.minutes + time.seconds + time.milliseconds) <= 0;

      // push results onto an array, pad zeros if needed
      // TODO: make this work if amount of days goes over 1000, not currently
      // concerned with a length over that time for this example
      data = {
        days: ('000' + time.days.toString()).slice(-3),
        hours: ('00' + time.hours.toString()).slice(-2),
        minutes: ('00' + time.minutes.toString()).slice(-2),
        seconds: ('00' + time.seconds.toString()).slice(-2),
        milliseconds: ('000' + time.milliseconds.toString()).slice(-3)
      };

      // console.log(display, time);
      $time.html(display(data));

      // animate, or break the chain on 0
      if (!stop) {
        requestAnimationFrame(update, $countdown);
      }
    }

    $title.addClass('animated fadeInDown');
    $title.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $time.addClass('animated fadeIn');
    });

    update();
});
