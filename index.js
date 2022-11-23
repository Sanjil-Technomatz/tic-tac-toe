flag = 1;

var p1 = localStorage.getItem("user_1");
var p2 = localStorage.getItem("user_2");

window.onload = function () {
  document.getElementById("p1").innerHTML = p1;
  document.getElementById("p2").innerHTML = p2;
};

function disable() {
  document.getElementById("k1").disabled = true;
  document.getElementById("k2").disabled = true;
  document.getElementById("k3").disabled = true;
  document.getElementById("k4").disabled = true;
  document.getElementById("k5").disabled = true;
  document.getElementById("k6").disabled = true;
  document.getElementById("k7").disabled = true;
  document.getElementById("k8").disabled = true;
  document.getElementById("k9").disabled = true;
}

function check() {
  var k1, k2, k3, k4, k5, k6, k7, k8, k9;
  k1 = document.getElementById("k1").value;
  k2 = document.getElementById("k2").value;
  k3 = document.getElementById("k3").value;
  k4 = document.getElementById("k4").value;
  k5 = document.getElementById("k5").value;
  k6 = document.getElementById("k6").value;
  k7 = document.getElementById("k7").value;
  k8 = document.getElementById("k8").value;
  k9 = document.getElementById("k9").value;

  const arr = [
    [k1, k2, k3],
    [k4, k5, k6],
    [k7, k8, k9],
  ];

  for (let i = 0; i < 3; i++) {
    if (arr[i][0] == "X" && arr[i][1] == "X" && arr[i][2] == "X") {
      document.getElementById("print").innerHTML = p1 + " won";
      disable();
      window.alert(p1 + " won");
      break;
    } else if (arr[i][0] == "0" && arr[i][1] == "0" && arr[i][2] == "0") {
      document.getElementById("print").innerHTML = p2 + " won";
      disable();
      window.alert(p2 + " won");
      break;
    } else {
      if (flag == 1) {
        document.getElementById("print").innerHTML = p1 + "'s turn";
      } else {
        document.getElementById("print").innerHTML = p2 + "'s turn";
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    if (arr[i][0] == "X" && arr[i][1] == "X" && arr[i][2] == "X") {
      document.getElementById("print").innerHTML = p1 + " won";
      disable();
      window.alert(p1 + " won");
      break;
    } else if (arr[i][0] == "0" && arr[i][1] == "0" && arr[i][2] == "0") {
      document.getElementById("print").innerHTML = p2 + " won";
      disable();
      window.alert(p2 + " won");
      break;
    } else if (arr[0][i] == "X" && arr[1][i] == "X" && arr[2][i] == "X") {
      document.getElementById("print").innerHTML = p1 + " won";
      disable();
      window.alert(p1 + " won");
      break;
    } else if (arr[0][i] == "0" && arr[1][i] == "0" && arr[2][i] == "0") {
      document.getElementById("print").innerHTML = p2 + " won";
      disable();
      window.alert(p2 + " won");
      break;
    }
    if (arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X") {
      document.getElementById("print").innerHTML = p1 + " won";
      disable();
      window.alert(p1 + " won");
      break;
    } else if (arr[0][0] == "0" && arr[1][1] == "0" && arr[2][2] == "0") {
      document.getElementById("print").innerHTML = p2 + " won";
      disable();
      window.alert(p2 + " won");
      break;
    }
    if (arr[0][2] == "X" && arr[1][1] == "X" && arr[2][0] == "X") {
      document.getElementById("print").innerHTML = p1 + " won";
      disable();
      window.alert(p1 + " won");
      break;
    } else if (arr[0][2] == "0" && arr[1][1] == "0" && arr[2][0] == "0") {
      document.getElementById("print").innerHTML = p2 + " won";
      disable();
      window.alert(p2 + " won");
      break;
    } else if (
      (k1 == "X" || k1 == "0") &&
      (k2 == "X" || k2 == "0") &&
      (k3 == "X" || k3 == "0") &&
      (k4 == "X" || k4 == "0") &&
      (k5 == "X" || k5 == "0") &&
      (k6 == "X" || k6 == "0") &&
      (k7 == "X" || k7 == "0") &&
      (k8 == "X" || k8 == "0") &&
      (k9 == "X" || k9 == "0")
    ) {
      document.getElementById("print").innerHTML = "Match Tie";
      window.alert("Match Tie");
      break;
    } else {
      if (flag == 1) {
        document.getElementById("print").innerHTML = p1 + "'s turn";
      } else {
        document.getElementById("print").innerHTML = p2 + "'s turn";
      }
    }
  }

  //   if (k1 == "X" && k2 == "X" && k3 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();
  //     window.alert(p1 + " won");
  //   } else if (k1 == "X" && k4 == "X" && k7 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();

  //     window.alert(p1 + " won");
  //   } else if (k7 == "X" && k8 == "X" && k9 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();

  //     window.alert(p1 + " won");
  //   } else if (k3 == "X" && k6 == "X" && k9 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();

  //     window.alert(p1 + " won");
  //   } else if (k1 == "X" && k5 == "X" && k9 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();

  //     window.alert(p1 + " won");
  //   } else if (k3 == "X" && k5 == "X" && k7 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();

  //     window.alert(p1 + " won");
  //   } else if (k2 == "X" && k5 == "X" && k8 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();

  //     window.alert(p1 + " won");
  //   } else if (k4 == "X" && k5 == "X" && k6 == "X") {
  //     document.getElementById("print").innerHTML = p1 + " won";
  //     disable();

  //     window.alert(p1 + " won");
  //   } else if (k1 == "0" && k2 == "0" && k3 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (k1 == "0" && k4 == "0" && k7 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (k7 == "0" && k8 == "0" && k9 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (k3 == "0" && k6 == "0" && k9 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (k1 == "0" && k5 == "0" && k9 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (k3 == "0" && k5 == "0" && k7 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (k2 == "0" && k5 == "0" && k8 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (k4 == "0" && k5 == "0" && k6 == "0") {
  //     document.getElementById("print").innerHTML = p2 + " won";
  //     disable();

  //     window.alert(p2 + " won");
  //   } else if (
  //     (k1 == "X" || k1 == "0") &&
  //     (k2 == "X" || k2 == "0") &&
  //     (k3 == "X" || k3 == "0") &&
  //     (k4 == "X" || k4 == "0") &&
  //     (k5 == "X" || k5 == "0") &&
  //     (k6 == "X" || k6 == "0") &&
  //     (k7 == "X" || k7 == "0") &&
  //     (k8 == "X" || k8 == "0") &&
  //     (k9 == "X" || k9 == "0")
  //   ) {
  //     document.getElementById("print").innerHTML = "Match Tie";
  //     window.alert("Match Tie");
  //   } else {
  //     if (flag == 1) {
  //       document.getElementById("print").innerHTML = p1 + "'s turn";
  //     } else {
  //       document.getElementById("print").innerHTML = p2 + "'s turn";
  //     }
  //   }
}

function tictactoe(id) {
  if (flag == 1) {
    document.getElementById(id).value = "X";
    document.getElementById(id).disabled = true;
    flag = 0;
  } else {
    document.getElementById(id).value = "0";
    document.getElementById(id).disabled = true;
    flag = 1;
  }
}

function reset() {
  location.reload();
  document.getElementById("k1").value = "";
  document.getElementById("k2").value = "";
  document.getElementById("k3").value = "";
  document.getElementById("k4").value = "";
  document.getElementById("k5").value = "";
  document.getElementById("k6").value = "";
  document.getElementById("k7").value = "";
  document.getElementById("k8").value = "";
  document.getElementById("k9").value = "";
}
