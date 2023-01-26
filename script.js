//MARK: Create by ©️App Designer2 & SwiftUI Spanish

//alert("leave a commentary with your thought about this code! ☺️👍🏼");
/*alert(
  "Run this code twice and look how the card View backgroundColor change randomly 😊"
);*/

const datos = [
  {
    user: "@r29_future",
    avatar: "https://unavatar.io/r29-future",
    title: "SwiftUI: Properties Wrappers",
    detail:
      "En este curso de aprenderas sobres los properties wrappers de SwiftUI como '@State, @Binding, @Environment. etc'",
    imgPost: "https://unavatar.io/r29-future",
    precio: 8.99,
    color: "orange"
  },

  {
    user: "@app_designer2",
    avatar: "https://unavatar.io/app_designer2",
    title: "SwiftUI: Componentes Basicos ZStack",
    detail:
      "El ZStack asigna a cada subvista sucesiva un valor de eje z más alto que el anterior, lo que significa que las subvistas posteriores aparecen 'encima' de las anteriores'",
    imgPost:
      "https://6766e23acb.clvaw-cdnwnd.com/62af9ee770f9b01b777c75d518b70090/200000047-8fa2c8fa2e/450/Colores.webp?ph=6766e23acb",
    precio: 10.99,
    color: "#65129E"
  },

  {
    user: "@swiftui_spanish",
    avatar: "https://unavatar.io/swiftui_spanish",
    title: "SwiftUI & CoreData: Proyectos Completo",
    detail:
      "En este curso de aprenderas a crear esta grandiosa y compleja aplicacion'",
    imgPost:
      "https://6766e23acb.clvaw-cdnwnd.com/62af9ee770f9b01b777c75d518b70090/200000053-0d1a30d1a5/Main%20SwiftUI%20Curso.webp?ph=6766e23acb",
    precio: 150.99,
    color: "green"
  },

  {
    user: "@jhon_coder",
    avatar: "https://unavatar.io/jhon",
    title: "SwiftUI Componente basico HStack",
    detail:
      "A diferencia de LazyHStack, que solo muestra las vistas cuando su aplicación necesita mostrarlas en pantalla, HStack muestra todas las vistas a la vez, independientemente de si están dentro o fuera de la pantalla. Use el HStack regular cuando tenga una pequeña cantidad de subvistas o no quiera el comportamiento de renderizado retrasado de la versión 'perezosa'.",
    imgPost:
      "https://6766e23acb.clvaw-cdnwnd.com/62af9ee770f9b01b777c75d518b70090/200000045-22bbd22bbe/450/Group%2012-2.webp?ph=6766e23acb",
    precio: 10.99,
    color: "#D1434A"
  }
];

const container = document.getElementById("container");
//new URLSearchParams(window.location.search).forEach((user, image) => {
//container.append(`${img}: ${user}`);
//container.append(document.createElement('br'));
//});

//Presentar los datos de los usuarios...
datos.forEach((dato) => {
  //Crear la tarjeta para los elementos...
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.marginBottom = "20px";
  //aquirir colores aleatorios...
  card.style.backgroundColor = getRandomColor();

  //Crear nombre del usuario...
  const user = document.createElement("label");
  user.textContent = dato.user;
  user.classList.add("user-name");
  //user.style.color = getRandomColor();

  //Crear perfil del usuario...
  const avatar = document.createElement("img");
  avatar.src = dato.avatar;
  avatar.alt = dato.user;
  avatar.classList.add("avatar-img");

  //Crear titulo de la publicacion del usuario...
  const title = document.createElement("h3");
  title.textContent = dato.title;
  title.classList.add("title");

  //Crear detalles de la publicacion del usuario...
  const detail = document.createElement("p");
  detail.textContent = dato.detail;
  detail.classList.add("detail");

  //Crear perfil del usuario...
  const imgPost = document.createElement("img");
  imgPost.src = dato.imgPost;
  imgPost.alt = dato.user;
  imgPost.classList.add("img-post");

  //alert(`${getRandomColor()}`);

  //crear una funcion que le permita a los usuarios comprar los cursos disponible...
  function comprar() {
    //Adquirir año
    const now = new Date();
    const year = now.getFullYear();

    //Adquiri mes
    const month = now.getMonth();

    const day = now.getDate();

    let names = prompt("Cual es su nombre/name?");

    let email = prompt("Ponga su cuenta de Paypal Email");

    alert(`Saludo senorita/senor ${names}`);

    alert(`Su emaiil es: ${email}`);
    if (dato.precio > 35.99) {
      alert(
        `Usted ha comprado el curso de "${dato.title}" por el precio de $${dato.precio}  el ${day},${month}:${year}`
      );
    } else {
      alert(
        `Usted pagara $${dato.precio} los dia ${day} de cada mes, por el curso de "${dato.title}"`
      );
    }

    alert(`Muy buena eleccion señorita/señor ${names} 👍🏼`);

    alert(
      `Dentro de 2-5 minutos, usted recibirá un correo con un link de acceso al curso: ${dato.title}`
    );

    alert("mucho exito en este mundo de la programación ☺️!");
  }

  //Aplicar colores aleatorios[Random]
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //Crear boton para comprar curso...
  const precio = document.createElement("button");
  if (dato.precio > 35) {
    precio.textContent = `Comprar curso $${dato.precio}`;
  } else {
    precio.textContent = `Adquirir curso $${dato.precio}/mes`;
  }

  precio.classList.add("btn-precio");
  //precio.style.backgroundColor = getRandomColor();

  precio.addEventListener("click", function () {
    //Agregar evento a ejecutar...
    comprar();
  });

  //const line = document.createElement('hr');

  //const links = document.createElement("a");
  //links.textContent = dato.link.results;
  //links.href = dato.link;

  card.appendChild(avatar);
  card.appendChild(user);
  card.appendChild(imgPost);
  card.appendChild(title);
  card.appendChild(detail);
  //card.appendChild(links);
  card.appendChild(precio);

  container.appendChild(card);
});

//container.appendChild(header);
