
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from './../model/course';

@Component({
  standalone: false,
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns = ['name', 'category'];
  dataSource = new MatTableDataSource<Course>([
    {_id: '1', name: 'Angular', category: 'Front-End'},
    {_id: '2', name: 'Java', category: 'Back-End'},
    {_id: '3', name: 'Spring Boot', category: 'Back-End'},
    {_id: '4', name: 'C#', category: '.NET'},
    {_id: '5', name: 'Python', category: 'Data Science'},
  ]);

  ngOnInit(): void {

  }
}
