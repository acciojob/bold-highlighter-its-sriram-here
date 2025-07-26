function highlight() {
    //Write your code here
cosnt boldwords = document.querySelectorall('strong');
	boldWords.forEach(word => {
		word.style.color = 'rgb(0,128,0)';
	});

}

function return_normal() {
  const strongs = document.querySelectorAll('strong');
  strongs.forEach(el => {
    el.style.color = 'rgb(0, 0, 0)';
  });
}


    
}
