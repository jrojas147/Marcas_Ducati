import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScanparamsService {

  utm: string;
  idc: number;
  idv: number;

  constructor(private route: ActivatedRoute) { }

    getParams() {
      this.route.queryParams.subscribe((data: any) => {

      if (data.utm_source) {
        this.utm = data.utm_source;
      }
      if (data.idc) {
        this.idc = Number(data.idc);
      }
      if (data.idv) {
        this.idv = Number(data.idv);
      }
    });
  }

   
}
