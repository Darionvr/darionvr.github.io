const notifications = [
    {
        profilePic: 'assets/images/avatar-mark-webber.webp',
        name: 'Mark Webber',
        action: 'reacted to your recent post',
        comment: 'My first tournament today!',
        date: '1m ago',
        postPic: '',
        post: '',
        read: true,
    },
    {
        profilePic: 'assets/images/avatar-angela-gray.webp',
        name: 'Angela Gray',
        action: 'followed you',
        comment: '',
        postPic: '',
        date: '5m ago',
        post: '',
        read: true,
    },
    {
        profilePic: 'assets/images/avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        action: 'has joined your group',
        comment: 'Chess Club',
        date: ' 1 day ago',
        postPic: '',
        post: '',
        read: true,
    },
    {
        profilePic: 'assets/images/avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        action: 'sent you a private message',
        comment: '',
        date: ' 5 days ago',
        postPic: '',
        post: 'Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.',
        read: false,


    },
    {
        profilePic: 'assets/images/avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        action: 'commented on your picture ',
        comment: '',
        date: '1 week ago',
        postPic: 'assets/images/image-chess.webp',
        read: false,
        post: '',
    },
    {
        profilePic: 'assets/images/avatar-nathan-peterson.webp',
        name: 'Nathan Peterson',
        action: 'reacted to your recent post',
        comment: '5 end-game strategies to increase your win rate',
        date: ' 2 weeks ago',
        postPic: '',
        read: false,
        post: '',
    },
    {
        profilePic: 'assets/images/avatar-anna-kim.webp',
        name: 'Anna Kim ',
        action: 'left the group',
        comment: 'Chess Club',
        date: '  2 weeks ago',
        postPic: '',
        read: false,
        post: '',
    },
];

const main = document.querySelector('main');
const navBar = document.querySelector('nav');
const mark = document.querySelector('.mark');


unRead = (read) => {
    if (read === false) {
        return `<span class="redDot" style="display: none;">●</span>`
    } else {
        return `<span class="redDot">●</span>`
    }
}


postPictures = (postPic) => {
    if (postPic === '') {
        return `<img style="display: none;">`
    } else {
        return `<img src=${postPic}>`
    };
};

postComments = (post) => {
    if (post === '') {
        return `<div class="post" style="display: none;"></div>`
    } else {
        return `<div class="post">${post}</div>`
    };
};




function renderNotifications() {
    main.innerHTML = '';
    for (let notification of notifications) {
        const planilla = `
    <div class="card">
      <div class="profilePic"><img src=${notification.profilePic} > </div>
      <div class="message">
        <p><span class="name"> ${notification.name} </span> <span class="notification"> ${notification.action}  </span>
        <span class="comment">${notification.comment}</span> ${unRead(notification.read)}

        </p>
        <p class="date"> ${notification.date} </p>
        <div> ${postComments(notification.post)} </div> 
        <div class="postPicture"> ${postPictures(notification.postPic)}</div>
      </div>

    </div>
`;
        main.innerHTML += planilla
    }
};

function updateNav() {
    const unReadmessages = notifications.filter(notification => notification.read === true);
    navBar.innerHTML = `
    <p class="bold"> Notifications<span class="number"> ${unReadmessages.length}</span></p>
    <p class="mark" onclick="markAsRead()"> Mark all as read</p>`;
}


function markAsRead() {
    notifications.forEach(notification => notification.read = false);
    renderNotifications();
    updateNav();
};


renderNotifications();
updateNav();
