#include <stdio.h>
#include <stdlib.h>
#define max 5
int a[max], top;
int isEmpty()
{
    if (top == -1)
        return 1 else return 0
}
int isFull()
{
    if (top == max - 1)
        return 1 else return 0
}
int peek()
{
    if (isEmpty)
    {
        printf("stack is empty");
        return 1
    }
    else
    {
        printf("%d", a[top]);
    }
}
void push()
{
    int x;
    if (isFull())
    {
        printf("sTACK IS FULL");
    }
    printf("enter the number");
    scanf("%d", &x);
    top++;
    a[top] = x;
    printf("%d succ.pushed", x);
}
void pop()
{
    int y;
    if (isEmpty())
    {
        printf("stack is empty");
        return (-1)
    }
    y = a[top];
    top--;
    printf("%d successfully poped", y);
    return;
}
void display()
{
    int i;
    if (isEmpty())
    {
        printf("stack is empty");
        return ();
    }
    for (i = 0; i <= top; i++)
    {
        printf(" element are:%d", a[i]);
        return;
    }
}
int main(void)
{
    int c;
    top = -1;
    // clrscr();
    system("cls");
    do
    {
        printf("1:push\n2:pop\n3:display\n4:peek\n5:exit\nchoice:");
        scanf("%d", &c);
        switch (c)
        {
        case 1:
            push();
            break;
        case 2:
            pop();
            break;
        case 3:
            display();
            break;
        case 4:
            peek();
            break;
        case 5:
            printf("pgm ends\n");
            break;
        default:
            printf("wrong choice\n");
            break;
        }
    } while (c != 4);
}