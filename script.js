//your JS code here. If required.
  document.addEventListener('DOMContentLoaded', function () {
	   const counterParagraph = document.getElementById('counter');
            const incrementButton = document.getElementById('incrementBtn');
	         incrementButton.addEventListener('click', function () {
				 let currentValue = parseInt(counterParagraph.textContent);
				     alert( currentValue);
				  currentValue += 1;
				      counterParagraph.textContent = currentValue;
            });
        });