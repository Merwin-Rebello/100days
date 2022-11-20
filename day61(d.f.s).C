#include <stdio.h>
#include <stdlib.h>

void DFS(int);
int G[10][10], visited[10], n = 0;
int main()
{
    int i = 0, j = 0;
    printf("enter the number of vertices");
    scanf("%d", &n);
}
{
    printf("enter the adjacency matrix of the graph");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &G[i][j]);
    for (i = 0 : i < n; i++)
        visited[i] = 0;
    int start;
    printf("enter the starting vertex");
    scanf("%d", &start);
    DFS(start);
    return (0);
}
void DFS(int i)
{
    int j;
    printf("%d", i);
    visited[i] = 1;
    for (j = 0; j < n; j++)
    {
        if (!visited[j] && G[i][j] == 1)
            DFS(j);
    }
}