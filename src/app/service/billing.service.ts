import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

import { map, catchError } from "rxjs/operators";
import { Bill } from "../model/bill";
import { NewBill } from "../model/new-bill";

@Injectable({
    providedIn: 'root'
})
export class BillingService {
    private readonly httpHeaders: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.httpHeaders = new HttpHeaders();
    }

    public viewBills(billId?: number, sDate?: string, eDate?: string) : Observable<any> {
        let url = 'http://localhost:9997/api/bill/';
        if (billId) {
            url = url + 'id/'+billId;
        } else if (sDate && eDate) {
            url = url + 'date/'+sDate+"/"+eDate;
        } else {
            url = url + 'all';
        }
        return this.httpClient.get(url, { headers: this.httpHeaders }).pipe(map(this.onSuccess, this), catchError(this.onError));
    }

    private onSuccess(response: any) : any {
        console.log('Successfully returned the response '+response);
        return response;
    }

    private onError() {
        return throwError("Exception while invoking billing API services");
    }

    public newBill(newBill: NewBill): Observable<NewBill> {
        return this.httpClient.post('http://localhost:9997/api/bill/newbi', newBill).pipe(map(this.onSuccessNewBill, this), catchError(this.onError));
    }

    public deleteBill(billId: number): Observable<any> {
        return this.httpClient.delete('http://localhost:9997/api/bill/delete/'+billId).pipe(map(this.onSuccessDelete, this), catchError(this.onError));
    }

    public updateBill(billId: number, bill: NewBill): Observable<any> {
        return this.httpClient.put('http://localhost:9997/api/bill/update/'+billId, bill).pipe(map(this.onSuccessNewBill, this), catchError(this.onError));
    }

    private onSuccessNewBill(response: any) : NewBill {
        console.log('Successfully returned the response after create/update '+response);
        return response;
    }

    private onSuccessDelete(response: any) : any {
        console.log('Successfully deleted the billing record ');
        return "SUCCESS";
    }
}