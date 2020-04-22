import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ControleCadastroComponent } from './controle-cadastro/controle-cadastro.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { EmpresasComponent } from './catalogos/empresas/empresas.component';
import { FornecedoresComponent } from './catalogos/fornecedores/fornecedores.component';
import { ContasComponent } from './catalogos/contas/contas.component';
import { RecursosComponent } from './catalogos/recursos/recursos.component';
import { HomologadosComponent } from './catalogos/homologados/homologados.component';
import { UnidadesComponent } from './catalogos/unidades/unidades.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { NovoCadastroComponent } from './controle-cadastro/novo-cadastro/novo-cadastro.component';
import { TodosCadastroComponent } from './controle-cadastro/todos-cadastro/todos-cadastro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
  data: {
    breadcrumb: 'Home'
  }},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService],
  data: {
    breadcrumb: 'Novo Usuário'
  }},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService],
  data: {
    breadcrumb: 'Perfil Usuário'
  }},
  { path: 'cadastro',
  component: ControleCadastroComponent, // this is the component with the <router-outlet> in the template
  canActivate: [AuthGuardService],
  data: {
    breadcrumb: 'Cadastro'
  },
  children: [
    {
      path: 'novo-cadastro', // child route path
      component: NovoCadastroComponent,
      canActivate: [AuthGuardService],
      data: {
        breadcrumb: 'Novo Cadastro'
      },
    },
      {
        path: 'todos-cadastro', // child route path
        component: TodosCadastroComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Inventário'
        },
      }
     ]
  },
  { path: 'catalogos',
    component: CatalogosComponent, // this is the component with the <router-outlet> in the template
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Catálogos'
    },
    children: [
      {
        path: 'empresas', // child route path
        component: EmpresasComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Empresas'
        }
      },
      {
        path: 'fornecedores',
        component: FornecedoresComponent, // another child route component that the router renders
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Forncedores'
        }
      },
      {
        path: 'contas',
        component: ContasComponent, // another child route component that the router renders
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Contas'
        }
      },
      {
        path: 'homologados',
        component: HomologadosComponent, // another child route component that the router renders
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Aparelhos Homologados'
        }
      },
      {
        path: 'recursos',
        component: RecursosComponent, // another child route component that the router renders
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Recursos'
        }
      },
      {
        path: 'unidades',
        component: UnidadesComponent, // another child route component that the router renders
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Unidades'
        }
      }
    ] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
