import { Subscription } from 'rxjs';
import { NewsService } from './../../../shared/API-Service/news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  public news: any[] = []
  private subscription = new Subscription();

  constructor(private _NewsService: NewsService) {
  }

  ngOnInit() {
    this.getNews()

  }

  private getNews() {
    const news = this._NewsService.getNews().subscribe(news => {
      this.news = news.data
    })
    this._NewsService.setScriptJs()

    this.subscription.add(news)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
