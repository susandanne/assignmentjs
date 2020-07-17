
        function feetToMile(feet) {
            var mile = (feet / 5280);
            return mile;
        };
        var convert = feetToMile(10560);
        console.log(convert);

        function woodCalculator(table, khat, chair) {
            var countTable = table * 3;
            var countKhat = khat * 5;
            var countChair = chair * 1;

            var total = countTable + countKhat + countChair;
            return total;
        }
        var calculator = woodCalculator(1, 1, 1);
        console.log(calculator);

        function tinyFriend(numbers) {
            var largest = numbers[0];
            for (var i = 0; i < numbers.length; i++) {
                var currentnumber = numbers[i];
                if (currentnumber > numbers) {
                    largest = currentnumber;
                }
            }
            return largest;
        }
        var t = tinyFriend('jjjjj', 'hhh', 'uuu')
        console.log(t);

        function brickCalculator() {


        }