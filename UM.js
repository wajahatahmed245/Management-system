function gettingUmInput() {
    var loginUm = document.getElementById("usr").value;
    var passwordUm = document.getElementById("pwd").value;
    var nameUm = document.getElementById("name").value;
    var emailUm = document.getElementById("email").value;
    var countryUm = document.getElementById("country").value;
    var cityUm = document.getElementById("city").value;


    var UserManagement = {
        loginUm: loginUm,
        passwordUm: passwordUm,
        nameUm: nameUm,
        emailUm: emailUm,
        countryUm: countryUm,
        cityUm: cityUm
    }

    //FLAGS FOR VALIDIATION OF LOGINS 
    var flag2 = 1;
    var flag1 = 1;

    var dataContainer = SecurityManager.GetAllUsers();
    for (var i = 0; i < dataContainer.length; i++) {

        if (loginUm == dataContainer[i].loginUm) {
            flag1 = 0;
        }

        if (emailUm == dataContainer[i].emailUm) {
            flag2 = 0;
        }
    }

    if (flag1 == 1 && flag2 == 1) {

        SecurityManager.SaveUser(UserManagement, completedSuccessfully, failed);
    }
    else if (flag1 == 0 && flag2 == 1) {

        alert("Login already exsist");
    }
    else if (flag2 == 0 && flag1 == 1) {

        alert("Email already exsist");
    }
    else if (flag2 == 0 && flag1 == 0) {

        alert("Email and Login already exsist");
    }

} //gettingUmInput ends

var EditFlag = false; //global var

function completedSuccessfully() {
    buildingTable();
    alert("Updated");

}

function failed() {
    alert("There is an error ");
}

debugger;

var dataContainer = SecurityManager.GetAllUsers();
console.log(dataContainer);

function buildingTable() {


    var dataContainer = SecurityManager.GetAllUsers();

    var table = document.getElementById("tableID");
    var oldTableBody = table.getElementsByTagName("tbody")[0];
    oldTableBody.innerHTML = '';

    for (var i = 0; i < dataContainer.length; i++) {
        //debugger;
        var tr = document.createElement("tr");
        var tdID = document.createElement("td");
        tdID.innerText = dataContainer[i].ID;

        //Insert name
        var tdName = document.createElement("td");
        tdName.innerText = dataContainer[i].nameUm;

        //Insert email
        var tdEmail = document.createElement("td");
        tdEmail.innerText = dataContainer[i].emailUm;
        //debugger;

        var tdEdit = document.createElement("td");
        var editBtn = document.createElement("a");
        editBtn.href = "#";
        editBtn.setAttribute("uid", dataContainer[i].ID);
        editBtn.onclick = editUser;
        editBtn.innerHTML = "Edit";
        tdEdit.appendChild(editBtn);

        var tdDEl = document.createElement("td");
        var DELBtn = document.createElement("a");
        DELBtn.href = "#";
        DELBtn.setAttribute("uid", dataContainer[i].ID);
        DELBtn.innerHTML = "Delete";
        DELBtn.onclick = deleteUser;
        tdDEl.appendChild(DELBtn);


        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDEl);

        oldTableBody.appendChild(tr);
    }

}

function editUser() {
    debugger;
    var userID = this.getAttribute('uid');

    var user = SecurityManager.GetUserById(userID);

    document.getElementById("usr").value = user.loginUm;
    document.getElementById("pwd").value = user.passwordUm;
    document.getElementById("name").value = user.nameUm;
    document.getElementById("email").value = user.emailUm;
    document.getElementById("country").value = user.countryUm;
    document.getElementById("city").value = user.cityUm;
    EditFlag = true;
    deleteUser.apply(this);
}
var rE = false;



function deleteUser() {

    var userID = this.getAttribute('uid');

    debugger;
    if (EditFlag == true) {
        rE = confirm("you want to Edit ID #" + userID + " press ok and fill the form ");
        if (rE === true) {
            SecurityManager.DeleteUser(userID, function () {
                debugger;
                buildingTable();
            });
        }
        EditFlag = false;
    }

    debugger;

    if (rE == false) {
        var r = confirm("you want to delete this? # " + userID);
        if (r === true) {
            SecurityManager.DeleteUser(userID, function () {
                debugger;
                buildingTable();
            });
        }
    }
}; //deleteUser() ends



