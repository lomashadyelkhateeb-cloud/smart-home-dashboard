function toggleDevice(device) {

    const status = device.querySelector(".status");

    if (status.textContent === "ON") {
        status.textContent = "OFF";
    } else {
        status.textContent = "ON";
    }

}