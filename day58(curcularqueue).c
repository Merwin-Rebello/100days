#include<stdio.h>
#include<stdlib.h>
#define MAX 5
void insert();
void delete();
void front();
int queue[MAX],rear=-1, front=-1,item;
int main()
{
    int ch=1;
    printf(" insert\n 2 delete 3 display 4. exit");
    printf("enter your choice");
    scanf("%d",&ch);
    printf("%d,ch");
     while(ch!=4);
     {
        switch(ch)
        {
            case 1:
            insert();
            break;
            case 2:
            delete();
            break;
            case 3:
            front();
            break;
            case4:
            break;
            default:
            printf('inalid choice')

        }
     }
}
void insert()
{
    if (front==(rear+1)% MAX)
    {
        printf("circular queue is full");
    }

elseif ((front==-1)&&(rear ==-1))
{
    front=rear=0;
}
else{
    rear= (rear + 1)% MAX;
}
printf("\n enter item");
scanf("%d",&item);
queue[rear]=item;
}
 void delete()
 {
    if ((front==-1)&&(rear==-1))
    {
        printf("queue is empty ")
    }
    else if(front==rear)
    {
        item= queue[front];
        front=(front+1)%MAX;
    }
    printf("\N item deleted:%d",item);
 }
 void front()
 {
   printf("%d\t",queue[front])
    
 }
