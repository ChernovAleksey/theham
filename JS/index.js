// -------------OUR SERVICES-------------
// JS tabs engine
const chooseTab = (tabMark) => {
    document.querySelector('.isActive').classList.remove('isActive');
    document.querySelector(`.tab.${tabMark}`).classList.add("isActive");
};
document.querySelectorAll(".tabs-nav div").forEach(div => {
    div.addEventListener("click", event => {
        document.querySelector('.is-active').classList.remove('is-active');
        event.target.classList.add("is-active");
        chooseTab(event.target.dataset.tabname)
    })
});
// ----------AMAZING WORK---------
// array of images fo amazing work
const amazingImagesArray = [
'<img class="graphic" src="img/amazing/graphic1.jpg" alt="Graphic Design">',
'<img class="amaz" src="img/amazing/web1.jpg" alt="Web Design">',
'<img class="amaz" src="img/amazing/word1.jpg" alt="Wordpress">',
'<img class="amaz" src="img/amazing/graphic2.jpg" alt="Graphic Design">',
'<img class="amaz" src="img/amazing/landing1.jpg" alt="Landing Pages">',
'<img class="amaz" src="img/amazing/web2.jpg" alt="Web Design">',
'<img class="amaz" src="img/amazing/landing2.jpg" alt="Landing Pages">',
'<img class="amaz" src="img/amazing/word2.jpg" alt="Wordpress">',
'<img class="amaz" src="img/amazing/graphic3.jpg" alt="Graphic Design">',
'<img class="amaz" src="img/amazing/web3.jpg" alt="Web Design">',
'<img class="amaz" src="img/amazing/landing3.jpg" alt="Landing Pages">',
'<img class="amaz" src="img/amazing/word3.jpg" alt="Wordpress">',
'<img class="amaz" src="img/amazing/graphic4.jpg" alt="Graphic Design">',
'<img class="amaz" src="img/amazing/web4.jpg" alt="Web Design">',
'<img class="amaz" src="img/amazing/landing4.jpg" alt="Landing Pages">',
'<img class="amaz" src="img/amazing/word4.jpg" alt="Wordpress">',
'<img class="amaz" src="img/amazing/graphic5.jpg" alt="Graphic Design">',
'<img class="amaz" src="img/amazing/web5.jpg" alt="Web Design">',
'<img class="amaz" src="img/amazing/landing5.jpg" alt="Landing Pages">',
'<img class="amaz" src="img/amazing/word5.jpg" alt="Wordpress">',
'<img class="amaz" src="img/amazing/graphic6.jpg" alt="Graphic Design">',
'<img class="amaz" src="img/amazing/web6.jpg" alt="Web Design">',
'<img class="amaz" src="img/amazing/landing6.jpg" alt="Landing Pages">',
'<img class="amaz" src="img/amazing/word6.jpg" alt="Wordpress">',];
const amazingArrToShow = [];
let showImageString = '';
let numberOfImages = 12;
// function for the generation of the group of the photos with given number of items
const showAmazingImagesNumber = (numberOfImages) => {
    amazingArrToShow.length = 0;
    showImageString = '';
    document.querySelector('.amazingimages').innerHTML = '';
    for (let i = 0; i <= numberOfImages - 1; i++) {
        amazingArrToShow[i] = `<div class="windowofamazingimage">
                                    <div class="amazingimage">${amazingImagesArray[i]}</div>
                                    <div class="hiddenpartamazingwindow">
                                    <div class="amazingsvg">
                                    <div class="amazingsvgleft">
                                    <div class="amazingsvg1">
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                    fill="#1FDAB5" />
                                    </svg>
                                    </div>
                                    <div class="amazingsvg2">
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="#18CFAB" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                    fill="white" />
                                    </svg>
                                    </div>
                                    </div>
                                    <div class="amazingsvgright">
                                    <div class="amazingsvg1"> 
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.5973 0.997952C31.8653 0.997952 40.9999 9.95227 40.9999 20.9979C40.9999 32.0432 31.8653 40.9979 20.5973 40.9979C9.3292 40.9979 0.194626 32.0432 0.194626 20.9979C0.194626 9.95227 9.3292 0.997952 20.5973 0.997952Z"
                                    fill="none" />
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <rect x="15" y="16" width="12" height="12" fill="#18CFAB" />
                                    </svg>
                                    </div>
                                    <div class="amazingsvg2">
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="#18CFAB" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.5973 0.997952C31.8653 0.997952 40.9999 9.95227 40.9999 20.9979C40.9999 32.0432 31.8653 40.9979 20.5973 40.9979C9.3292 40.9979 0.194626 32.0432 0.194626 20.9979C0.194626 9.95227 9.3292 0.997952 20.5973 0.997952Z"
                                    fill="#18CFAB" />
                                    <rect x="15" y="16" width="12" height="12" fill="white" stroke="#18CFAB" />
                                    </svg>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="hiddamazwindmessage">CREATIVE DESIGN</div>
                                    <div class="altnameamazimage">${amazingImagesArray[i].slice(amazingImagesArray[i].lastIndexOf('="') + 2, -2)}</div>
                                    </div>
                                    </div>`;
    }
    showImageString = amazingArrToShow.join('');
    document.querySelector('.amazingimages').insertAdjacentHTML('afterBegin', showImageString)
};
// function for the generation of the group of the photos with given types of items
const showAmazingImagesType = (name) => {
    amazingArrToShow.length = 0
    showImageString = '';
    document.querySelector('.amazingimages').innerHTML = ''
    amazingImagesArray.forEach((item, index) => {       
        if (item.includes(name) && index < numberOfImages) {
            amazingArrToShow.push(`<div class="windowofamazingimage">
                                    <div class="amazingimage">${item}</div>
                                    <div class="hiddenpartamazingwindow">
                                    <div class="amazingsvg">
                                    <div class="amazingsvgleft">
                                    <div class="amazingsvg1">
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                    fill="#1FDAB5" />
                                    </svg>
                                    </div>
                                    <div class="amazingsvg2">
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="#18CFAB" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                    fill="white" />
                                    </svg>
                                    </div>
                                    </div>
                                    <div class="amazingsvgright">
                                    <div class="amazingsvg1"> 
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.5973 0.997952C31.8653 0.997952 40.9999 9.95227 40.9999 20.9979C40.9999 32.0432 31.8653 40.9979 20.5973 40.9979C9.3292 40.9979 0.194626 32.0432 0.194626 20.9979C0.194626 9.95227 9.3292 0.997952 20.5973 0.997952Z"
                                    fill="none" />
                                    <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
                                    <rect x="15" y="16" width="12" height="12" fill="#18CFAB" />
                                    </svg>
                                    </div>
                                    <div class="amazingsvg2">
                                    <svg width="44" height="43" viewBox="0 0 44 43" fill="#18CFAB" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.5973 0.997952C31.8653 0.997952 40.9999 9.95227 40.9999 20.9979C40.9999 32.0432 31.8653 40.9979 20.5973 40.9979C9.3292 40.9979 0.194626 32.0432 0.194626 20.9979C0.194626 9.95227 9.3292 0.997952 20.5973 0.997952Z"
                                    fill="#18CFAB" />
                                    <rect x="15" y="16" width="12" height="12" fill="white" stroke="#18CFAB" />
                                    </svg>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="hiddamazwindmessage">CREATIVE DESIGN</div>
                                    <div class="altnameamazimage">${item.slice(item.lastIndexOf('="') + 2, -2)} </div>
                                    </div></div>`)
        }
    })
    showImageString = amazingArrToShow.join('');
    document.querySelector('.amazingimages').insertAdjacentHTML('afterBegin', showImageString)
};
// generation of the original group of the photo-items
showAmazingImagesNumber(12);
//generation of the button 'load more' in the amazing work section footer
document.querySelector('.amazingimages').insertAdjacentHTML('afterEnd', `<button class="amazingloadmore"> <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 6.99742H9.99996V1.49795C9.99996 1.22201 9.77611 0.997314 9.49998 0.997314H6.4999C6.22387 0.997314 5.99991 1.22201 5.99991 1.49795V6.99742H0.499994C0.223838 6.99742 7.62939e-06 7.22213 7.62939e-06 7.49847V10.4977C7.62939e-06 10.7732 0.223838 10.9975 0.499994 10.9975H5.99991V16.4978C5.99991 16.7733 6.22387 16.998 6.4999 16.998H9.49998C9.77611 16.998 9.99996 16.7733 9.99996 16.4978V10.9975H15.5C15.776 10.9975 16 10.7732 16 10.4977V7.49847C16 7.22213 15.776 6.99742 15.5 6.99742Z" fill="white"/>
</svg> <p>LOAD MORE</p></button>`);
// LISTENERS   
// main listener for tabs in amazing work section
document.querySelector('.amazing-tabs').addEventListener('click', (event) => {
    document.querySelector('.amazing-tabs .is-active')?.classList.remove('is-active');
    event.target.classList.add('is-active')
    switch (event.target.dataset.tabname) {
        case 'all':
            showAmazingImagesNumber(numberOfImages);
            break;
        case 'graphic':
            showAmazingImagesType('graphic')
            break;
        case 'web':
            showAmazingImagesType('web')
            break;
        case 'landing':
            showAmazingImagesType('landing')
            break;
        case 'word':
            showAmazingImagesType('word')
            break;
    }
});
//listener for 'load more button' in amazing work section
document.querySelector('.amazingloadmore').addEventListener('click', () => { 
    numberOfImages = 24;
    showAmazingImagesNumber(numberOfImages);
    document.querySelector('.amazingloadmore').remove();
    document.querySelector('.amazing-tabs .is-active').classList.remove('is-active');
    document.querySelector('.firstamazing').classList.add('is-active');
})
//-------------BREAKING NEWS-----------------
//array for month description
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
//generation of the breaking news wrapper
const breakingArray = [];
for (let i = 1; i <= 8; i++) {
    breakingArray.push(`
<a href="#">
<div class="breakingimage">
    <div class="breakingdata">
    <div>${new Date().getDate()}</div>
    <div>${month[new Date().getMonth()]}</div>
    </div>
    <img src="img/breaking/Image${i}.jpg" alt="breakingnews">
    <div class="breakinginfo">
        <div class="breakingblog">Amazing Blog Post</div>
        <div class="breakingbyadmin">By admin    |    2 comment</div>
    </div>
</div>
</a>`)
}
showBreakingString = breakingArray.join('');
document.querySelector('.breakingnewsimages').insertAdjacentHTML('afterBegin', showBreakingString);
//-----------------WHAT PEOPLE SAY-----------------------
// array of the speakers
const whatPeopleSayFaces = [
'<div class="wpsspeaker" id="f1" data-speaker="box1"><img class="miniphotospeaker" src="img/faces/speaker1.jpg" alt="speaker1"></div>',
'<div class="wpsspeaker" id="f2" data-speaker="box2"><img class="miniphotospeaker" src="img/faces/speaker2.jpg" alt="speaker2"></div>',
'<div class="wpsspeaker" id="f3" data-speaker="box3"><img class="miniphotospeaker" src="img/faces/speaker3.jpg" alt="speaker3"></div>',
'<div class="wpsspeaker" id="f4" data-speaker="box4"><img class="miniphotospeaker" src="img/faces/speaker4.jpg" alt="speaker4"></div>',
'<div class="wpsspeaker" id="f5" data-speaker="box5"><img class="miniphotospeaker" src="img/faces/speaker5.jpg" alt="speaker5"></div>',
];
//main variables
let markerOfActive = '';
let firstFace = 0;
let lastFace = 3;
let activeFaceBox = 0;
let position1 = 0;
let position2 = 1;
let position3 = 2;
let position4 = 3;
//main function
const whatPeopleActivation = (activeFaceBox, position1, position2, position3, position4) => {
    document.querySelector('.whatpeoplesaymain').innerHTML = '';
    document.querySelector('.wpsitem.activephrase').classList.remove('activephrase');
    document.querySelector('.wpsspeaker.activespeakerimage')?.classList.remove('activespeakerimage');
    document.querySelector('.whatpeoplesaymain').insertAdjacentHTML('afterBegin', `${whatPeopleSayFaces[position1]}${whatPeopleSayFaces[position2]}${whatPeopleSayFaces[position3]}${whatPeopleSayFaces[position4]}`);
    markerOfActive = document.querySelector(`#f${activeFaceBox + 1}`).dataset.speaker;
    document.querySelector(`.wpsitem.${markerOfActive}`).classList.add('activephrase');
    document.querySelector(`#f${activeFaceBox + 1}`).classList.add('activespeakerimage');
};
// carousel arrangement
whatPeopleActivation(activeFaceBox, position1, position2, position3, position4);
//listeners
//left-arrow listener
document.querySelector('.activefaceleft').addEventListener('click', () => {
    if (firstFace === activeFaceBox) {
        firstFace--;
        lastFace--;
        activeFaceBox--;
        activeFaceBox = activeFaceBox < 0 ? 4 : activeFaceBox;
        firstFace = firstFace < 0 ? 4 : firstFace;        
        lastFace = lastFace < 0 ? 4 : lastFace;        
        position1 = firstFace > 4 ? 0 : firstFace;        
        position2 = position1 === 4 ? 0 : position1 + 1;        
        position3 = position2 === 4 ? 0 : position2 + 1;        
        position4 = position3 === 4 ? 0 : position3 + 1;        
    } else {
        activeFaceBox = activeFaceBox === 0 ? 4 : activeFaceBox - 1;       
    };
    whatPeopleActivation(activeFaceBox, position1, position2, position3, position4);
});
//rightt-arrow listener
document.querySelector('.activefaceright').addEventListener('click', () => {
    if (activeFaceBox === lastFace) {
        lastFace++;
        firstFace++;
        activeFaceBox++;
        activeFaceBox = activeFaceBox > 4 ? 0 : activeFaceBox;
        firstFace = firstFace > 4 ? 0 : firstFace;  
        lastFace = lastFace > 4 ? 0 : lastFace;     
        position1 = lastFace < 3 ? lastFace + 2 : lastFace - 3;   
        position2 = position1 === 4 ? 0 : position1 + 1;        
        position3 = position2 === 4 ? 0 : position2 + 1;        
        position4 = position3 === 4 ? 0 : position3 + 1;   
    } else {
        activeFaceBox = activeFaceBox === 4 ? 0 : activeFaceBox + 1;
    };
    whatPeopleActivation(activeFaceBox, position1, position2, position3, position4);
});
//mouse-clicker listener
document.querySelector('.whatpeoplesaymain').addEventListener('click', (event) => {
    if (event.target.classList.contains("miniphotospeaker")) {
        activeFaceBox = +event.target.alt.slice(7) - 1;
    };
    whatPeopleActivation(activeFaceBox, position1, position2, position3, position4);
});

