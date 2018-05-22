<!DOCTYPE html>
<html lang="en">

<head>
    <title>User Home</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Coiny|Rammetto+One" rel="stylesheet">
    <link rel="stylesheet" href="styleAHM.css">

    <script src="SecurityManager.js"></script>
    <script>
        window.onload = function () {
            debugger;
            var user = SecurityManager.GetUserById(localStorage['uid']);

            var userRoles = SecurityManager.GetAllUserRoles();

            var rolePerms = SecurityManager.GetAllRolePermissions();

            var roles = [];
            for (var i = 0; i < userRoles.length; i++) {
                if (user.loginUm == userRoles[i].loginUm) {
                    roles.push(userRoles[i].roleName);
                }
            }

            var roleDiv = document.getElementById("roles");
            var roleOl = document.createElement("ol");
            roleDiv.appendChild(roleOl);

            for (var i = 0; i < roles.length; i++) {
                var roleLi = document.createElement("li");
                roleLi.innerHTML = "Role: " + roles[i];

                roleOl.appendChild(roleLi);
            }
debugger;
            var perms = [];
            for (var rp = 0; rp < rolePerms.length; rp++) {
                for (var r = 0; r < roles.length; r++) {
                    if (rolePerms[rp].roleName == roles[r]) {
                        perms.push(rolePerms[rp].permName);
                    }
                }
            }


            var permDiv = document.getElementById("perms");
            var permOl = document.createElement("ol");
            permDiv.appendChild(permOl);
debugger;
            for (var i = 0; i < perms.length; i++) {
                var permLi = document.createElement("li");
                permLi.innerHTML = perms[i];

                permOl.appendChild(permLi);
            }
        };

    </script>
</head>

<body>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Security Manager</a>
            </div>
            <ul class="nav navbar-nav">
                <li class="active">
                    <a id="home" href="#">Home</a>
                </li>






            </ul>
            <ul class="nav navbar-nav navbar-right">

                <li>
                    <a href="login.php" style="font-family: 'Coiny', cursive;font-size: 20px;">
                        <span class="glyphicon glyphicon-off"></span>Logout</a>
                </li>
            </ul>
        </div>
    </nav>




    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-lg-offset-4" style="background-color:rgb(100, 96, 96);">

                <h5 style="color:white;">
                    <strong>Welcome User</strong>
                </h5>


            </div>
        </div>
        <div class="row">

            <div class="col-sm-4 col-lg-offset-4" style="background-color:white; height: 100px;">

                <div id="roles"></div>


            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-lg-offset-4" style="background-color:rgb(100, 96, 96);">

                <h5 style="color:white;">
                    <strong>Permmisions</strong>
                </h5>


            </div>
        </div>
        <div id="roles"></div>
        <div class="col-sm-4 col-lg-offset-4" style="background-color:white;height: 100px;">

            <div id="perms"></div>


        </div>




    </div>
    </div>
</body>

</html>