document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    let noBtnCount = 0;
    let yesBtnSize = 1;

    yesBtn.addEventListener('click', () => {
        response.innerHTML = "Yay! I'm so happy! ❤️";
        response.style.color = "#ff4081";
        noBtn.style.display = 'none'; // Hide the No button
        yesBtn.disabled = true;
        
        // Show SweetAlert with gif and date
        Swal.fire({
            title: 'It\'s a Date! ❤️',
            text: 'February 16, 2025',
            imageUrl: 'assets/bubuhugs.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Cute love gif',
            confirmButtonText: 'Looking forward to it! 😊',
            confirmButtonColor: '#ff4081',
            background: '#fff',
            customClass: {
                popup: 'swal-custom',
                title: 'swal-title',
                confirmButton: 'swal-button'
            }
        });
    });

    noBtn.addEventListener('mouseover', (e) => {
        noBtnCount++;
        
        // Get Yes button's position and dimensions
        const yesBtnRect = yesBtn.getBoundingClientRect();
        let x, y;
        
        // Keep trying new positions until we find one that doesn't overlap
        do {
            x = Math.random() * (window.innerWidth - e.target.offsetWidth);
            y = Math.random() * (window.innerHeight - e.target.offsetHeight);
            
            // Check if new position would overlap with Yes button
            const wouldOverlap = (
                x < yesBtnRect.right && 
                x + e.target.offsetWidth > yesBtnRect.left && 
                y < yesBtnRect.bottom && 
                y + e.target.offsetHeight > yesBtnRect.top
            );
            
            if (!wouldOverlap) break;
        } while (true);
        
        // Apply the new position
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        
        // Increase Yes button size
        yesBtnSize += 0.2;
        yesBtn.style.transform = `scale(${yesBtnSize})`;
        
        if (noBtnCount > 5) {
            response.innerHTML = "Come on, you know you want to say yes! 😊";
        }
    });
});
