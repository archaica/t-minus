var _ = require('lodash'),
    rAF = require('rAF'),
    moment = require('moment'),
    countdown = require('countdown'),
    momentCountdown = require('momentCountdown');
    // webcomponents = require('webcomponentsjs');

(function () {
    var titleEl = document.querySelector('h1.title'),
        countdownEl = document.querySelector('div.countdown-display'),
        timeEl = countdownEl.querySelector('div.time'),
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

      timeEl.innerHTML = display(data);

      // animate, or break the chain on 0
      if (!stop) {
        requestAnimationFrame(update, countdownEl);
      }
    }

    if (titleEl.classList) {
      titleEl.classList.add('animated', 'fadeInDown');
    } else {
      titleEl.className += ' ' + 'animated fadeInDown';
    }

    function animateTime() {
      if (timeEl.classList) {
        timeEl.classList.add('animated', 'fadeIn');
      } else {
        timeEl.className += ' ' + 'animated fadeIn';
      }
    }

    titleEl.addEventListener('webkitAnimationEnd', animateTime);
    titleEl.addEventListener('mozAnimationEnd', animateTime);
    titleEl.addEventListener('MSAnimationEnd', animateTime);
    titleEl.addEventListener('oanimationend', animateTime);
    titleEl.addEventListener('animationend', animateTime);

    update();
})();
