#include<stdio.h>
#include<iostream.h>

int main(){
    int size[50],x,num,i;
    printf("Enter the no of elements:"\n);
    scanf("%d",&num);
    printf("Enter elements of array:");
    for(i=0;i<n;i++){
        scanf("%d",&size[i]);
    }
    printf("Enter the element to be found:");
    scanf("%d",&x);
    for(i=0;i<n;i++)
    {
        if(size[i]==x)
        {
            printf("element found at position : %d",i);
        }
        else
        {
            printf("element not found");
        }
    }
return 0;        
}