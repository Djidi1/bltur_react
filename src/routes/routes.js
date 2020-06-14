import React from "react";

import { HomePage } from '../pages/home';
import { InSpb } from '../pages/inSpb';
import { FromSpb } from '../pages/fromSpb';
import { GroupTur } from '../pages/groupTur';

export const routes = [
  { exact: true, path: '/', component: HomePage },
  { exact: false, path: '/прием_в_петербурге', component: InSpb },
  { exact: false, path: '/из_петербурга', component: FromSpb },
  { exact: false, path: '/корпорат', component: About },
  { exact: false, path: '/школьная', component: Users },
  { exact: false, path: '/сборные_группы', component: GroupTur },
];

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
