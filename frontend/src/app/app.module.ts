import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { ControleCadastroComponent } from './controle-cadastro/controle-cadastro.component';
import { EmpresasComponent } from './catalogos/empresas/empresas.component';
import { FornecedoresComponent } from './catalogos/fornecedores/fornecedores.component';
import { ContasComponent } from './catalogos/contas/contas.component';
import { RecursosComponent } from './catalogos/recursos/recursos.component';
import { HomologadosComponent } from './catalogos/homologados/homologados.component';
import { UnidadesComponent } from './catalogos/unidades/unidades.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';
import { DataTablesModule } from 'angular-datatables';
import { NovoCadastroComponent } from './controle-cadastro/novo-cadastro/novo-cadastro.component';
import { TodosCadastroComponent } from './controle-cadastro/todos-cadastro/todos-cadastro.component';
import { TrocaDddComponent } from './controle-cadastro/troca-ddd/troca-ddd.component';
import { ControleEstoqueComponent } from './controle-estoque/controle-estoque.component';
import { AparelhoComponent } from './controle-estoque/aparelho/aparelho.component';
import { ChipComponent } from './controle-estoque/chip/chip.component';
import { DashboardComponent } from './controle-estoque/dashboard/dashboard.component';
import { ControleBackupComponent } from './controle-backup/controle-backup.component';
import { CadastroBackupComponent } from './controle-backup/cadastro-backup/cadastro-backup.component';
import { DescarteBackupComponent } from './controle-backup/descarte-backup/descarte-backup.component';
import { ProjetosComponent } from './catalogos/projetos/projetos.component';
import { OperadorasComponent } from './catalogos/operadoras/operadoras.component';
import { LinhaComponent } from './controle-estoque/linha/linha.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ControleCadastroComponent,
    EmpresasComponent,
    FornecedoresComponent,
    ContasComponent,
    RecursosComponent,
    HomologadosComponent,
    UnidadesComponent,
    PageNotFoundComponentComponent,
    CatalogosComponent,
    BreadcrumpComponent,
    NovoCadastroComponent,
    TodosCadastroComponent,
    TrocaDddComponent,
    ControleEstoqueComponent,
    AparelhoComponent,
    ChipComponent,
    DashboardComponent,
    ControleBackupComponent,
    CadastroBackupComponent,
    DescarteBackupComponent,
    ProjetosComponent,
    OperadorasComponent,
    LinhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
