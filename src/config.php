<?php

    $mode = 1;

    if ($mode == 0) {
        return array(
            'jspath' => 'site://www/_files/js/ts-tables.js',
            'stylesheetPath' => '../../../../../_files/uno-template/current/css/uno-template.css?dt=1710568858',
            'initPath' => 'https://www.unomaha.edu/registrar/students/before-you-enroll/transfer-credit/guided-pathways/index.txt'
         
        );
    }

    elseif ($mode == 1) {
        return array(
            'jspath' => './dist/ts-tables.js',
            'stylesheetPath' => './styles.css',
            'initPath' => './data.txt'
        );
    }

?>