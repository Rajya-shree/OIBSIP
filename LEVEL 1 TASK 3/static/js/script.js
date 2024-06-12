document.addEventListener('DOMContentLoaded', function() {
    // Update time
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        document.getElementById('time').innerText = `${hours}:${minutes}`;
    }

    updateTime();
    setInterval(updateTime, 60000); // Update time every minute

    // Handle form submission
    document.getElementById('converter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const degrees = document.getElementById('degrees').value;
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;

        fetch('/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ degrees, from, to })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Result: ${data.result}`;
        });
    });
});
