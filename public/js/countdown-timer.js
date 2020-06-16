                document.getElementById('linker').classList.add('desativar');
const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countDown = new Date('May 21, 2020 10:53:00').getTime(),
            x = setInterval(function () {

                let now = new Date().getTime(),
                    distance = countDown - now;

                var days = Math.floor(distance / (day));
                var hours = Math.floor((distance % (day)) / (hour));
                var minutes = Math.floor((distance % (hour)) / (minute));
                var seconds = Math.floor((distance % (minute)) / second);
                var daysStr = "";
                var hoursStr = "";
                var minutesStr = "";
                var secondsStr = "";
                if (days / 10 >= 1) {
                    daysStr = days;
                }
                else {
                    daysStr = "0" + days;
                }

                if (hours / 10 >= 1) {
                    hoursStr = hours;
                }
                else {
                    hoursStr = "0" + hours;
                }

                if (minutes / 10 >= 1) {
                    minutesStr = minutes;
                }
                else {
                    minutesStr = "0" + minutes;
                }

                if (seconds / 10 >= 1) {
                    secondsStr = seconds;
                }
                else {
                    secondsStr = "0" + seconds;
                }
                document.getElementById('linker').classList.remove('desativar');
                $('.loader').css('display', 'none');
                document.getElementById('days').innerHTML = daysStr;
                document.getElementById('hours').innerHTML = hoursStr;
                document.getElementById('minutes').innerHTML = minutesStr;
                document.getElementById('seconds').innerHTML = secondsStr;
                // document.getElementById('days').innerText = Math.floor(distance / (day)),
                //     document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                //     document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                //     document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById('text-countdown').innerHTML = 'Sua consulta começou!';
                    document.getElementById('elements_clock').classList.add('desativar');
                    document.getElementById('teste_botao').classList.remove('desativar');
                    document.getElementById('linker').href = "/public/html/consulta.html";
                }
                else{
                    document.getElementById('text-countdown').innerHTML = 'Sua consulta começará em:';
                }

            }, second)
