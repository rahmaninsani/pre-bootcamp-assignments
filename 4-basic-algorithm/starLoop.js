function starLoop(n) {
  if (typeof n !== "number") {
    console.log("Please Insert Number Parameter");
    return;
  }

  if (n < 0) {
    console.log("Number Invalid");
    return;
  }

  for (let i = 0; i < n; i++) {
    console.log("*");
  }

  console.log("");
}

// TEST CASE
starLoop(1);
// *

starLoop(2);
// *
// *

starLoop(6);
//*
//*
//*
//*
//*
//*

starLoop(0);
//

starLoop(-5);
// number invalid

// Please Insert Number Parameter
starLoop();
starLoop("");
starLoop([]);
starLoop({});
