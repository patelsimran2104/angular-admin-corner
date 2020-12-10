import { TranscriptApiService } from './../../services/transcript-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

  public transcripts: any[] = [];

  constructor(
    private apiTranscript: TranscriptApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.apiTranscript.getTranscripts().subscribe(data => {
      this.transcripts = data.result.map((transcript: any) => {
        const submittedDate = new Date(Number(transcript.request_date) * 1000);
        const displayDate = submittedDate.toLocaleDateString();

        const newTrans = {
          ...transcript,
          displayDate
        }

        return newTrans;
      });
    });
  }

  public viewTranscript(appNo: string): void {
    this.router.navigate([ 'view-transcript', appNo ]);
  }
}
