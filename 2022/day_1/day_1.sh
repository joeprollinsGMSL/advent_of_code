#!/bin/bash
set -e

value=0
max_value=0

while read -r line;
do
	value=$((value))+$((line))

	if [ ${#line} -eq 0 ]
	then
		if [ $((value)) -gt $((max_value)) ]
		then
		max_value="$((value))"
		fi
		value=0
	fi

done < "elf_calorie_list.txt"

echo "$max_value"