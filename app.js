const randomUser = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
    .then(data => ShowImg(data))
}
randomUser();
const img = document.getElementById('profile-Img');
const names = document.getElementById('value')
const tittle = document.getElementById('name');
const ShowImg = (name) => {
    const values = name.results
    for (const value of values) {
        console.log(value)
        img.src = value.picture.medium;
        // name.innerText = value.
        names.innerText = `${value.name.first} ${value.name.last}`
        document.getElementById('person').addEventListener('mouseenter', () => {
            tittle.innerText =`Hi, My name is`
            names.innerText = `${value.name.first} ${value.name.last}`
        })
        document.getElementById('email').addEventListener('mouseenter', () => {
            tittle.innerText = `My email address is`
            names.innerText = `${value.email}`
        })
        document.getElementById('calender').addEventListener('mouseenter', () => {
            tittle.innerText = `My birthday is`
            names.innerText = `${value.dob.date.slice(0,10)}`
        })
        document.getElementById('map').addEventListener('mouseenter', () => {
            tittle.innerText = `My address is`
            names.innerText = `${value.location.state}`
        })
        document.getElementById('phone').addEventListener('mouseenter', () => {
            tittle.innerText = `My phone number is`
            names.innerText = `${value.phone}`
        })
        document.getElementById('pass').addEventListener('mouseenter', () => {
            tittle.innerText = `My password is`
            names.innerText = `${value.login.password}`
        })
    }
}
