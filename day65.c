#include<stdio.h>
#include<stdlib.h>
#include<math.h>
int main ()
{
int num ,lbs,bmi; 
float height;
printf("enter the weight in kgs:");
scanf("%d",&num);
lbs=num*2.20462;
printf("The weight in lbs/pound is:%d \n",lbs);
printf("enter the height:");
scanf("%f",&height);
bmi= ((num)/(height)*(height));
printf(" The Body Mass Index is:%d",bmi );
return 0;
}