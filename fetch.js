console.log("fetch.js loaded");

fetch("https://dummyjson.com/users")
    .then(res => {
        return res.json();
    })
    .then(data =>{
        // console.log(data);
        const users = data.users;
        console.log(users[1]);
        const userList = document.getElementById("user-list");
        userList.innerHTML = "";
        users.map(value =>{
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${value.id}</td>
                <td>${value.firstName} ${value.lastName}</td>
                <td>${value.email}</td>
                <td>${value.age}</td>
                <td>${value.company.name}</td>
                <td>${value.company.title}</td>
                <td>${value.phone}</td>
                <td>${value.university}</td>
            `;
            // Append the row to the user list
            userList.appendChild(row);
        })

    })
