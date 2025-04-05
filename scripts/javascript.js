<script>
    function showConfirmation(event) {
        event.preventDefault();
        alert("Your information has been successfully received!");
    }

    document.getElementById("schoolForm").onsubmit = showConfirmation;
    document.getElementById("volunteerForm").onsubmit = showConfirmation;
    document.getElementById("consentForm").onsubmit = showConfirmation;
</script>

</body>
</html> 
