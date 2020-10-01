import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  private usuariosCriados = [
    { usulog: 'compasso', usupwd: 'c0mp4550' },
    { usulog: 'admin', usupwd: 'admin' },
    { usulog: 'mateus', usupwd: 'schwade' },
  ]

  protected usuario = { usulog: '', usupwd: '' };
  public usuarioForm: FormGroup;


  ngOnInit(): void {
    this.formUsuario();
  }

  formUsuario() {
    this.usuarioForm = new FormGroup({
      usulog: new FormControl(this.usuario.usulog),
      usupwd: new FormControl(this.usuario.usupwd)
    });
  }

  login() {
    const usu = this.usuarioForm.value;
    const usuAcesso = this.usuariosCriados.find(f => f.usulog === usu.usulog && f.usupwd === usu.usupwd);
    if (usuAcesso) {
      window.localStorage.setItem('dwlounsa', btoa(JSON.stringify(usuAcesso)))
      this.usuarioForm.reset();
      this.router.navigate(['dragon']);
    } else {
      alert('Usuario não encontrado!');
    }
  }


}
