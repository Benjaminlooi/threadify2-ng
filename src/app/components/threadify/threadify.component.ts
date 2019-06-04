import { Component, OnInit } from '@angular/core';
import { ThreadsService } from 'src/app/services/threads.service';
import { Directive, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-threadify',
  templateUrl: './threadify.component.html',
  styleUrls: ['./threadify.component.scss']
})
export class ThreadifyComponent implements OnInit {

  private user;
  private threads;
  threadInput2: string;

  
  constructor(
    private threadsService: ThreadsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.getAllThreads();
    this.auth.user$.subscribe(res=> {
      if(res){
        this.user = res;
      }
    });
  }

  @ViewChild('container') container;

  getAllThreads = () => {
    this.threadsService.getThreads().subscribe(res => {
      this.threads = res;
      setTimeout(() => {
        this.scrollToBottom();
      }, 50);
    });
  }

  onSubmit(thread_message) {
    if(thread_message){
      this.threadInput2 = '';
      var data = {
        message: thread_message,
        sender: this.user.displayName,
        timestamp: new Date()
      }
      this.threadsService.createThread(data);
    }
  }

  private scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

}
