#include <iostream>
using namespace std;

void printReversedArray(int arr [], int n);

int main() {
	int t;
	cin >> t;
	while(t--){
	    int n;
	    cin >> n;
	    int arr[n];
	    for(int i=0;i<n;i++) cin >> arr[i];
	    printReversedArray(arr, n);
	}
	return 0;
}

void printReversedArray(int arr [], int n){
    for(int i=n-1;i>=0;i--){
        cout << arr[i] << " ";
    }
    cout << endl;
}