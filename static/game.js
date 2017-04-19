{% load static %}

function clicked() {
    var pressState = document.getElementByID("Button");
    if (pressState.src == "{% static "Button Up.png" %}")
    {
        pressState.src="{% static "Button Down.png" %}";
    } else {
        pressState.src="{% static "Button Up.png" %}"
    }
}
