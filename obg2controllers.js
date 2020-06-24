// controller

        function yourChosenBar(barNo){
        if (chosenBar == barNo) {chosenBar = null;}
        else {chosenBar = barNo;}
        show();
        }

        function removeBar(barNo){
        if(yourChosenBar) {numbers.splice(yourChosenBar -1, 1);}
        show();
        }

        function addBar(inputValue) {
        if (inputValue > 0 && inputValue <= 10) {numbers.push(inputValue);}
        else {alert("Hey, you gotta pick a number between 1 and 10, buddy!");}
        show();
        }

        function changingBar(){
        //check what the hecking heck i do here for the love of all things holy halp
        show();
        }