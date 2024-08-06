import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from './models/job.model';
import { JobsService } from './services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  
  jobs: Job[] = [];

  constructor(
    private router: Router,
    private jobsService: JobsService
    ) { }

  ngOnInit() {
    this.jobs = this.jobsService.getJobs();
  }

  openJobDetail(job: any) {
   
    this.router.navigate(['aio/jobs', job.id]);
  }
  
}
