#include<stdio.h>
int main()
{
    int start = 1;    // 首项
    int diff = 2;     // 公差
    int n = 10;      // 行数
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            printf("%d ", start + j * diff);
        }
        printf("\n");
    }
    return 0;
}