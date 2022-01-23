function starNestedLoop(n, m) {
  if (typeof n !== "number" || typeof m !== "number") {
    console.log("Please Insert Number Parameter");
    return;
  }

  if (n < 0 || m < 0) {
    console.log("Number Invalid");
    return;
  }

  for (let row = 0; row < m; row++) {
    let asterisk = "";

    for (let col = 0; col < n; col++) {
      asterisk += "*";
    }

    console.log(asterisk);
  }

  console.log("");
}

//TEST CASE
starNestedLoop(1, 2);
// *
// *

starNestedLoop(2, 3);
// **
// **
// **

starNestedLoop(4, 1);
// ****

// Blank
starNestedLoop(0, 1);
starNestedLoop(1, 0);

// Number Invalid
starNestedLoop(-1, -10);

// Please Insert Number Parameter
starNestedLoop();
starNestedLoop("");
starNestedLoop([]);
starNestedLoop({});
