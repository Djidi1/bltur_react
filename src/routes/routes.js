import React from "react";

import { HomePage } from '../pages/home';
import { InSpb } from '../pages/inSpb/index';
import { MiniGroups } from '../pages/inSpb/miniGroups';
import { OrgGroups } from '../pages/inSpb/orgGroups';
import { SetOfGroups } from '../pages/inSpb/setOfGroups';
import { FromSpb } from '../pages/fromSpb';

export const routes = [
  { exact: true, title: 'Главная', path: '/', component: HomePage },
  { exact: true, title: 'Прием в Санкт-Петербурге', path: '/прием_в_петербурге', component: InSpb },
  { exact: true, title: 'Мини-группы', path: '/прием_в_петербурге/мини-группы', component: MiniGroups },
  { exact: true, title: 'Организованные группы', path: '/прием_в_петербурге/организованные-группы', component: OrgGroups },
  { exact: true, title: 'Сборные группы', path: '/прием_в_петербурге/сборные-группы', component: SetOfGroups },
  { exact: false, title: 'Из Санкт-Петербурга', path: '/из_петербурга', component: FromSpb },
  { exact: false, title: 'Корпоративным клиентам', path: '/корпорат', component: About },
  { exact: false, title: 'Школьная', path: '/школьная', component: Users },
];

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
