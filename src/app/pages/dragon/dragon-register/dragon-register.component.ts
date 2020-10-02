import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonService } from 'src/app/services/dragon/dragon.service';

@Component({
  selector: 'app-dragon-register',
  templateUrl: './dragon-register.component.html',
  styleUrls: ['./dragon-register.component.css']
})
export class DragonRegisterComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dragonService: DragonService
  ) { }

  protected dragon = { id: '', name: '', type: '', createdAt: '', histories: [] };
  public dragonForm: FormGroup;
  public text: String;

  ngOnInit(): void {
    this.formDragon();
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.text = 'Editar';
      this.getDragon(Number(id))
    } else {
      this.text = 'Cadastrar';
    }

  }

  formDragon() {
    this.dragonForm = new FormGroup({
      id: new FormControl(this.dragon.id),
      name: new FormControl(this.dragon.name),
      type: new FormControl(this.dragon.type),
      createdAt: new FormControl(this.dragon.createdAt),
      histories: new FormControl(this.dragon.histories)
    });
  }

  salvar() {
    const dragon = this.dragonForm.value;
    if (dragon.id) {
      this.dragonService.putDragon(dragon)
        .subscribe(res => {
          alert('Dragão atualizado Com sucesso')
          this.router.navigate(['dragon'])
        })
    } else {
      dragon.createdAt = new Date();
      this.dragonService.postDragon(dragon)
        .subscribe(res => {
          alert('Dragão criado Com sucesso')
          this.router.navigate(['dragon'])
        })
    }
  }

  cancelar() {
    this.dragonForm.reset();
    this.router.navigate(['dragon'])
  }

  getDragon(id) {
    this.dragonService.getDragonById(id)
      .subscribe(res => {
        this.dragonForm.setValue(res);
      })
  }

}
