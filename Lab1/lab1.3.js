document.getElementById('get-joke').addEventListener('click', function() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        const jokeContentElement = document.getElementById('joke-content');
        jokeContentElement.textContent = `${data.setup} ${data.punchline}`;
      })
      .catch(error => {
        console.log('Error fetching joke:', error);
      });
  });
  