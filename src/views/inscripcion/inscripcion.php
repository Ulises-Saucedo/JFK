<?php
    session_start();
    require '../../../db.php';

    if(isset($_SESSION['user_id'])){
        $records = $conn->prepare('SELECT id, username, password from usuarios where id = :id');
        $records->bindParam(':id', $_SESSION['user_id']);
        $records->execute();
        $results = $records->fetch(PDO::FETCH_ASSOC);

        $user = null;

        if(count($results) > 0){
            $user = $results;
        }
    }        
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../images/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../../styles/footer.css">
    <link rel="stylesheet" href="../../styles/header.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <title>John Fitzgerald Kennedy | Inscripción</title>
</head>
<body>
    <header>
        <nav class="navbar .navbar-expand-lg. fixed-top s">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="src/images/logo.svg" alt="" width="70" height="94">John F. Kennedy</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="../../../index.php"><i class="bi bi-house bi-ul-r"></i>Inicio</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-caret-down bi-ul-r"></i>
                                        Especialidades
                                    </a>
                                    <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../especialidades/electromecanica/electromecanica.php"><i class="bi bi-gear bi-ul-r"></i>Electromecánica</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="../especialidades/informatica/informatica.php"><i class="bi bi-motherboard bi-ul-r"></i>Informática</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="../especialidades/programacion/programacion.php"><i class="bi bi-laptop bi-ul-r"></i>Programación</a></li>
                                    </ul>
                                </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="inscripcion.php"><i class="bi bi-file-earmark-text bi-ul-r"></i>Inscripción</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../foro/foro.php"><i class="bi bi-chat-left-dots bi-ul-r">Foro</i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../biblioteca/biblioteca.php"><i class="bi bi-archive bi-ul-r">Biblioteca</i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../galeria/galeria.php"><i class="bi bi-camera bi-ul-r"></i>Galería</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../historia/historia.php"><i class="bi bi-bank bi-ul-r"></i>Historia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../contacto/contacto.php"><i class="bi bi-envelope-paper bi-ul-r"></i>Contacto</a>
                            </li>
                            <?php if (!empty($user)): ?>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="../admin/panel.php">Panel de administrador</a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="menu">
            <ul>
                <li><a href="../../../index.php"><i class="bi bi-house bi-ul-r"></i>Inicio</a></li>
                <li class="specialties"><a href="#" class="toggle-icon"><i class="bi bi-caret-down bi-ul-r"></i>Especialidades</a>
                    <ul class="submenu animate__animated animate__fadeIn">
                        <li><a href="../especialidades/electromecanica/electromecanica.php"><i class="bi bi-gear bi-ul-r"></i>Electromecánica</a></li>
                        <li><a href="../especialidades/informatica/informatica.php"><i class="bi bi-motherboard bi-ul-r"></i>Informática</a></li>
                        <li><a href="../especialidades/programacion/programacion.php"><i class="bi bi-laptop bi-ul-r"></i>Programación</a></li>
                    </ul>
                </li>
                <li><a href="inscripcion.php"><i class="bi bi-file-earmark-text bi-ul-r"></i>Inscripción</a></li>
                <li><a href="../foro/foro.php"><i class="bi bi-chat-left-dots bi-ul-r"></i>Foro</a></li>
                <li><a href="../biblioteca/biblioteca.php"><i class="bi bi-archive bi-ul-r"></i>Biblioteca</a></li>
                <li class="school"><a href="#" class="toggle-icon"><i class="bi bi-caret-down bi-ul-r"></i>Escuela</a>
                    <ul class="submenu animate__animated animate__fadeIn">
                        <li><a href="../galeria/galeria.php"><i class="bi bi-camera bi-ul-r"></i>Galería</a></li>
                        <li><a href="../historia/historia.php"><i class="bi bi-bank bi-ul-r"></i>Historia</a></li>
                    </ul>
                </li>
                <li><a href="../contacto/contacto.php"><i class="bi bi-envelope-paper bi-ul-r"></i>Contacto</a></li>
                <?php if(!empty($user)): ?>
                    <li><a href="../admin/panel.php">Panel de administrador</a></li>
                <?php endif; ?>
            </ul>
        </div>
    </header>
    <section>
      <div class="containerr">
      <h2>Inscripción de ingresantes 2024</h2>
        <p class="p1">Sres Padres: Haremos un primer acercamiento para quienes deseen inscribirse a 1° año en el ciclo lectivo 2023. <b> Del 24 al 28 de Octubre de 2022 de 09 a 11 hs y de 14 a 16 hs. </b> <br>

            Se deberá presentar fotocopia del DNI del alumno y certificado de alumno regular de la escuela a la cual asiste. Además se tomaran datos e información particular de contacto para conformar un registro. 
            
            Una vez realizado este primer contacto de forma personal su hijo/a quedara registrado como solicitante de una vacante para cursar el año en el ciclo lectivo 2023. <br>
            
            <b>ACLARACION IMPORTANTE: La conformación del registro de contacto no implica reserva de vacante y/o turno</b> <br>
            
            La inscripción definitiva se realizará a partir del momento en que el alumno haya promovido el año en curso y de acuerdo al siguiente cronograma: <br> </p>

            <ul class="ul">
              <li>A partir del 13/12: los Sres. Padres deberán descargar de www.eest5lanus.edu.ar sección “INCRIPCION”, botón “DOCUMENTACION INSCRIPCION” los formularios y autorizaciones que deberán completar y firmar. Para ser presentados en la inscripción definitiva.</li>
              <li>19/12 al 21/12:Inscripción definitiva, para lo cual los Sres. Padres deberán concurrir con la documentación descargada completa y firmada. Agregando la siguiente documentación: fotocopia de la partida de nacimiento, fotocopia de DNI (2 juegos), fotocopia DNI padres o tutor responsable, fotocopia del plan de vacunación y constancia de aprobación del año en curso.</li>
            </ul>

            <p class="p1">La misma se reanudará a partir del día 15 de febrero de 2023 en el mismo horario.
            
            Informamos que la Dirección del Establecimiento decidirá la asignación de los turnos de acuerdo a las vacantes disponibles y a la prioridad de la inscripción definitiva. Los alumnos ingresantes a 1º año del ciclo básico deberán adquirir en la librería del establecimiento el cuadernillo de actividades de nivelación de Prácticas del Lenguaje y Matemática, que deberá estar cumplimentado al iniciar el ciclo lectivo.
            
            ¡Gracias por elegir nuestra escuela!</p>
            <div class="docum">
                <a class="docum__a" href="DOCUMENTACION_INSCRIPCION.pdf" target="_blank">DOCUMENTACION INSCRIPCION</a>
            </div>
      </div>
    </section> 
    <footer>
        <div class="footer__container">
            <div class="footer__box">
                <figure class="footer__contimg">
                    <img class="footer__img" src="../../images/logo.png">
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
                    <li class="footer__1er-item"><a href="../especialidades/programacion/programacion.php" target="_blank">Programación</a></li>
                    <li class="footer__1er-item"><a href="../especialidades/informatica/informatica.php" target="_blank">Informatica</a></li>
                    <li class="footer__1er-item"><a href="../especialidades/electromecanica/electromecanica.php" target="_blank">Electromecánica</a></li>
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
    <script src="../../js/header.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>
</html>
