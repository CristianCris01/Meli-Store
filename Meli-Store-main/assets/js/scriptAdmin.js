const idAdmin = document.getElementById("inputName");
const passwordAdmin = document.getElementById("inputPassword");
const buttonAdmin = document.getElementById("buttonAdmin");
    const adminId = "MeliAdmin$";
    const adminPassword = "MeliAdmin123$";
    buttonAdmin.addEventListener("click", () => {
        
        if (idAdmin.value === adminId && passwordAdmin.value === adminPassword) {
            window.location.href = "./PanelAdmin.html";
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    } );