// 1. Enregistrement du Service Worker (votre code)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log("Service Worker enregistré avec succès !", reg.scope))
            .catch(err => console.warn("Échec de l'enregistrement du Service Worker", err));
    });
}

// 2. Gestion de l'interface et du statut de connexion
document.addEventListener('DOMContentLoaded', () => {
    const statusDisplay = document.getElementById('status');

    function updateOnlineStatus() {
        if (navigator.onLine) {
            statusDisplay.textContent = "✅ Vous êtes en ligne";
            statusDisplay.style.background = "#e7f3ef";
            statusDisplay.style.color = "#2e7d32";
        } else {
            statusDisplay.textContent = "📡 Mode hors-ligne (chargé depuis le cache)";
            statusDisplay.style.background = "#fff3e0";
            statusDisplay.style.color = "#ef6c00";
        }
    }

    // Écouter les changements de connexion
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Appel initial
    updateOnlineStatus();
});
