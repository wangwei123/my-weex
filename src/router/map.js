import route from './route'

export default [
  {
    path: '/',
    redirect: {
      path: route.home.path
    }
  },
  {
    title: route.home.title,
    path: route.home.path,
    component: route.home.component
  }
]
