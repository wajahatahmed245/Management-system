function gettingRmInput() {
    var roleName = document.getElementById("roleName").value;
    var description = document.getElementById("description").value;
    
    var RoleManagement = {
        roleName: roleName,
        description: description
    }

    //FLAGS FOR VALIDIATION OF Role NameS 
    var flag2 = 1;
    var flag1 = 1;

    var dataContainer = SecurityManager.GetAllRoles();
    for (var i = 0; i < dataContainer.length; i++) {

        if (roleName == dataContainer[i].roleName) {
            flag1 = 0;
        }
    }

    if (flag1 == 1 && flag2 == 1) {

        SecurityManager.SaveRole(RoleManagement , completedSuccessfully, failed);
    }
    else if (flag1 == 0 && flag2 == 1) {

        alert("Role Name already exsist");
    }
   
} //gettingRmInput ends

var EditFlag = false; //global var

function completedSuccessfully() {
    buildingTable();
    //debugger;
    alert("Updated");

}

function failed() {
    alert("There is an error ");
}

var dataContainer = SecurityManager.GetAllRoles();
console.log(dataContainer);

function buildingTable() {

debugger;
    var dataContainer = SecurityManager.GetAllRoles();

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
        tdName.innerText = dataContainer[i].roleName;

        //Insert description
        var tddescription = document.createElement("td");
        tddescription.innerText = dataContainer[i].description;
        //debugger;

        var tdEdit = document.createElement("td");
        var editBtn = document.createElement("a");
        editBtn.href = "#";
        editBtn.setAttribute("uid", dataContainer[i].ID);
        editBtn.onclick = editRole;
        editBtn.innerHTML = "Edit";
        tdEdit.appendChild(editBtn);

        var tdDEl = document.createElement("td");
        var DELBtn = document.createElement("a");
        DELBtn.href = "#";
        DELBtn.setAttribute("uid", dataContainer[i].ID);
        DELBtn.innerHTML = "Delete";
        DELBtn.onclick = deleteRole;
        tdDEl.appendChild(DELBtn);


        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tddescription);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDEl);

        oldTableBody.appendChild(tr);
    }

}

function editRole() {
    debugger;
    var roleID = this.getAttribute('uid');

    var role = SecurityManager.GetRoleById(roleID);

    document.getElementById("roleName").value = role.roleName;
    document.getElementById("description").value = role.description;
    EditFlag = true;
    deleteRole.apply(this);
}
var rE = false;



function deleteRole() {

    var roleID = this.getAttribute('uid');

    debugger;
    if (EditFlag == true) {
        rE = confirm("you want to Edit ID #" + roleID + " press ok and fill the form ");
        if (rE === true) {
            SecurityManager.DeleteRole(roleID, function () {
                debugger;
                buildingTable();
            });
        }
        EditFlag = false;
    }

    debugger;

    if (rE == false) {
        var r = confirm("you want to delete this? # " + roleID);
        if (r === true) {
            SecurityManager.DeleteRole(roleID, function () {
                debugger;
                buildingTable();
            });
        }
    }
}; //deleteRole() ends



