#include<iostream>
using namespace std;

class Solution{
    public:
    int getSum(int a[], int n) {
        int sum = a[0];
        for(int i=1;i<n;i++){
            sum += a[i];
        }
        return sum;
    }   
};

int main() {
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--) {
    int n;
    cout << "Enter number of elements in array: " << endl;
    cin >> n;
    int a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    Solution ob;
    cout << ob.getSum(a, n) << endl;
  }
}