<?php
    session_start();
    require '../../../../db.php';

    if (isset($_SESSION['user_id'])) {
        $records = $conn->prepare('SELECT id, username, password from usuarios where id = :id');
        $records->bindParam(':id', $_SESSION['user_id']);
        $records->execute();
        $results = $records->fetch(PDO::FETCH_ASSOC);

        $user = null;

        if (count($results) > 0) {
            $user = $results;
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../../images/logo.png" type="image/x-icon">
    <title>John Fitzgerald Kennedy | Electromecánica</title>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css'>
    <link rel="stylesheet" href="../../../styles/header.css">
    <link rel="stylesheet" href="../../../styles/footer.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar .navbar-expand-lg. fixed-top s">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="../../../images/logo.svg" alt=""
                                width="70" height="94">John F. Kennedy</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../../../../index.php"><i
                                        class="bi bi-house bi-ul-r"></i>Inicio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false"><i class="bi bi-caret-down bi-ul-r"></i>
                                    Especialidades
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="electromecanica.php"><i
                                                class="bi bi-gear bi-ul-r"></i>Electromecánica</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="../informatica/informatica.php"><i
                                                class="bi bi-motherboard bi-ul-r"></i>Informática</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="../programacion/programacion.php"><i
                                                class="bi bi-laptop bi-ul-r"></i>Programación</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../../inscripcion/inscripcion.php"><i
                                        class="bi bi-file-earmark-text bi-ul-r"></i>Inscripción</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../../foro/foro.php"><i
                                        class="bi bi-chat-left-dots bi-ul-r">Foro</i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../../biblioteca/biblioteca.php"><i
                                        class="bi bi-archive bi-ul-r">Biblioteca</i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../../galeria/galeria.php"><i
                                        class="bi bi-camera bi-ul-r"></i>Galería</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../../historia/historia.php"><i
                                        class="bi bi-bank bi-ul-r"></i>Historia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../../contacto/contacto.php"><i
                                        class="bi bi-envelope-paper bi-ul-r"></i>Contacto</a>
                            </li>
                            <?php if (!empty($user)): ?>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="../../admin/panel.php">Panel de administrador</a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="menu">
            <ul>
                <li><a href="../../../../index.php"><i class="bi bi-house bi-ul-r"></i>Inicio</a></li>
                <li class="specialties"><a href="#" class="toggle-icon"><i
                            class="bi bi-caret-down bi-ul-r"></i>Especialidades</a>
                    <ul class="submenu animate__animated animate__fadeIn">
                        <li><a href="electromecanica.php"><i class="bi bi-gear bi-ul-r"></i>Electromecánica</a></li>
                        <li><a href="../informatica/informatica.php"><i class="bi bi-motherboard bi-ul-r"></i>Informática</a></li>
                        <li><a href="../programacion/programacion.php"><i class="bi bi-laptop bi-ul-r"></i>Programación</a></li>
                    </ul>
                </li>
                <li><a href="../../inscripcion/inscripcion.php"><i class="bi bi-file-earmark-text bi-ul-r"></i>Inscripción</a></li>
                <li><a href="../../foro/foro.php"><i class="bi bi-chat-left-dots bi-ul-r"></i>Foro</a></li>
                <li><a href="../../biblioteca/biblioteca.php"><i class="bi bi-archive bi-ul-r"></i>Biblioteca</a></li>
                <li class="school"><a href="#" class="toggle-icon"><i class="bi bi-caret-down bi-ul-r"></i>Escuela</a>
                    <ul class="submenu animate__animated animate__fadeIn">
                        <li><a href="../../galeria/galeria.php"><i class="bi bi-camera bi-ul-r"></i>Galería</a></li>
                        <li><a href="../../historia/historia.php"><i class="bi bi-bank bi-ul-r"></i>Historia</a></li>
                    </ul>
                </li>
                <li><a href="../../contacto/contacto.php"><i class="bi bi-envelope-paper bi-ul-r"></i>Contacto</a></li>
                <?php if (!empty($user)): ?>
                    <li><a href="../../admin/panel.php">Panel de administrador</a></li>
                <?php endif; ?>
            </ul>
        </div>
    </header>
    <main>
      <div class="info">
        <span>Bienvenido a</span>
        <h2>ELECTROMECÁNICA</h2>
      </div>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide--one">
            </div>
            <div class="swiper-slide swiper-slide--two">
            </div>
            <div class="swiper-slide swiper-slide--three">
            </div>
            <div class="swiper-slide swiper-slide--four">
            </div>
            <div class="swiper-slide swiper-slide--five">
            </div>
          </div>
          <div class="swiper-pagination"></div>
          </div>
          <img src="images/logov2.png" alt="" class="bg">
        <img src="images/logov2.png" alt="" class="bg2">
    </main>
    <section>
        <div class="wrapper">
            <div class="box">
                <input checked="checked" id="box1" name="box" type="radio"> 
                <label for="box1">Vision general</label>
                <div class="content">
                    <h3 class="title-h3">VISION GENERAL</h3>
                      <div class="content-p">
                        <p>La tecnicatura en electromecánica de nuestra escuela técnica secundaria es un programa educativo diseñado para brindar a los estudiantes una sólida formación en los campos de la electricidad, la electrónica y la mecánica. Durante su formación, los estudiantes adquirirán conocimientos teóricos y habilidades prácticas que les permitirán desarrollarse como profesionales en el ámbito de la electromecánica.</p>
                        <p>Nuestro plan de estudios se centra en proporcionar a los estudiantes una base sólida en los principios fundamentales de la electricidad y la electrónica. Aprenderán sobre circuitos eléctricos, sistemas de control, electrónica analógica y digital, así como sobre los componentes y dispositivos utilizados en sistemas electromecánicos.</p>
                        <p>Además de los aspectos eléctricos y electrónicos, nuestros estudiantes también se familiarizarán con los conceptos y las técnicas de la mecánica. Aprenderán sobre máquinas y sistemas mecánicos, elementos de transmisión de movimiento, mantenimiento preventivo y correctivo, y técnicas de medición y control.</p>
                      </div>
                </div>
                <input id="box2" name="box" type="radio"> 
                <label for="box2">Plan de estudio</label>
                <div class="content">
                    <h3 class="title-h3">TECNICATURA EN ELECTROMECÁNICA</h3>
                    <div class="accordion">
                      <div class="accordion-item">
                        <div class="accordion-item-header">
                          4° Año
                        </div>
                        <div class="accordion-item-body">
                          <div class="accordion-item-body-content">
                            <div class="content-ul">
                              <h3 class="primer-formacion">Formacion General</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Literatura</li>
                                <li><i class="fa-regular fa-angles-right"></i>Ingles</li>
                                <li><i class="fa-regular fa-angles-right"></i>Educacíon Física</li>
                                <li><i class="fa-regular fa-angles-right"></i>Salud y Adolescencia</li>
                                <li><i class="fa-regular fa-angles-right"></i>Historia</li>
                                <li><i class="fa-regular fa-angles-right"></i>Geografía</li>
                              </ul>
                             </div>
                             
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formacion Cientifico Tecnologico</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Matemática Ciclo Superior</li>
                                <li><i class="fa-regular fa-angles-right"></i>Física</li>
                                <li><i class="fa-regular fa-angles-right"></i>Química</li>
                                <li><i class="fa-regular fa-angles-right"></i>Conocimientos de los Materiales</li>
                              </ul>
                             </div>
    
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formación Técnico Específica</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Dibujo Tecnológico</li>
                                <li><i class="fa-regular fa-angles-right"></i>Maquinas Eléctricas y Automatismos</li>
                                <li><i class="fa-regular fa-angles-right"></i>Diseño y Procesamiento Mecánico</li>
                                <li><i class="fa-regular fa-angles-right"></i>Instalaciones y Aplicaciones de la Energía</li>
                              </ul>
                             </div>
    
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div class="accordion-item-header">
                          5° Año
                        </div>
                        <div class="accordion-item-body">
                          <div class="accordion-item-body-content">
                            <div class="content-ul">
                              <h3 class="primer-formacion">Formacion General</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Literatura</li>
                                <li><i class="fa-regular fa-angles-right"></i>Ingles</li>
                                <li><i class="fa-regular fa-angles-right"></i>Educacíon Física</li>
                                <li><i class="fa-regular fa-angles-right"></i>Política y Ciudadanía</li>
                                <li><i class="fa-regular fa-angles-right"></i>Historia</li>
                                <li><i class="fa-regular fa-angles-right"></i>Geografía</li>
                              </ul>
                             </div>
                             
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formación Científico Tecnológico</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Análisis Matemático</li>
                                <li><i class="fa-regular fa-angles-right"></i>Mecánica y Mecanismos</li>
                                <li><i class="fa-regular fa-angles-right"></i>Electrotecnia</li>
                                <li><i class="fa-regular fa-angles-right"></i>Resistencia y Ensayos de los Materiales</li>
                              </ul>
                             </div>
    
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formación Técnico Específica</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Maquinas Eléctricas y Automatismos</li>
                                <li><i class="fa-regular fa-angles-right"></i>Diseño y Procesamiento Mecánico</li>
                                <li><i class="fa-regular fa-angles-right"></i>Instalaciones y Aplicaciones de la Energía</li>
                              </ul>
                             </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div class="accordion-item-header">
                          6° Año
                        </div>
                        <div class="accordion-item-body">
                          <div class="accordion-item-body-content">
                            <div class="content-ul">
                              <h3 class="primer-formacion">Formacion General</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Literatura</li>
                                <li><i class="fa-regular fa-angles-right"></i>Ingles</li>
                                <li><i class="fa-regular fa-angles-right"></i>Educacíon Física</li>
                                <li><i class="fa-regular fa-angles-right"></i>Filosofía</li>
                                <li><i class="fa-regular fa-angles-right"></i>Arte</li>
                              </ul>
                             </div>
                             
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formación Científico Tecnológico</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Matemática Aplicada</li>
                                <li><i class="fa-regular fa-angles-right"></i>Termodinámica y Máquinas Térmicas</li>
                                <li><i class="fa-regular fa-angles-right"></i>Electrotecnia</li>
                                <li><i class="fa-regular fa-angles-right"></i>Sistemas Mecánicos</li>
                                <li><i class="fa-regular fa-angles-right"></i>Derechos del Trabajo</li>
                              </ul>
                             </div>
    
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formación Técnico Específica</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Laboratorio de Mediciones Eléctricas</li>
                                <li><i class="fa-regular fa-angles-right"></i>Maquinas Eléctricas y Automatismos</li>
                                <li><i class="fa-regular fa-angles-right"></i>Diseño y Procesamiento Mecánico</li>
                                <li><i class="fa-regular fa-angles-right"></i>Instalaciones y Aplicaciones de la Energía</li>
                              </ul>
                             </div> 
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div class="accordion-item-header">
                          7° Año
                        </div>
                        <div class="accordion-item-body">
                          <div class="accordion-item-body-content">
                            <div class="content-ul">
                              <h3 class="primer-formacion">Practicas Profesionalizantes</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Practicas Profesionalizantes del Sector Electromecánico</li>
                              </ul>
                             </div>
                             
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formacion Cientifico Tecnologico</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Emprendimientos Productivos y Desarrollo Local</li>
                                <li><i class="fa-regular fa-angles-right"></i>Electrónica Industrial</li>
                                <li><i class="fa-regular fa-angles-right"></i>Seguridad, Higiene y Protección Ambiental</li>
                                <li><i class="fa-regular fa-angles-right"></i>Máquinas Eléctricas</li>
                                <li><i class="fa-regular fa-angles-right"></i>Sistemas Mecánicos</li>
                              </ul>
                             </div>
    
                             <div class="content-ul">
                              <h3 class="primer-formacion">Formación Técnico Específica</h3>
                              <ul class="primer-formacion--ul">
                                <li><i class="fa-regular fa-angles-right"></i>Laboratorio de Metrología y Control de Calidad</li>
                                <li><i class="fa-regular fa-angles-right"></i>Mantenimiento y Montaje Electromecánico</li>
                                <li><i class="fa-regular fa-angles-right"></i>Proyecto y Diseño Electromecánico</li>
                                <li><i class="fa-regular fa-angles-right"></i>Proyecto y Diseño de Instalaciones Eléctricas</li>
                              </ul>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <input id="box3" name="box" type="radio"> 
                <label for="box3">Campo laboral</label>
                <div class="content">
                  <h3 class="title-h3">SALIDA LABORAL</h3>
                    <div class="content-ul">
                      <p style="padding-left: 20px;">Los egresados podran desempeñarse en las siguientes áreas:</p>
                        <ul class="primer-formacion--ul">
                          <li><i class="fa-regular fa-angles-right"></i>Ingeniería en Electromecánica</li>
                          <li><i class="fa-regular fa-angles-right"></i>Ingeniería Industrial</li>
                          <li><i class="fa-regular fa-angles-right"></i>Automatización y Control Industrial</li>
                          <li><i class="fa-regular fa-angles-right"></i>Ingeniería Eléctrica</li>
                          <li><i class="fa-regular fa-angles-right"></i>Ingeniería en Electrónica</li>
                        </ul>
                    </div>
                    <div class="content-ul">
                      <p style="padding-left: 20px;">Universidades donde podes seguir estudiando:</p>
                      <ul class="primer-formacion--ul">
                        <li><i class="fa-regular fa-angles-right"></i>Universidad de Buenos Aires (UBA)</li>
                        <li><i class="fa-regular fa-angles-right"></i>Universidad tecnológica Nacional (UTN)</li>
                        <li><i class="fa-regular fa-angles-right"></i>Universidad Nacional de La Plata (UNLP)</li>
                        <li><i class="fa-regular fa-angles-right"></i>Universidad Argentina de la Empresa (UADE) </li>
                        <li><i class="fa-regular fa-angles-right"></i>Universidad de Palermo (UP)</li>
                      </ul>
                     </div>
                </div>
                <input id="box4" name="box" type="radio"> 
                <label for="box4">Practicas</label>
                <div class="content">
                  <h3 class="title-h3">PRACTICAS PROFESIONALIZANTES</h3>
                    <div class="content-p">
                      <P>En el marco de nuestro programa educativo para el séptimo año en nuestra escuela técnica secundaria, nos complace destacar la excelencia de la formación que ofrecemos en el campo de la electromecánica. Este programa está diseñado para brindar a nuestros estudiantes una experiencia educativa integral que los prepare para enfrentar los retos del mundo laboral en el ámbito electromecánico.</p>
                      <P>Durante el séptimo año, los estudiantes de nuestro programa de técnico en electromecánica tendrán la emocionante oportunidad de aplicar sus conocimientos en entornos prácticos y reales. Colaborarán estrechamente con empresas locales especializadas en electromecánica, participando en proyectos concretos que les permitirán desarrollar habilidades esenciales para este campo en constante evolución.</p>
                      <P>El objetivo principal de nuestro programa es proporcionar a los estudiantes una sólida formación técnica, al tiempo que fomentamos la aplicación práctica de sus conocimientos en el área de la electromecánica. Durante sus prácticas profesionales, los estudiantes se sumergirán en proyectos específicos, donde podrán aplicar sus habilidades para diseñar, mantener y reparar sistemas electromecánicos.</p>
                      <P>La formación en electromecánica no solo se centra en la adquisición de habilidades técnicas avanzadas, sino también en el desarrollo de competencias clave, como el trabajo en equipo, la comunicación efectiva y la gestión de proyectos. Los estudiantes trabajarán en equipos multidisciplinarios, colaborando con profesionales del sector para abordar desafíos reales y encontrar soluciones innovadoras.</p>
                      <P>A lo largo de este proceso, los estudiantes recibirán orientación especializada y retroalimentación constante para perfeccionar sus habilidades técnicas y fortalecer su capacidad para enfrentar problemas complejos en el campo electromecánico. Nuestro compromiso es brindar a nuestros estudiantes una experiencia educativa enriquecedora que los prepare no solo como técnicos competentes, sino también como profesionales capacitados para liderar en el apasionante mundo de la electromecánica.</p>
                      <P>Además de desarrollar aplicaciones y páginas web, los estudiantes también adquirirán habilidades de comunicación, trabajo en equipo y gestión de proyectos a medida que interactúan con los clientes y colaboran con otros profesionales. A lo largo del proceso, recibirán orientación y retroalimentación constante para mejorar sus habilidades técnicas y su capacidad para resolver problemas.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="imagen">  
    </section>
    <footer>
        <div class="footer__container">
            <div class="footer__box">
                <figure class="footer__contimg">
                    <img class="footer__img" src="../../../images/logo.png">
                </figure>
            </div>
            <div class="footer__box">
                <h2 class="footer__h2">Redes Sociales</h2>
                <ul class="footer__ul">
                    <li class="footer__1er-item"><a href="https://www.facebook.com/profile.php?id=100000755543895" target="_blank">Facebook</a></li>
                    <li class="footer__1er-item"><a href="https://www.instagram.com/escuelatecnica5lanus/?next=%2F" target="_blank">Instagram</a></li>
                    <li class="footer__1er-item"><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBzDMLffdnFrgKFlGmqBpmkfHbDkljwwWdmxXZnVbXXJRNLxTzbDCktZJPdmXlwMdFXWxH" target="_blank">E-mail</a></li>
                </ul>
            </div>
            <div class="footer__box">
                <h2 class="footer__h2">Qué Estudiar</h2>
                <ul class="footer__ul">
                    <li class="footer__1er-item"><a href="../programacion/programacion.php" target="_blank">Programación</a></li>
                    <li class="footer__1er-item"><a href="../informatica/informatica.php" target="_blank">Informatica</a></li>
                    <li class="footer__1er-item"><a href="electromecanica.php" target="_blank">Electromecánica</a></li>
                </ul>
            </div>
            <div class="footer__box">
                <h2 class="footer__h2">Contacto</h2>
                <ul class="footer__ul">
                    <li class="footer__2do-item"><a href="#">(+54) 9 11 4241-8547</a></li>
                    <li class="footer__2do-item"><a href="#">4240-5026</a></li>
                </ul>
            </div>
        </div>
    </footer>
    <script type="text/javascript">
      const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
       accordionItemHeaders.forEach(accordionItemHeader => {
         accordionItemHeader.addEventListener("click", event => {
           accordionItemHeader.classList.toggle("active");
           const accordionItemBody = accordionItemHeader.nextElementSibling;
           if(accordionItemHeader.classList.contains("active")) {
             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
           }
           else {
             accordionItemBody.style.maxHeight = 0;
           }    
         });
       });
    </script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js'></script>
    <script src="https://kit.fontawesome.com/dbf412ac9a.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <script src="../../../js/header.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
</body>

</html>