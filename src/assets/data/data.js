export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Hanif Abubakar',
            child: 'Putra ke 1',
            father: 'Muji Raharjo',
            mother: 'Arminah',
            image: './src/assets/images/cowo.jpeg'
        },
        P: {
            id: 2,
            name: 'Asriwati',
            nickname: 'Asri',
            child: 'Putri ke 2',
            father: 'Karsono',
            mother: 'Suwiyah',
            image: './src/assets/images/cewe.jpeg'
        },

        couple: './src/assets/images/cover.jpg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Desember',
            date: '21',
            day: 'Senin',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Desember',
            date: '21',
            day: 'Senin',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Lorem, RT 000/ RW 000, Desa.Lorem, Kec.Ipsum, Kab.Lorem, Lorem (1234)'
    },

    link: {
        calendar: 'https://calendar.app.google/w3tfUT9WoRmWhQdH6',
        map: 'https://maps.app.goo.gl/2bfC7Zr2ztMaqqrg6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpeg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpeg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpeg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpeg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpeg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Hanif Abubakar',
            icon: './src/assets/images/ma.png',
            rekening: '1800016498992'
        },
        {
            id: 2,
            name: 'Asriwati',
            icon: './src/assets/images/bca.png',
            rekening: '8731046883'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxduhb1Xu1yEgjbBtNbVjW8uQYTN5_oT3O2apF2_mYQpep0KZXfdHrIBmHVPi5dv4Jl/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
