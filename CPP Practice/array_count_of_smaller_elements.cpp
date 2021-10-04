#include<bits/stdc++.h>
using namespace std;

int countOfElements(int arr[], int n, int x);

int main(){
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--) {
    int n, x;
    cout << "Enter number of elements in array: " << endl;
    cin >> n;
    int a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    cout << "Enter the element value to compare the array elements: " << endl;
    cin >> x;
    cout << countOfElements(a, n, x) << endl;
  }
  return 0;
}

int countOfElements(int arr[], int n, int x) {
    int count = 0;
    for(int i=0;i<n;i++){
        if(arr[i] <= x){
            count++;
        }
    }
    return count;
}