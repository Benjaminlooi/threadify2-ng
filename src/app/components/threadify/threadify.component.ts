import { Component, OnInit } from '@angular/core';
import { ThreadsService } from 'src/app/services/threads.service';
import { Directive, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

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
  }

  ngAfterViewInit(): void {
    this.name_input_modal.show();
  }

  @ViewChild('name_input_modal') name_input_modal: ModalDirective;
  @ViewChild('container') container;

  sender_name: string;
  name_submit(name) {
    this.name_input_modal.hide();
    this.sender_name = name;
  }

  threads;
  getCoffeeOrders = () => {
    this.threadsService.getThreads().subscribe(res => {
      this.threads = res;
      setTimeout(() => {
        this.scrollToBottom();
      }, 50);
    });
  }

  threadInput2: string;

  onSubmit(thread_message) {
    this.threadInput2 = '';
    var data = {
      message: thread_message,
      sender: this.sender_name,
      timestamp: new Date()
    }
    this.threadsService.createThread(data);
  }

  private scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

}
