function trafficLight(color) {
  try {
    let status = "";

    switch (color.toLowerCase()) {
      case "red":
        status = "Stop";
        break;
      case "orage":
        status = "Careful";
        break;
      case "green":
        status = "Go";
        break;
      case "":
        status = "Please Insert Color";
        break;
      default:
        status = "Color Invalid";
    }

    return status;
  } catch (err) {
    if (err.name === "TypeError") return "Please Insert String Parameter";
    return err.message;
  }
}

// TEST CASE
console.log(trafficLight("red")); // stop
console.log(trafficLight("orage")); // careful
console.log(trafficLight("green")); // go
console.log(trafficLight("blue")); // color invalid
console.log(trafficLight("purple")); // color invalid
console.log(trafficLight("axew")); // color invalid
console.log(trafficLight("")); // please insert color

console.log(trafficLight(1)); // Please Insert String Parameter
console.log(trafficLight([])); // Please Insert String Parameter
console.log(trafficLight({})); // Please Insert String Parameter
