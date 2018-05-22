<!DOCTYPE html>
<html lang="en">

<head>
    <title>User management</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Bevan|Itim" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Coiny|Rammetto+One" rel="stylesheet">
    <link rel="stylesheet" href="main.css">
    <script src="SecurityManager.js"></script>
    <script src="UM.js"></script>
    <script>
        function Main() {
            var countries = SecurityManager.GetCountries();
            var cmb = document.getElementById('country');
            for (var i = 0; i < countries.length; i++) {
                var opt = document.createElement("option");
                opt.setAttribute("value", countries[i].CountryID);
                opt.innerText = countries[i].Name;

                cmb.appendChild(opt);
            }


            cmb.onchange = function () {

                var citycmb = document.getElementById('city');
                citycmb.innerHTML = '';

                var cities = SecurityManager.GetCitiesByCountryId(cmb.value);

                for (var i = 0; i < cities.length; i++) {
                    var opt = document.createElement("option");
                    opt.setAttribute("value", cities[i].CityID);
                    opt.innerText = cities[i].Name;

                    citycmb.appendChild(opt);
                }


            }

            buildingTable();
            var x = SecurityManager.GetAllUsers();
    

        }

    </script>

</head>

<body onload="Main();">

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Security Manager</a>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <a id="home" href="AdminHome.php">Home</a>
                </li>
                <li class="active">
                    <a class="UserManagement" href="#">User Management</a>
                </li>
                <li>
                    <a class="UserManagement" href="Rolemanagement.php">Role Management</a>
                </li>
                <li>
                    <a class="UserManagement" href="Permisionmanagement.php">Permission Management</a>
                </li>

                <li>
                    <a class="UserManagement" href="RolePermissionmanagement.php">Role Permission Management</a>
                </li>
                <li>
                    <a class="UserManagement" href="UserRolemanagement.php">User Role Management</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">

                <li>
                    <a href="login.php" style="font-family: 'Coiny', cursive;
font-size: 20px;">
                        <span class="glyphicon glyphicon-off"></span>Logout</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <div class="col-sm-4">

                <div class="headerUM" style="background-color:rgb(100, 96, 96);">
                    <h1 style="color:white; font-family: 'Itim', cursive; margin:0px; text-align: center;">
                        <strong>User Management</strong>
                    </h1>

                </div>


                <div style="background-color:white;">

                    <form onsubmit="gettingUmInput()" class="formUM">
                        <div class="form-group">
                            <label for="usr">Login:</label>
                            <input type="text" class="form-control" placeholder="Enter login" id="usr" required>
                        </div>

                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" required>
                        </div>

                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" placeholder="Enter name" id="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" placeholder="Enter email" id="email" required>
                        </div>

                        <div class="form-group">
                            <label for="country">Country:</label>
                            <select class="form-control" id="country" required>

                            </select>
                        </div>

                        <div class="form-group" style="margin:0px;">
                            <label for="city">City:</label>
                            <select class="form-control" id="city" required>

                            </select>
                        </div>
                </div>

                <div class="footerUM" style="background-color:rgb(100, 96, 96);width:360px;height:44px;">
                    <button id="SAVE" type="submit" class="btn btn-default pull-right" style="font-family: 'Itim', cursive;">Save</button>
                    <button id="CLEAR" type="reset" class="btn btn-default pull-left" style="font-family: 'Itim', cursive; margin-left: 5px;">clear</button>
                </div>
                </form>

            </div>


            <script>




            </script>

            <!-- second column -->
            <div class="col-sm-8 table-container" style="background-color:white;">
                <table class="table table-hover" id="tableID">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>





                    </tbody>

                </table>







            </div>



        </div>

</body>

</html>