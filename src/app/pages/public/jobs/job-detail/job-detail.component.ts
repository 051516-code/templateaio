// src/app/pages/jobs/job-detail/job-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../models/job.model';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit {
  
  job: Job | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.job = this.jobsService.getJobById(id);
    } else {
      console.error('No job ID found in route parameters');
    }
  }
}
