import { TranscriptApiService } from './../../../services/transcript-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-transcript',
  templateUrl: './view-transcript.component.html',
  styleUrls: ['./view-transcript.component.css']
})
export class ViewTranscriptComponent implements OnInit {

  public appId: string;
  public applicationStatus: any;

  private apiPromise: Promise<any>;

  constructor(
    private apiTranscript: TranscriptApiService,
    private route: ActivatedRoute,
    private router: Router) {

    this.appId = this.route.snapshot.params['appNo'];
    this.apiPromise = this.apiTranscript.checkTranscriptStatus(this.appId).toPromise();
  }

  public ngOnInit() {
    this.apiPromise.then(data => {
      this.applicationStatus = this.mapAppStatus(data.result);
    });
  }

  public approve(): void {
    this.apiTranscript.updateTranscript({
      status: 'approved',
      appNo: this.appId
    }).subscribe(data => {
      console.log(data);
      this.close();
    });
  }

  public reject(): void {
    this.apiTranscript.updateTranscript({
      status: 'rejected',
      appNo: this.appId
    }).subscribe(data => {
      console.log(data);
      this.close();
    });
  }

  public startProcess(): void {
    this.apiTranscript.updateTranscript({
      status: 'inprocess',
      appNo: this.appId
    }).subscribe(data => {
      console.log(data);
      this.close();
    });
  }

  public close(): void {
    this.router.navigate([ 'transcript' ]);
  }

  public mapAppStatus(statusData: any): any {
    const submittedDate = new Date(Number(statusData.request_date) * 1000);
    const displayDate = submittedDate.toLocaleDateString();

    const appStatus: any = {
      applicationNumber: statusData.application_no,
      degreeLength: statusData.degree_length,
      enrollmentNo: statusData.enrollment_no,
      numberOfCopies: statusData.number_of_copies,
      date: submittedDate.toString(),
      displayDate: displayDate,
      semesters: statusData.semesters,
      status: statusData.status.toUpperCase()
    };

    return appStatus;
  }
}
