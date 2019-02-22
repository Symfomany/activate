#!/bin/bash
echo "Countdown"

for (( c=$START; c<=$END; c++ ))
do
    echo -n "$c "
    sleep 1
done

echo
echo "Boom!"

## define an array ##
arrayname=( Dell HP Oracle )

## get item count using ${arrayname[@]} ##
for m in "${arrayname[@]}"
do
    echo "${m}"
    # do something on $m #
done


tar cvzf mon_archive.tar ./assets/*
