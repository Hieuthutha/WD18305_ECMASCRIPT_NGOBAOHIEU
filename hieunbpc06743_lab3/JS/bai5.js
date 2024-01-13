let convertTemperature = (temperature, unit) => {
  if (unit === "C") {
    // Chuyển từ Celsius sang Fahrenheit
    return (temperature * 9) / 5 + 32;
  } else if (unit === "F") {
    // Chuyển từ Fahrenheit sang Celsius
    return ((temperature - 32) * 5) / 9;
  } else {
    // Xử lý trường hợp đơn vị không hợp lệ
    console.log("Đơn vị nhiệt độ không hợp lệ. Vui lòng chọn 'C' hoặc 'F'.");
    return null;
  }
};
let thongSoCelsius = 31;
let thongSoFahrenheit = 87;

let Fahrenheit = convertTemperature(thongSoCelsius, "C");
let Celsius = convertTemperature(thongSoFahrenheit, "F");

console.log(`${thongSoCelsius}°C là ${Fahrenheit}°F`);
console.log(`${thongSoFahrenheit}°F là ${Celsius}°C`);
