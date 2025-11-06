import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title:
          'Hortifruti | Painel Principal', // Deixei como Painel Principal/Ecommerce
      },
      {
        path:'calendar',
        component:CalenderComponent,
        title:'Calendário do Hortifruti' // Mantido
      },
      {
        path:'profile',
        component:ProfileComponent,
        title:'Perfil do Usuário | Hortifruti' // Alterado
      },
      {
        path:'form-elements',
        component:FormElementsComponent,
        title:'Cadastro e Formulários | Hortifruti' // Sugestão
      },
      {
        path:'basic-tables',
        component:BasicTablesComponent,
        title:'Tabelas de Produtos | Hortifruti' // Sugestão
      },
      {
        path:'blank',
        component:BlankComponent,
        title:'Página em Branco | Hortifruti' // Sugestão
      },
      // support tickets
      {
        path:'invoice',
        component:InvoicesComponent,
        title:'Detalhes da Nota Fiscal | Hortifruti' // Sugestão
      },
      {
        path:'line-chart',
        component:LineChartComponent,
        title:'Gráfico de Linha | Vendas Hortifruti' // Sugestão
      },
      {
        path:'bar-chart',
        component:BarChartComponent,
        title:'Gráfico de Barras | Estoque Hortifruti' // Sugestão
      },
      {
        path:'alerts',
        component:AlertsComponent,
        title:'Alertas e Notificações | Hortifruti' // Sugestão
      },
      {
        path:'avatars',
        component:AvatarElementComponent,
        title:'Avatares de Usuário | Hortifruti' // Sugestão
      },
      {
        path:'badge',
        component:BadgesComponent,
        title:'Badges e Etiquetas | Hortifruti' // Sugestão
      },
      {
        path:'buttons',
        component:ButtonsComponent,
        title:'Botões de Ação | Hortifruti' // Sugestão
      },
      {
        path:'images',
        component:ImagesComponent,
        title:'Imagens de Produtos | Hortifruti' // Sugestão
      },
      {
        path:'videos',
        component:VideosComponent,
        title:'Vídeos Promocionais | Hortifruti' // Sugestão
      },
    ]
  },
  // auth pages
  {
    path:'signin',
    component:SignInComponent,
    title:'Login | Acesso ao Hortifruti' // Sugestão
  },
  {
    path:'signup',
    component:SignUpComponent,
    title:'Registro | Novo Usuário Hortifruti' // Sugestão
  },
  // error pages
  {
    path:'**',
    component:NotFoundComponent,
    title:'Página Não Encontrada | Erro 404' // Sugestão
  },
];