const getWord = async() => {
    const res = await fetch('/getword');
    const word =await res.text();

    document.getElementById('random-word').innerText = word;
}


const getUsers = async () => {
    const res = await fetch('/api/users');
    const users = await res.json();

    users.forEach(user => {
        const li =document.createElement('li');
        const text = document.createTextNode(`Name: ${user.name}  Email: ${user.email}`);
        li.appendChild(text);
        document.getElementById('users').appendChild(li);
    });
}



getWord();
getUsers();