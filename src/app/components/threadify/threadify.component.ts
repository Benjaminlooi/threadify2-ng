import { Component, OnInit } from '@angular/core';
import { ThreadsService } from 'src/app/services/threads.service';
import { Directive, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-threadify',
  templateUrl: './threadify.component.html',
  styleUrls: ['./threadify.component.scss']
})
export class ThreadifyComponent implements OnInit {

  constructor(
    private threadsService: ThreadsService
  ) { }

  ngOnInit() {
    this.getCoffeeOrders();
    this.scrollToBottom();
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();

  }

  @ViewChild('container') container;

  threads;
  getCoffeeOrders = () => {
    this.threadsService.getThreads().subscribe(res => {
      this.threads = res;
      setTimeout( () => {
        this.scrollToBottom();
      }, 50);  
    });
  }

  threadInput2: string;
  onSubmit(data) {
    this.threadInput2 = '';
    this.threadsService.createThread(data);
  }

  private scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

}
