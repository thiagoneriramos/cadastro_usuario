module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: ''
  },
  {
    type: 'tree',
    icon: 'fa fa-user-plus',
    name: 'Cadastro',
    items: [
      {
        type: 'item',
        icon: 'fa fa-user-plus',
        name: 'Cadastro de Usuário',
        router: {
          name: 'Cadastro'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-sign-in',
    name: 'Login',
    items: [
      {
        type: 'item',
        icon: 'fa fa-sign-in',
        name: 'Login do Usuário',
        router: {
          name: 'Login'
        }
      }
    ]
  }
]
