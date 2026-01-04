const userList = document.getElementById("user-list");

fetch('https://surveys-5jvt.onrender.com/api/users/')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(users => {
        users.forEach(user => {
            const row = document.createElement("div");
            row.classList.add("row");

            row.innerHTML = `
                <div>${user.id}</div>
                <div>${user.firstName}</div>
                <div>${user.lastName}</div>
                <div>${user.email}</div>
                <div>${user.password}</div>
            `;

            userList.appendChild(row);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
