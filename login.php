<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
    <link rel="stylesheet" href="styleLOgin.css">


    <script src="SecurityManager.js"></script>

</head>

<body>


    <div id="doit" class="col-sm-10" style="background-color:rgba(248,245,245);">
        <div class="page-header">
            <h1 id="Brand" style="font-weight: bold;">Security Manager</h1>
        </div>


        <div class="col-sm-4" style="background-color:rgb(248, 245, 245);">
            <form action="AdminHome.php" onsubmit="return ValidateAdminL()">

                <div class="col-sm-12" style="background-color:rgb(100, 96, 96);">
                    <h4 style="color:white;">Login Admin</h4>
                </div>


                <div class="form-group">
                    <label for="UA">Username:</label>
                    <input id="UA" type="text" class="form-control" required>
                </div>


                <div class="form-group">
                    <label for="PA">Password:</label>
                    <input id="PA" type="password" class="form-control" required>
                </div>


                <div style="background-color:rgb(100, 96, 96);width:339.44px; height:34px">
                    <button type="submit" class="btn btn-default pull-right">Login</button>
                </div>
        </div>
        </form>

        <!--SEcond -->

        <div class="col-sm-4" style="background-color:rgb(248, 245, 245);">

            <form action="userhome.php" onsubmit="return validateUserLogin();">
                <div class="col-sm-12" style="background-color:rgb(100, 96, 96);">
                    <h4 style="color:white;">Login User</h4>
                </div>


                <div class="form-group">
                    <label for="usr">Username:</label>
                    <input type="text" class="form-control" id="usr" required>
                </div>


                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" required>
                </div>


                <!--  <div class="col-sm-12" style="background-color:rgb(100, 96, 96);">
        -->
                <div class="create-fix" style="background-color:rgb(100, 96, 96); width:339.44px; height:34px">
                    <button type="submit" class="btn btn-default pull-right">Login</button>
                </div>

            </form>

        </div>


    </div>


    <script>

        function ValidateAdminL() {

            var AdminPasword = document.getElementById("PA").value;
            var AdminUsername = document.getElementById("UA").value;

            var response = SecurityManager.ValidateAdmin(AdminUsername, AdminPasword);


            if (response == false) {
                alert("Wrong Password or username");

            }
            return response;
        }


        function validateUserLogin() {

            debugger;
            var UserPasword = document.getElementById("pwd").value;
            var Username = document.getElementById("usr").value;

            var dBOfUSers = SecurityManager.GetAllUsers();

            debugger;
            for (let index = 0; index < dBOfUSers.length; index++) {


                if (Username == dBOfUSers[index].loginUm && UserPasword == dBOfUSers[index].passwordUm) {
                    localStorage["uid"] = dBOfUSers[index].ID;
                    return true;
                }
            }
            alert ("wrong password or username");
            return false;
        }

    </script>


</body>

</html>