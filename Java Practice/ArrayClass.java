import java.util.*;
import java.lang.*;
import java.io.*;

class ArrayClass {
	public static void main (String[] args) {
	    Scanner scan = new Scanner(System.in);
	    int t = scan.nextInt();
	    for(int i=0;i<t;i++){
	        int n = scan.nextInt();
	        int arr[] = new int[n];
	        for(int j=0;j<n;j++){
	            arr[j] = scan.nextInt();
	        }
	        int min = arr[0];
            int max = arr[0];
            for(int j=1;j<n;j++){
                if(arr[j] < min) { 
                    min = arr[j];
                }
                if(arr[j] > max) { 
                    max = arr[j];
                }
            }
            System.out.println(max + " " + min);
	    }

      scan.close();
	}
}