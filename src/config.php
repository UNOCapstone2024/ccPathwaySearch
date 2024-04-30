<?php

    $mode = 1;

    if ($mode == 0) {
        return array(
            'jspath' => 'site://www/_files/js/ts-tables.js',
            'stylesheetPath' => '../../../../../_files/uno-template/current/css/uno-template.css?dt=1710568858',
            'initPath' => 'https://www.unomaha.edu/registrar/students/before-you-enroll/transfer-credit/guided-pathways/index.txt',
            'carousel_01' => 'site://www/registrar/students/before-you-enroll/transfer-credit/guided-pathways/media/campus.jpg',
            'carousel_02' => 'site://www/registrar/students/before-you-enroll/transfer-credit/guided-pathways/media/aerial.jpg',
            'carousel_03' => 'site://www/registrar/students/before-you-enroll/transfer-credit/guided-pathways/media/durango_1.jpg',
            'carousel_04' => 'site://www/registrar/students/before-you-enroll/transfer-credit/guided-pathways/media/library.jpg',
            'carousel_05' => 'site://www/registrar/students/before-you-enroll/transfer-credit/guided-pathways/media/durango_2.jpg',
            'carousel_06' => 'site://www/registrar/students/before-you-enroll/transfer-credit/guided-pathways/media/commencement.jpg',
        );
    }

    elseif ($mode == 1) {
        return array(
            'jspath' => './dist/ts-tables.js',
            'stylesheetPath' => './styles.css',
            'initPath' => './data.txt',
            'carousel_01' => '_img/campus.jpg',
            'carousel_02' => '_img/aerial.jpg',
            'carousel_03' => '_img/durango_1.jpg',
            'carousel_04' => '_img/library.jpg',
            'carousel_05' => '_img/durango_2.jpg',
            'carousel_06' => '_img/commencement.jpg'
        );
    }

?>