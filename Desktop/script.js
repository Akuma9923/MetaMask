document.addEventListener('DOMContentLoaded', function() {
    // Example of a function for settings button
    const settingsButton = document.querySelector('.btn-settings');
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            alert('Settings button clicked!');
            // Add your custom settings functionality here
        });
    }
});
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MetaMask</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script> <!-- Include JavaScript file -->
</head>
<body>
    <header>
        <div class="container">
            <h1><a href="#">MetaMask</a></h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Settings</a></li> <!-- New settings link -->
                </ul>
            </nav>
        </div>
    </header>
    <section class="hero">
        <div class="container">
            <h2>A crypto wallet & gateway to blockchain apps</h2>
            <p>MetaMask is the leading self-custodial wallet. The key to web3. Available as a browser extension and mobile app.</p>
            <a href="#" class="btn">Download Now</a>
            <a href="#" class="btn btn-settings">Settings</a> <!-- New settings button -->
        </div>
    </section>
    <section class="features">
        <div class="container">
            <h2>Features</h2>
            <div class="feature">
                <h3>Security</h3>
                <p>Protect your funds with the most advanced security technologies.</p>
            </div>
            <div class="feature">
                <h3>Ease of Use</h3>
                <p>Intuitive interface for quick and efficient management of your assets.</p>
            </div>
            <div class="feature">
                <h3>Compatibility</h3>
                <p>Compatible with all major platforms for a seamless experience.</p>
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <p>&copy; 2024 MetaMask. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MetaMask Clone</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="scripts.js"></script>
</head>
<body>
    <!-- ... rest of your HTML ... -->
</body>
</html>
