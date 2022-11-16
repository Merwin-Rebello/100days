#include<stdio.h>
#include<stdlib.h>
 
struct node 
{
    /* data */
    int data;
    struct node* next;
};
struct node *front =NULL,*rear= NULL;
struct node*createNode(int data)
{
    struct node*newnode=(struct node*)malloc(sizeof(structnode));// memory address and allocation for my node
    newnode->data= data;
    newnode->next= NULL;
    return(newnode);
}
  void Enqueue(int data)
  {
    struct node *ptr =createNode(data);
    if(rear==NULL)  //REAR ==NULL is the first elementt
    {
        front = rear = ptr;
        return;
    }
    else{
        rear->next=ptr;
        rear=ptr;
    }

    void Dequeue()
    {
        struct node *tmp;
         
         if(front==NULL)
         {
            printf("Queue is empty")
            return ;
         }
         else if(front== rear)// if only one element is present in the queue
         {
            tmp = front;
            front =rear= NULL;
         }
         else// MORE THAN  ONE NODE
         {
            tmp = front;
            front = front->next
         }
         free(tmp);
         return;
    } 
     void Display()
     {
         struct node *tmp;
          if(front== NULL)
          {
            printf("the queue is emptyy");
          }
          else{
            tmp=front;
            while(tmp)
            {
                printf("%3d",tmp=>data);
            }
            printf("\n");
          }
          return;
     }
  }
   int main()
   {
     int data ,ch;
     while(1)
     {
        printf("1.enqeue\n2.dequeue\n");
        printf("3.display\n4.exit");
        printf("enter ur choice:");
        scanf("%d",&ch);

        switch (ch)
        {
        case 1: /* constant-expression */:
            printf("enter upinput to insert:");
            scanf("%d",&data)
            Enqueue(data);
            break;
        case2:
            Dequeue();
            printf("element dequeued");
            break;
        case3:
            Display();
            break;    
        case4:
         exit(0);
        default:
        print("invalid input")
            break;
        }
     }
     return 0;
   }
