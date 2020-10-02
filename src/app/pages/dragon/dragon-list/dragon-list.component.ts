import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragonService } from 'src/app/services/dragon/dragon.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.css']
})
export class DragonListComponent implements OnInit {

  constructor(
    private dragonService: DragonService,
    private router: Router
  ) { }

  public listDragon;
  protected listDragonMaster;
  public filter;

  ngOnInit() {
    this.getDragonsAll();
  }

  getDragonsAll() {
    this.dragonService.getAll()
      .subscribe(res => {
        console.log(res);
        this.listDragonMaster = res;
        this.listDragon = res;
      })
  }

  filterList() {
    const filter = this.filter.toLowerCase()
    setTimeout(() => {
      this.listDragon = this.listDragonMaster.filter(f => f.name.toLowerCase().includes(filter) || f.type.toLowerCase().includes(filter) || f.createdAt.toLowerCase().includes(filter))
    }, 50);
  }

  create() {
    this.router.navigate(['dragon-register']);
  }

  edit(dragon) {
    this.router.navigate(['dragon-register/' + dragon.id]);
  }

  delete(dragon) {
    const result = confirm('Desejas realmente deletera do dragão com nome ' + dragon.name + '?');
    if (result) {
      this.dragonService.deleteDragonById(dragon.id)
        .subscribe(res => {
          this.getDragonsAll();
        })
    }

  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['login']);
  }

}
