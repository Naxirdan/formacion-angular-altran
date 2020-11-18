#!/usr/bin/env bash

instaltran_dir="/usr/src/instaltran/"

echo 'jknknjkjkn'
    
echo "Ejecutando -> {cd $instaltran_dir}"
if ! cd $instaltran_dir
then
    echo "Error: no se encuentra el directorio $instaltran_dir, no se puede continuar"
    exit
fi

npm_install="npm install"

echo "Ejecutando -> {$npm_install}"
if ! $npm_install
then
    echo "Error: no se puede ejecutar {$npm_install}, no se puede continuar"
    exit
fi

# para evitar el prompt de analitics
ng analytics off
ng serve --host 0.0.0.0 --disableHostCheck=true 