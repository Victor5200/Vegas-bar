import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {SwallUtil} from "../../shared/util/SwallUtil";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe((resp: any) => {
          SwallUtil.mensagemSucesso("Logado com Sucesso");
          this.router.navigate([this.returnUrl]);
          this.authenticationService.setUserName(this.f.username.value, resp.token);
        }, (error: any) => {
          SwallUtil.mensagemError("Login/Senha Invalidos");
          this.form.reset();
        });
  }

}
