function gettingRpmInput() {
    var permName = document.getElementById("permission").value;
    var roleName = document.getElementById("role").value;
    debugger;
    var RolePermissionManagement = {
        roleName: roleName,
        permName: permName
    }

    
        SecurityManager.SaveRolePermission(RolePermissionManagement , completedSuccessfully, failed);
    
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


function buildingTable() {

debugger;
    var dataContainer = SecurityManager.GetAllRolePermissions();

    var table = document.getElementById("tableID");
    var oldTableBody = table.getElementsByTagName("tbody")[0];
    oldTableBody.innerHTML = '';

    for (var i = 0; i < dataContainer.length; i++) {
        //debugger;
        var tr = document.createElement("tr");
        var tdID = document.createElement("td");
        tdID.innerText = dataContainer[i].ID;

//Insert description
var tddescription = document.createElement("td");
tddescription.innerText = dataContainer[i].roleName;
//debugger;


        //Insert name
        var tdName = document.createElement("td");
        tdName.innerText = dataContainer[i].permName;

        

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

    var perm = SecurityManager.GetRolePermissionById(permID);

    document.getElementById("permission").value = perm.permName;
    document.getElementById("role").value = perm.roleName;
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
            SecurityManager.DeleteRolePermission(permID, function () {
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
            SecurityManager.DeleteRolePermission(permID, function () {
                debugger;
                buildingTable();
            });
        }
    }
}; //deletePermission() ends



