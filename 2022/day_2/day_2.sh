#!bin/bash
set -e

score=0

A=1 # rock
B=2 # paper
C=3 # scissors
X=1 # rock
Y=2 # paper
Z=3 # scissors

echo "$A"

while read -r line; 
do
	echo "$line"
done < "input.txt"