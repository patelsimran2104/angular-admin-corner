import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranscriptApiService {

  public httpOptions: any = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTranscripts(): Observable<any> {
    return this.httpClient.get(`http://localhost:8085/api/v1/transcripts`, { ...this.httpOptions });
  }

  public submitNewTranscript(body: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8085/api/v1/transcripts/add`, JSON.stringify(body), { ...this.httpOptions });
  }

  public checkTranscriptStatus(applicationNo: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8085/api/v1/transcripts/check-status/${applicationNo}`, { ...this.httpOptions });
  }

  public updateTranscript(body: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8085/api/v1/transcripts/update`, JSON.stringify(body), { ...this.httpOptions });
  }
}
