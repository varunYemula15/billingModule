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

    public viewBills() : Observable<Bill[]> {
        return this.httpClient.get('http://localhost:9997/api/bill/all', { headers: this.httpHeaders }).pipe(map(this.onSuccess, this), catchError(this.onError));
    }

    private onSuccess(response: any) : Bill[] {
        console.log('Successfully returned the response '+response);
        return response;
    }

    private onError() {
        return throwError("Exception while invoking billing API services");
    }

    public newBill(newBill: NewBill): Observable<NewBill> {
        return this.httpClient.post('http://localhost:9997/api/bill/newbi', newBill).pipe(map(this.onSuccessNewBill, this), catchError(this.onError));
    }

    private onSuccessNewBill(response: any) : NewBill {
        console.log('Successfully returned the response '+response);
        return response;
    }
}