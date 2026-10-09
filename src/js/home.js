import {data} from "../assets/data/data.js";
import {monthNameToNumber} from "../utils/helper.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const [_, figureElement, timeElement, homeTime, calendarAnchor] = homeContainer.children;

    const generateFigureContent = ({bride}) => {
        const {L: {name: brideLName}, P: {nickname: bridePNickname}, couple: coupleImage} = bride;
        return `
            <img src="${coupleImage}" alt="couple animation">
            <figcaption>
                ${brideLName.split(' ')[0]} & ${bridePNickname}
            </figcaption>`;
    };

    const generateTimeContent = ({time}) => {
        const {year, month, date, day} = time.marriage;
        return `
        <time datetime="${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}">
            ${day}, ${date} ${month} ${year}
        </time>`;
    };

    const generateCountdownMarkup = (days, hours, minutes, seconds) => {
        return `<div>
                    <p>${days}<br><span>Hari</span></p>
                </div>
                <div>
                    <p>${hours}<br><span>Jam</span></p>
                </div>
                <div>
                    <p>${minutes}<br><span>Menit</span></p>
                </div>
                <div>
                    <p>${seconds}<br><span>Detik</span></p>
                </div>`;
    };

    const updateCountdown = (endTime, homeTime) => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(intervalId);
            homeTime.innerHTML = generateCountdownMarkup(0, 0, 0, 0);
        } else {
            homeTime.innerHTML = generateCountdownMarkup(days, hours, minutes, seconds);
        }
    };

    const startCountdown = (homeTime, timeData) => {
        const {year, month, date} = timeData.marriage;
        const endTime = new Date(`${String(year)}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}T00:00:00`);

        updateCountdown(endTime, homeTime);
        setInterval(() => updateCountdown(endTime, homeTime), 1000);
    };

    const initializeHome = () => {
        const {bride, time, link} = data;
        figureElement.innerHTML = generateFigureContent({bride});
        timeElement.innerHTML = generateTimeContent({time});
        calendarAnchor.href = link.calendar;
        startCountdown(homeTime, time);
    };

    initializeHome();
};

// 1. Otomatis mengisi kotak input dengan URL website saat ini ketika halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    const shareInput = document.getElementById('shareLink');
    if (shareInput) {
        shareInput.value = window.location.href;
    }
});

// 2. Fungsi untuk menyalin link ke memori perangkat
function copyToClipboard() {
    const shareInput = document.getElementById('shareLink');
    if (!shareInput) return;
    
    shareInput.select();
    shareInput.setSelectionRange(0, 99999); // Untuk mendukung perangkat mobile
    
    navigator.clipboard.writeText(shareInput.value).then(() => {
        alert("Link undangan berhasil disalin!");
    }).catch(err => {
        console.error('Gagal menyalin text: ', err);
    });
}

// 3. Fungsi untuk membagikan pesan dan link langsung ke WhatsApp
function shareToWhatsApp() {
    const currentUrl = window.location.href;
    const pesan = `Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami. Berikut link undangannya:\n\n${currentUrl}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir. Terima kasih.`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(pesan)}`;
    window.open(whatsappUrl, '_blank');
}