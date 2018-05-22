function gettingRmInput() {
    var permName = document.getElementById("permName").value;
    var description = document.getElementById("description").value;
    
    var PermissionManagement = {
        permName: permName,
        description: description
    }

    //FLAGS FOR VALIDIATION OF Permission NameS 
    var flag2 = 1;
    var flag1 = 1;

    var dataContainer = SecurityManager.GetAllPermissions();
    for (var i = 0; i < dataContainer.length; i++) {

        if (permName == dataContainer[i].permName) {
            flag1 = 0;
        }
    }

    if (flag1 == 1 && flag2 == 1) {

        SecurityManager.SavePermission(PermissionManagement , completedSuccessfully, failed);
    }
    else if (flag1 == 0 && flag2 == 1) {

        alert("Permission Name already exsist");
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

var dataContainer = SecurityManager.GetAllPermissions();
console.log(dataContainer);

function buildingTable() {

debugger;
    var dataContainer = SecurityManager.GetAllPermissions();

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
        tdName.innerText = dataContainer[i].permName;

        //Insert description
        var tddescription = document.createElement("td");
        tddescription.innerText = dataContainer[i].description;
        //debugger;

        var tdEdit = document.createElement("td");
        var editBtn = document.createElement("a");
        editBtn.href = "#";
        editBtn.setAttribute("uid", dataContainer[i].ID);
        editBtn.onclick = editPermission;
        editBtn.innerHTML = "Edit";
        tdEdit.appendChild(editBtn);

        var tdDEl = document.createElement("td");
        var DELBtn = document.createElement("a");
        DELBtn.href = "#";
        DELBtn.setAttribute("uid", dataContainer[i].ID);
        DELBtn.innerHTML = "Delete";
        DELBtn.onclick = deletePermission;
        tdDEl.appendChild(DELBtn);


        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tddescription);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDEl);

        oldTableBody.appendChild(tr);
    }

}

function editPermission() {
    debugger;
    var permID = this.getAttribute('uid');

    var perm = SecurityManager.GetPermissionById(permID);

    document.getElementById("permName").value = perm.permName;
    document.getElementById("description").value = perm.description;
    EditFlag = true;
    deletePermission.apply(this);
}
var rE = false;



function deletePermission() {

    var permID = this.getAttribute('uid');

    debugger;
    if (EditFlag == true) {
        rE = confirm("you want to Edit ID #" + permID + " press ok and fill the form ");
        if (rE === true) {
            SecurityManager.DeletePermission(permID, function () {
                debugger;
                buildingTable();
            });
        }
        EditFlag = false;
    }

    debugger;

    if (rE == false) {
        var r = confirm("you want to delete this? # " + permID);
        if (r === true) {
            SecurityManager.DeletePermission(permID, function () {
                debugger;
                buildingTable();
            });
        }
    }
}; //deletePermission() ends



