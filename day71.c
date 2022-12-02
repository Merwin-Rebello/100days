#include<stdio.h>
int main()
{
    int s1,s2,s3,s4,s5;
    float avg;
    float percentage;
    printf("enter the marks of 5 subjects");
    scanf("%d %d %d %d %d",&s1,&s2,&s3,&s4,&s5);
    avg=(s1+s2+s3+s4+s5)/5;
    printf("the average is:",avg);
    printf("enter ur percentage");
    scanf("%d",&f);
    if(percentage >= 75)
    {
        printf("distinction!");
    }
    elseif(percentage<=60)
    {
        printf("first class");
    }
    elseif(percentage<=50)
    {
        printf("second class");
    }
    else{
        printf("sorry still u have passed")
    }
    
}