#include <stdio.h>
int main()
{
    int num;
    printf("enter a number");
    scanf("%d", &num);
    if (num % 2 == 0 && num % 4 == 0)
    {
        printf("%d is even", num);
    }
    else
    {
        printf("%d is odd", num);
    }
    return 0;
}